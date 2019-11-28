import uniqueId from 'lodash-es/uniqueId'
import isFunction from 'lodash-es/isFunction'
import { Logger } from 'loglevel'
import * as EventEmitter from 'eventemitter3'

import { IRequest, IPromise, IChannel } from './interface'
import { isRequest } from './helper'
import api, { WebviewAPI, DappAPI, PrivateAPI, BTCAPI, BCHAPI, ETHAPI, EOSAPI } from './api'
import { NativeChannel, IframeChannel } from './channel'

export class ABCWallet extends EventEmitter {
  public log: Logger
  public webview: WebviewAPI
  public dapp: DappAPI
  public private: PrivateAPI
  public btc: BTCAPI
  public bch: BCHAPI
  public eth: ETHAPI
  public eos: EOSAPI

  protected _channel: IChannel
  protected _promises: Map<string, IPromise> = new Map()
  protected _timer: any

  constructor (logger: Logger) {
    super()
    window.ABCWallet = this
    this.log = logger

    if (window.self !== window.top) {
      this._channel = new IframeChannel()
      window.onmessage = (event): void => {
        if (event.data && typeof event.data === 'string' && event.data.includes('"jsonrpc":"2.0"')) {
          this.response(event.data)
        }
      }
    }
    else {
      this._channel = new NativeChannel('ABCWalletBridge', logger)
    }

    for (const key of Object.keys(api)) {
      this[key] = new api[key](this)
    }

    this._timer = setInterval((): void => {
      const now = (new Date()).getTime()
      for (const [, promise] of this._promises) {
        const duration = now - promise.createdAt.getTime()
        if (duration > 3600 * 1000) {
          this.log.warn('ABCWallet.response take too long(more than 5000ms):', promise.path)
        }
      }
    }, 1000)
  }

  request (payload: any, isNotify = false): Promise<any> {
    return new Promise((resolve, reject): void => {
      payload = Object.assign(payload, { id: isNotify ? '' : uniqueId('abcwallet-'), jsonrpc: '2.0' })

      // 如果不是通知，将 promise 的方法和回调都保存起来，等待响应
      if (!isNotify) {
        this.log.debug('ABCWallet.request add promise: ', payload.id)
        this._promises.set(payload.id, {
          resolve,
          reject,
          path: `${payload.namespace}:${payload.method}`,
          createdAt: new Date()
        })
      }

      this.log.debug('ABCWallet.request will send message:', payload)

      this._channel.postMessage(payload)
    })
  }

  response (msg: any) {
    try {
      msg = JSON.parse(msg)
      this.log.debug('ABCWallet.response received message:', msg)
    }
    catch (err) {
      this.log.error('ABCWallet.call parse message JSON failed.')
      return
    }
    const { id, method, params } = msg

    if (isRequest(msg)) {
      this.log.debug('ABCWallet.response trigger notify:', id)
      this.emit(`notify:${method}`, params)
    }
    else {
      // provider 中对应的 promise 取出并 resolve
      const promise = this._promises.get(id)
      if (!promise) {
        this.log.error(`ABCWallet.response can not find promise for message:`, id)
        return
      }

      const duration = (new Date()).getTime() - promise.createdAt.getTime()
      if (duration > 5000) {
        this.log.warn('ABCWallet.response take too long(more than 5000ms):', promise.path)
      }

      // 删除已处理的 promise
      this._promises.delete(id)
      this.log.debug('ABCWallet.response find and delete promise:', id)

      if (msg.error) {
        this.log.error('ABCWallet.response error:', msg.error)
        promise.reject.call(this, msg.error)
      }
      else {
        this.log.debug('ABCWallet.response result:', msg.result)
        promise.resolve.call(this, msg.result)
      }
    }
  }

  call (msg: any) {
    try {
      msg = JSON.parse(msg)
      this.log.debug('ABCWallet.call received message:', msg)
    }
    catch (err) {
      this.log.error('ABCWallet.call parse message JSON failed.')
      return
    }
    const { id, namespace, method, params } = msg

    // 根据 namespace 从全局取对应的对象
    const obj: any = window[namespace]
    if (!obj) {
      this.log.error(`ABCWallet.call can not find namespace: ${namespace}`)
      return
    }

    if (!obj[method] || !isFunction(obj[method])) {
      this.log.error(`ABCWallet.call can not find method: ${namespace}.${method}`)
      return
    }

    const ret = obj[method](params)
    if (ret.then && ret.catch) {
      ret.then(ret => {
        this._channel.postMessage({ jsonrpc: '2.0', id, result: ret })
      })
    }
    else {
      this._channel.postMessage({ jsonrpc: '2.0', id, result: ret })
    }
  }
}

export default ABCWallet
