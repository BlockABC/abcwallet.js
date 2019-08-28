import { CustomError } from 'ts-custom-error'

export class ABCWalletError extends CustomError {
  protected static messages = {
    1: 'Unkown error',
    10: 'Params error, missing required params '
  }

  public code: number

  constructor (code: number, message: string) {
    super(message)

    this.code = code
  }

  public static fromCode (code: number, extendMessage = ''): ABCWalletError {
    return new ABCWalletError(code, ABCWalletError.messages[code] + extendMessage)
  }
}
