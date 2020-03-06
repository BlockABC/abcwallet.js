import BaseAPI from './BaseAPI';
export declare class WebviewAPI extends BaseAPI {
    protected _namespace: string;
    setOrientation(params: {
        horizontal: boolean;
    }): Promise<any>;
    setFullscreen(params: {
        fullscreen: boolean;
    }): Promise<any>;
    setTitlebar(params: {
        title?: string;
        ghost?: boolean;
        forecolor?: string;
        bgcolor?: string;
        left?: boolean;
    }): Promise<any>;
    home(): Promise<any>;
    back(): Promise<any>;
    close(): Promise<any>;
    share(params?: {}): Promise<any>;
    openUrl(params: {
        url: string;
    }): Promise<any>;
    invokeQRScanner(): Promise<any>;
    copy(params: {
        text: string;
    }): Promise<any>;
}
export default WebviewAPI;
