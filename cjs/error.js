"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ts_custom_error_1 = require("ts-custom-error");
class ABCWalletError extends ts_custom_error_1.CustomError {
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
exports.ABCWalletError = ABCWalletError;
