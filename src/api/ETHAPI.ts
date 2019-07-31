import { verifyParams } from '../helper'
import ChainBaseAPI from './ChainBaseAPI'

export class ETHAPI extends ChainBaseAPI {
  protected _namespace = 'eth'
}

export default ETHAPI
