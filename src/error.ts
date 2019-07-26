import { CustomError } from 'ts-custom-error'

export class ABCWalletError extends CustomError {
  protected static messages = {
    1: 'Unkown error',
    10: 'Params error, missing required params '
  }

  public constructor (public code: number, message: string) {
    super(message)
  }

  public static fromCode (code: number, extendMessage = '') {
    return new ABCWalletError(code, ABCWalletError.messages[code] + extendMessage)
  }
}
