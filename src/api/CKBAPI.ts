import BaseAPI from './BaseAPI'

export class CKBAPI extends BaseAPI {
  protected _namespace = 'ckb'

  sign (params: { rawTransaction: any, unspents: any[] }): Promise<void> {
    console.log(params)
    return this._request({
      method: 'sign',
      params
    })
  }

  sendTransaction (params: { rawTransaction: any }): Promise<void> {
    return this._request({
      method: 'sendTransaction',
      params
    })
  }
}

export default CKBAPI
