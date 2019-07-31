import isNil from 'lodash-es/isNil'
import omitBy from 'lodash-es/omitBy'

import { verifyParams } from '../helper'
import BaseAPI from './BaseAPI'

export class WebviewAPI extends BaseAPI {
  protected _namespace = 'webview'

  setOrientation (params: { horizontal: boolean }) {
    verifyParams(params, ['horizontal'])

    return this._request({
      method: 'setOrientation',
      params
    }, true)
  }

  setTitlebar (params: { title?: string; ghost?: boolean; forecolor?: string; bgcolor?: string; left?: boolean }) {
    params = omitBy(params, isNil)

    return this._request({
      method: 'setTitlebar',
      params
    }, true)
  }

  back () {
    return this._request({
      method: 'back',
      params: {}
    }, true)
  }

  close () {
    return this._request({
      method: 'close',
      params: {}
    }, true)
  }

  openUrl (params: { url: string }) {
    verifyParams(params, ['url'])

    return this._request({
      method: 'openUrl',
      params
    }, true)
  }

  invokeQRScanner () {
    return this._request({
      method: 'invokeQRScanner',
      params: {}
    })
  }

  /**
   * 通知各端，用户点击返回主页的按钮
   */
  goHome () {
    return this._request({
      method: 'gotoHome',
      param: {}
    })
  }

  /**
   * 用户在webview中点击领取礼品卡
   */
  onReceivingClick () {
    return this._request({
      method: 'onReceivingClick',
      param: {}
    })
  }
}

export default WebviewAPI
