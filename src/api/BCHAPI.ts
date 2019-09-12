import { verifyParams } from '../helper'
import ChainBaseAPI from './ChainBaseAPI'

export class BCHAPI extends ChainBaseAPI {
  protected _namespace = 'btc'

  getAddressesFromCard (): Promise<string> {
    return this._request({
      method: 'getAddressesFromCard',
      params: {}
    })
  }

  sign (params: { rawTransaction: string; unspents: string }): Promise<void> {
    return this._request({
      method: 'sign',
      params
    })
  }

  sendTransaction (params: { rawTransaction: string; unspents: string }): Promise<void> {
    return this._request({
      method: 'sign',
      params
    })
  }
}

export default BCHAPI
