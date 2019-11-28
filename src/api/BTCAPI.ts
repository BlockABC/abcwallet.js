import ChainBaseAPI from './ChainBaseAPI'

export class BTCAPI extends ChainBaseAPI {
  protected _namespace = 'btc'

  offerIdentity (): Promise<string> {
    return this._request({
      method: 'offerIdentity',
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
      method: 'sendTransaction',
      params
    })
  }
}

export default BTCAPI
