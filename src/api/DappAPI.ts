import { verifyParams } from '../helper'
import { IDapp, IDappPage, ICard } from '../interface'
import BaseAPI from './BaseAPI'

export class DappAPI extends BaseAPI {
  protected _namespace = 'dapp'

  getDapp (): Promise<IDapp> {
    return this._request({
      method: 'getDapp',
      params: {}
    })
  }

  isCardExist (params: { userId: string }): Promise<boolean> {
    verifyParams(params, ['userId'])

    return this._request({
      method: 'isCardExist',
      params
    })
  }

  addCard (params: { userId: string; name: string; url: string; storage: string; pages: IDappPage[] }): Promise<ICard> {
    return this._request({
      method: 'addCard',
      params
    })
  }

  updateCard (params: { id: string; dappId: string; userId: string; name: string; url: string; storage: string; pages: IDappPage[] }): Promise<ICard> {
    return this._request({
      method: 'updateCard',
      params
    })
  }

  getCard (params: { id: string }): Promise<ICard> {
    return this._request({
      method: 'getCard',
      params
    })
  }

  updateCardBalance (params: { cardId: string; balance: string }): Promise<void> {
    return this._request({
      method: 'updateCardBalance',
      params
    })
  }
}

export default DappAPI
