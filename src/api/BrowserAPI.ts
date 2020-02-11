import { invokeNative } from '../helper'
import BaseAPI from './BaseAPI'

export class BrowserAPI extends BaseAPI {
  protected _namespace = 'dapp'

  /**
   * invoker and open dapp in abcwallet client
   */
  openDapp ({ url, dappId }) {
    return invokeNative(`abcwallet://open-dapp?url=${encodeURIComponent(url)}&dapp_id=${dappId}`)
  }
}

export default BrowserAPI
