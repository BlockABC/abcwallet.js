import BaseAPI from './BaseAPI'
import { verifyParams } from '../helper'

export class PartnerAPI extends BaseAPI {
  protected _namespace = 'partner'

  /**
   * 添加合作方卡片
   *
   * @return {Promise<any>}
   */
  addPartnerCard (): Promise<{ id: string }> {
    return this._request({
      method: 'addPartnerCard',
      params: {}
    })
  }

  /**
   * 查询合作方卡片是否已添加
   *
   * @return {Promise<any>}
   */
  isPartnerCardExist (): Promise<boolean> {
    return this._request({
      method: 'isPartnerCardExist',
      params: {}
    })
  }

  /**
   * 查询合作方卡片是否已添加
   *
   * @return {Promise<any>}
   */
  addKeypairCard (params: { chainType: string, account?: string, permission?: string, publicKey?: string, privateKey?: string }): Promise<{ id: string }> {
    verifyParams(params, ['chainType'])

    return this._request({
      method: 'addKeypairCard',
      params: params
    })
  }
}

export default PartnerAPI
