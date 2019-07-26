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
  send = window.webkit.messageHandlers.ABCWalletBridge.postMessage
}
else if (isAndroidBrowser()) {
  vconsole = new VConsole({
    onReady () {
      this.hideSwitch()
    },
  })
  send = window.ABCWalletBridge.postMessage
}
else if (isElectronBrowser()) {

}
else {
  log.warn('Can not find any available environment, start development environment.')
  send = function (payload) {
    console.log(JSON.stringify(payload))
  }
}

const abcwallet = new ABCWallet(send, vconsole, log)

// Mount ABCWallet on window
window['ABCWallet'] = abcwallet

export default abcwallet
