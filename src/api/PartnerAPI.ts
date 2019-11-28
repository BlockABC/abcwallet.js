import BaseAPI from './BaseAPI'

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
}

export default PartnerAPI
