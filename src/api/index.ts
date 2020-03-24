import { WebviewAPI } from './WebviewAPI'
import { DappAPI } from './DappAPI'
import { PartnerAPI } from './PartnerAPI'
import { ABCIDAPI } from './ABCIDAPI'
import { PrivateAPI } from './PrivateAPI'
import { BTCAPI } from './BTCAPI'
import { BCHAPI } from './BCHAPI'
import { BSVAPI } from './BSVAPI'
import { LTCAPI } from './LTCAPI'
import { DASHAPI } from './DASHAPI'
import { ETHAPI } from './ETHAPI'
import { ETCAPI } from './ETCAPI'
import { EOSAPI } from './EOSAPI'
import { BrowserAPI} from './BrowserAPI'

export {
  WebviewAPI,
  DappAPI,
  PartnerAPI,
  ABCIDAPI,
  PrivateAPI,
  BTCAPI,
  BCHAPI,
  BSVAPI,
  LTCAPI,
  DASHAPI,
  ETHAPI,
  ETCAPI,
  EOSAPI,
  BrowserAPI,
}

export default {
  webview: WebviewAPI,
  dapp: DappAPI,
  partner: PartnerAPI,
  abcid: ABCIDAPI,
  private: PrivateAPI,
  btc: BTCAPI,
  bch: BCHAPI,
  bsv: BSVAPI,
  ltc: LTCAPI,
  dash: DASHAPI,
  eth: ETHAPI,
  etc: ETCAPI,
  eos: EOSAPI,
  browser: BrowserAPI,
}
