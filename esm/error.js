import { CustomError } from 'ts-custom-error';
export class ABCWalletError extends CustomError {
    constructor(code, message) {
        super(message);
        this.code = code;
    }
    static fromCode(code, extendMessage = '') {
        return new ABCWalletError(code, ABCWalletError.messages[code] + extendMessage);
    }
}
ABCWalletError.messages = {
    1: 'Unkown error',
    10: 'Params error, missing required params '
};
