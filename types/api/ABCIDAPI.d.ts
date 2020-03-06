import BaseAPI from './BaseAPI';
interface IGetABCIDReturn {
    abcid: string;
    signature: string;
    randomStr: string;
    signAt: string;
}
interface IGetIDInfoParams {
    phone?: string;
    email?: string;
    id_card?: string;
    passport?: string;
    driver_license?: string;
}
interface IGetIDInfoReturn {
    phone?: string;
    email?: string;
    id_card?: {
        country_code: string;
        name: string;
        no: string;
        front_image: string;
        back_image: string;
        holding_card_image: string;
    };
    passport?: {
        country_code: string;
        name: string;
        no: string;
        type: string;
        image: string;
    };
    driver_license?: {
        country_code: string;
        name: string;
        no: string;
        type: string;
        image: string;
    };
}
export declare class ABCIDAPI extends BaseAPI {
    protected _namespace: string;
    /**
     * 获取 ABCID
     *
     * @param params
     * @returns {Promise<IGetABCIDReturn>}
     */
    getABCID(params: {
        randomStr: string;
    }): Promise<IGetABCIDReturn>;
    /**
     * 获取 ABCID 关联的身份信息
     *
     * @param params
     * @returns {Promise<IGetIDInfoReturn>}
     */
    getIDInfo(params: IGetIDInfoParams): Promise<IGetIDInfoReturn>;
}
export default ABCIDAPI;
