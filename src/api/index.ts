import { WebviewAPI } from './WebviewAPI'
import { DappAPI } from './DappAPI'
import { PrivateAPI } from './PrivateAPI'
import { BTCAPI } from './BTCAPI'
import { BCHAPI } from './BCHAPI'
import { ETHAPI } from './ETHAPI'
import { EOSAPI } from './EOSAPI'

export {
  WebviewAPI,
  DappAPI,
  PrivateAPI,
  BTCAPI,
  BCHAPI,
  ETHAPI,
  EOSAPI,
}

export default {
  webview: WebviewAPI,
  dapp: DappAPI,
  private: PrivateAPI,
  btc: BTCAPI,
  bch: BCHAPI,
  eth: ETHAPI,
  eos: EOSAPI,
}
