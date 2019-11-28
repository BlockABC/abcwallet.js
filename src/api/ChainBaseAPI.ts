import BaseAPI from './BaseAPI'

export class ChainBaseAPI extends BaseAPI {
  pushSimpleTransaction (params: { from?: string, to?: string, value?: string, memo?: string }): Promise<void> {
    return this._request({
      method: 'pushSimpleTransaction',
      params: {}
    })
  }

  getAddressFromAddressBook (): Promise<string> {
    return this._request({
      method: 'getAddressFromAddressBook',
      params: {}
    })
  }

  getAddressFromCard (): Promise<string> {
    return this._request({
      method: 'getAddressFromCard',
      params: {}
    })
  }

  sendSimpleTransaction (params: { from?: string, to?:string, value?:string, memo?: string }): Promise<void> {
    return this._request({
      method: 'sendSimpleTransaction',
      params,
    })
  }
}

export default ChainBaseAPI
