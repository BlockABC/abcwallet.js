import * as loglevel from 'loglevel'
import { ABCWallet } from './ABCWallet'

const log = loglevel.getLogger('ABCWallet')
log.setLevel('debug')

const abcwallet = new ABCWallet(log)

// Mount ABCWallet on window
window['ABCWallet'] = abcwallet

export default abcwallet
