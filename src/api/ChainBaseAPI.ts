import { verifyParams } from '../helper'
import BaseAPI from './BaseAPI'

export class ChainBaseAPI extends BaseAPI {
  // showTransactionDetail (params: { chainType: string; trxId: string }) {
  //   verifyParams(params, ['chainType', 'trxId'])

  //   return this._request({
  //     method: 'showTransactionDetail',
  //     params
  //   }, true)
  // }

  showAddressBook () {
    return this._request({
      method: 'showAddressBook',
      params: {}
    })
  }

  getReceivedAddr () {
    return this._request({
      method: 'getReceivedAddr',
      params: {}
    })
  }
}

export default ChainBaseAPI
