import BaseAPI from './BaseAPI';
export declare class PartnerAPI extends BaseAPI {
    protected _namespace: string;
    /**
     * 添加合作方卡片
     *
     * @return {Promise<any>}
     */
    addPartnerCard(): Promise<{
        id: string;
    }>;
    /**
     * 查询合作方卡片是否已添加
     *
     * @return {Promise<any>}
     */
    isPartnerCardExist(): Promise<boolean>;
    /**
     * 查询合作方卡片是否已添加
     *
     * @return {Promise<any>}
     */
    addKeypairCard(params: {
        chainType: string;
        account?: string;
        permission?: string;
        publicKey?: string;
        privateKey?: string;
    }): Promise<{
        id: string;
    }>;
}
export default PartnerAPI;
