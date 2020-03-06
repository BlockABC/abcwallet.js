import { CustomError } from 'ts-custom-error';
export declare class ABCWalletError extends CustomError {
    protected static messages: {
        1: string;
        10: string;
    };
    code: number;
    constructor(code: number, message: string);
    static fromCode(code: number, extendMessage?: string): ABCWalletError;
}
