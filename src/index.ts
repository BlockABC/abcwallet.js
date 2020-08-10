import loglevel from 'loglevel'
import { ABCWallet } from './ABCWallet'

const log = loglevel.getLogger('ABCWallet')
log.setLevel('debug')

const abcwallet = new ABCWallet(log)

export default abcwallet
