import { verifyParams } from '../helper'
import BaseAPI from './BaseAPI'

export class CommonAPI extends BaseAPI {
  protected _namespace = 'common'

  showTransactionDetail (params: { chainType: string; trxId: string }) {
    verifyParams(params, ['chainType', 'trxId'])

    return this._request({
      method: 'showTransactionDetail',
      params
    }, true)
  }

  showAddressBook (params: { chainType: string }) {
    verifyParams(params, ['chainType'])

    return this._request({
      method: 'showAddressBook',
      params
    })
  }

  showCards (params: { chainType: string }) {
    verifyParams(params, ['chainType'])

    return this._request({
      method: 'showCards',
      params
    })
  }
}

export default CommonAPI
