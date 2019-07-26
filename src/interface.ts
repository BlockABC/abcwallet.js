export interface IRequest {
  jsonrpc: string;
  id: string;
  namespace: string;
  method: string;
  params: any;
}

export interface IResponse {
  jsonrpc: string;
  id: string;
  result?: any;
  error: {
    code: number;
    message: string;
  };
}

export interface IPromise {
  resolve: Function;
  reject: Function;
  path: string;
  createdAt: Date;
}
