import { Logger } from 'loglevel'

import { IChannel } from '../interface'

/**
 * Native Channel
 */
export class NativeChannel implements IChannel {
  public log: Logger
  public requestChannel: string

  protected _isIOS = false
  protected _isAndroid = false
  protected _isElectron = false

  constructor (requestChannel: string, logger: Logger) {
    this.log = logger
    this.requestChannel = requestChannel

    // Check runtime environment base on user-agent
    const ua = navigator.userAgent.toLowerCase()
    this._isIOS = ua.includes('iphone')
    this._isAndroid = ua.includes('android')
    this._isElectron = ua.includes('electron')
  }

  postMessage (data: any): void {
    const requestChannel = this.requestChannel

    if (this._isIOS) {
      this.log.debug(`NativeChannel send to ios ${requestChannel}`)

      if (window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers[requestChannel] && window.webkit.messageHandlers[requestChannel].postMessage) {
        window.webkit.messageHandlers[requestChannel].postMessage(data)
      }
      else {
        const iframe = document.createElement('iframe')
        iframe.setAttribute('src', `abcwallet://${requestChannel}?data=${this._dataToString(data)}`)
        iframe.setAttribute('style', 'display: none')
        document.body.appendChild(iframe)

        setTimeout(() => {
          document.body.removeChild(iframe)
        }, 100)
      }
    }
    else if (this._isAndroid) {
      this.log.debug(`NativeChannel send to android ${requestChannel}`)
      window[requestChannel].postMessage(this._dataToString(data))
    }
    else if (this._isElectron) {
      this.log.debug(`NativeChannel send to electron ${requestChannel}`)
      window[requestChannel].postMessage(this._dataToString(data))
    }
    else {
      this.log.info(`Development runtime environment, no data will be sent.
You may create mock response like this in console:
ABCWallet.responmse(JSON.stringify(JSON.stringify( { your expected response object } )))
`)
    }
  }

  /**
   * 将数据类型统一为 string
   *
   * @protected
   * @param {*} data
   * @returns
   * @memberof NativeChannel
   */
  protected _dataToString (data: any) {
    return typeof data === 'string' ? data : JSON.stringify(data)
  }
}

export default NativeChannel
