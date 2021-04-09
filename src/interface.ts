/* eslint-disable camelcase */

export interface IRequest {
  jsonrpc: string,
  id: string,
  namespace: string,
  method: string,
  params: any,
}

export interface IResponse {
  jsonrpc: string,
  id: string,
  result?: any,
  error?: {
    code: number,
    message: string,
  },
}

export interface IPromise {
  resolve: Function,
  reject: Function,
  path: string,
  createdAt: Date,
}

export interface IChannel {
  postMessage(data: string | any): void,
}

export interface IDapp {
  id: string,
  category: string,
  website: string,
  chains: string[],
  default_language: string,
  languages: string[],
  name: string,
  brief: string,
  details: string,
  logo: string,
  imgs_9_16: string[],
  imgs_1_1: string[],
  imgs_12_9: string[],
  imgs_16_10: string[],
}

export interface IDappPage {
  name: string,
  url: string,
}

export interface IDappCard {
  id: string,
  dappId: string,
  userId: string,
  name: string,
  url: string,
  storage: string,
  pages: IDappPage[],
}
