import { WebviewAPI } from './WebviewAPI'
import { DappAPI } from './DappAPI'
import { PrivateAPI } from './PrivateAPI'
import { BTCAPI } from './BTCAPI'
import { ETHAPI } from './ETHAPI'
import { EOSAPI } from './EOSAPI'

export {
  WebviewAPI,
  DappAPI,
  PrivateAPI,
  BTCAPI,
  ETHAPI,
  EOSAPI,
}

export default {
  webview: WebviewAPI,
  dapp: DappAPI,
  private: PrivateAPI,
  btc: BTCAPI,
  eth: ETHAPI,
  eos: EOSAPI,
}
