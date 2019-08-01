import { verifyParams } from '../helper'
import ChainBaseAPI from './ChainBaseAPI'

export class BTCAPI extends ChainBaseAPI {
  protected _namespace = 'btc'
}

export default BTCAPI
