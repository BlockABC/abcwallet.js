import { verifyParams } from '../helper'
import ChainBaseAPI from './ChainBaseAPI'

export class EOSAPI extends ChainBaseAPI {
  protected _namespace = 'eos'
}

export default EOSAPI
