import { verifyParams } from '../helper'
import BaseAPI from './BaseAPI'

export class PrivateAPI extends BaseAPI {
  protected _namespace = 'abcwallet'

  ensureHasCard (params: { chainType: string }) {
    verifyParams(params, ['chainType'])

    return this._request({
      method: 'ensureHasCards',
      params
    }, true)
  }

  buildGiftTransaction (params: {
    chainType: string;
    toAddress: string;
    toPrivateKey: string;
    value: string;
    skin: string;
    message: string;
  }) {
    verifyParams(params, ['chainType', 'toAddress', 'toPrivateKey', 'value', 'skin', 'message'])

    return this._request({
      method: 'buildGiftTransaction',
      params
    })
  }

  encryptDataWithPrivateKey (params: { chainType: string; data: string; publicKey: string }) {
    verifyParams(params, ['chainType', 'data', 'publicKey'])

    return this._request({
      method: 'encryptDataWithPrivateKey',
      params
    })
  }

  decryptDataWithPrivateKey (params: { chainType: string; chiper: string; publicKey: string }) {
    verifyParams(params, ['chainType', 'chiper', 'publicKey'])

    return this._request({
      method: 'decryptDataWithPrivateKey',
      params
    })
  }
}

export default PrivateAPI
