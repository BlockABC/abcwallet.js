import ABCWallet from '../ABCWallet'

export class BaseAPI {
  protected _abcwallet: ABCWallet
  protected _namespace: string

  constructor (abcwallet: ABCWallet) {
    this._abcwallet = abcwallet
  }

  protected _request (payload, isNotify = false) {
    payload['namespace'] = this._namespace
    return this._abcwallet.request(payload, isNotify)
  }
}

export default BaseAPI
