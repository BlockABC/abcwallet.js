import { WebviewAPI } from './WebviewAPI'
import { PrivateAPI } from './PrivateAPI'
import { BTCAPI } from './BTCAPI'
import { ETHAPI } from './ETHAPI'
import { EOSAPI } from './EOSAPI'

export {
  WebviewAPI,
  PrivateAPI,
  BTCAPI,
  ETHAPI,
  EOSAPI,
}

export default {
  webview: WebviewAPI,
  private: PrivateAPI,
  btc: BTCAPI,
  eth: ETHAPI,
  eos: EOSAPI,
}
