import { IDapp, IDappPage, IDappCard } from '../interface';
import BaseAPI from './BaseAPI';
export declare class DappAPI extends BaseAPI {
    protected _namespace: string;
    getDapp(): Promise<IDapp>;
    isCardExist(params: {
        userId: string;
    }): Promise<boolean>;
    addCard(params: {
        userId: string;
        name: string;
        url: string;
        storage: string;
        pages: IDappPage[];
    }): Promise<IDappCard>;
    updateCard(params: {
        id: string;
        dappId: string;
        userId: string;
        name: string;
        url: string;
        storage: string;
        pages: IDappPage[];
    }): Promise<IDappCard>;
    getCard(params: {
        id: string;
    }): Promise<IDappCard>;
    updateCardBalance(params: {
        cardId: string;
        balance: string;
    }): Promise<void>;
}
export default DappAPI;
