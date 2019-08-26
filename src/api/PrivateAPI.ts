import { verifyParams } from '../helper'
import BaseAPI from './BaseAPI'
import { IDapp } from 'src/interface'

export class PrivateAPI extends BaseAPI {
  protected _namespace = 'abcwallet'

  ensureHasCard (params: { chainType: string }): Promise<void> {
    verifyParams(params, ['chainType'])

    return this._request({
      method: 'ensureHasCards',
      params
    }, true)
  }

  buildGiftTransaction (params: {
    chainType: string,
    toAddress: string,
    toPrivateKey: string,
    value: string,
    skin: string,
    message: string,
  }): Promise<{ transaction: string }> {
    verifyParams(params, ['chainType', 'toAddress', 'toPrivateKey', 'value', 'skin', 'message'])

    return this._request({
      method: 'buildGiftTransaction',
      params
    })
  }

  encryptDataWithPrivateKey (params: { chainType: string; data: string; publicKey: string }): Promise<string> {
    verifyParams(params, ['chainType', 'data', 'publicKey'])

    return this._request({
      method: 'encryptDataWithPrivateKey',
      params
    })
  }

  decryptDataWithPrivateKey (params: { chainType: string; cipher: string; publicKey: string }): Promise<string> {
    verifyParams(params, ['chainType', 'cipher', 'publicKey'])

    return this._request({
      method: 'decryptDataWithPrivateKey',
      params
    })
  }

  forward (params: { dapp: IDapp; method: string; params: any }): Promise<any> {
    verifyParams(params, ['dapp', 'method', 'params'])

    return this._request({
      method: 'forward',
      params
    })
  }
}

export default PrivateAPI
