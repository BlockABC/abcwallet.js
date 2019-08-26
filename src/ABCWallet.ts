import uniqueId from 'lodash-es/uniqueId'
import { VConsoleInstance } from 'vconsole'
import { Logger } from 'loglevel'
import EventEmitter from 'eventemitter3'

import { IRequest, IPromise } from './interface'
import { isRequest } from './helper'

import api, { WebviewAPI, PrivateAPI, BTCAPI, ETHAPI, EOSAPI } from './api'
import NativeChannel, { INativeChannel } from './NativeChannel'

export class ABCWallet extends EventEmitter {
  public vconsole: VConsoleInstance
  public log: Logger
  public webview: WebviewAPI
  public private: PrivateAPI
  public btc: BTCAPI
  public eth: ETHAPI
  public eos: EOSAPI
  nativeChannel: INativeChannel

  protected _promises: Map<string, IPromise> = new Map()
  protected _timer: any

  constructor (vconsole: VConsoleInstance, logger: Logger) {
    super()

    this.vconsole = vconsole
    this.log = logger

    // @ts-ignore ts2350，ts 不允许对非 void 的函数调用 new
    this.nativeChannel = new NativeChannel('ABCWalletBridge')

    for (const key of Object.keys(api)) {
      this[key] = new api[key](this)
    }

    this._timer = setInterval(() => {
      const now = (new Date()).getTime()
      for (const [key, promise] of this._promises) {
        const duration = now - promise.createdAt.getTime()
        if (duration > 3600 * 1000) {
          this.log.warn('ABCWallet.response take too long(more than 5000ms):', promise.path)
        }
      }
    }, 1000)
  }

  request (payload: IRequest, isNotify = false) {
    return new Promise((resolve, reject) => {
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

      this.log.debug('ABCWallet.request will post message:', payload)
      this.nativeChannel.postMessage(payload)
    })
  }

  response (msg: any) {
    msg = JSON.parse(msg)

    this.log.debug('ABCWallet.response received message:', msg)

    if (isRequest(msg)) {
      this.log.debug('ABCWallet.response trigger notify:', msg.id)
      this.emit(`notify:${msg.method}`, msg.params)
    }
    else {
      // provider 中对应的 promise 取出并 resolve
      const promise = this._promises.get(msg.id)
      if (!promise) {
        this.log.error(`ABCWallet.response can not find promise[${msg.id}]:`, promise.path)
      }

      const duration = (new Date()).getTime() - promise.createdAt.getTime()
      if (duration > 5000) {
        this.log.warn('ABCWallet.response take too long(more than 5000ms):', promise.path)
      }

      // 删除已处理的 promise
      this._promises.delete(msg.id)
      this.log.debug('ABCWallet.response find and delete promise:', msg.id)

      if (msg.error) {
        this.log.error('ABCWallet.response error:', msg.error)
        promise.reject.call(this, msg.error)
      }
      else {
        this.log.error('ABCWallet.response result:', msg.result)
        promise.resolve.call(this, msg.result)
      }
    }
  }
}

export default ABCWallet
