import VConsole from 'vconsole'
import { default as loglevel } from 'loglevel'

import { isIOSBrowser, isAndroidBrowser, isElectronBrowser } from './helper'
import { ABCWallet } from './ABCWallet'

const log = loglevel.getLogger('ABCWallet')

let vconsole = null
let send
if (isIOSBrowser()) {
  vconsole = new VConsole({
    onReady () {
      this.hideSwitch()
    },
  })
}
else if (isAndroidBrowser()) {
  vconsole = new VConsole({
    onReady () {
      this.hideSwitch()
    },
  })
}
else if (isElectronBrowser()) {

}
else {
  log.warn('Can not find any available environment, start development environment.')
}

const abcwallet = new ABCWallet(vconsole, log)

// Mount ABCWallet on window
window['ABCWallet'] = abcwallet

export default abcwallet
