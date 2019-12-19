import { verifyParams } from '../helper'
import BaseAPI from './BaseAPI'

interface IGetABCIDReturn {
  abcid: string,
  signature: string,
  randomStr: string,
  signAt: string,
}

interface IGetIDInfoParams {
  phone?: string,
  email?: string,
  id_card?: string,
  passport?: string,
  driver_license?: string,
}

interface IGetIDInfoReturn {
  phone?: string,
  email?: string,
  id_card?: { // 身份证字段
    country_code: string, // 国家/地区编码
    name: string,
    no: string,
    front_image: string,
    back_image: string,
    holding_card_image: string, // 手持身份证照片
  },
  passport?: { // 护照字段
    country_code: string, // 国家/地区编码
    name: string,
    no: string,
    type: string,
    image: string,
  },
  driver_license?: { // 驾驶证字段
    country_code: string, // 国家/地区编码
    name: string,
    no: string,
    type: string,
    image: string,
  },
}

export class ABCIDAPI extends BaseAPI {
  protected _namespace = 'abcid'

  /**
   * 获取 ABCID
   *
   * @param params
   * @returns {Promise<IGetABCIDReturn>}
   */
  getABCID (params: { randomStr: string }): Promise<IGetABCIDReturn> {
    verifyParams(params, ['randomStr'])

    return this._request({
      method: 'getABCID',
      params: {
        randomStr: params.randomStr
      }
    })
  }

  /**
   * 获取 ABCID 关联的身份信息
   *
   * @param params
   * @returns {Promise<IGetIDInfoReturn>}
   */
  getIDInfo (params: IGetIDInfoParams): Promise<IGetIDInfoReturn> {
    return this._request({
      method: 'getIDInfo',
      params,
    })
  }
}

export default ABCIDAPI
