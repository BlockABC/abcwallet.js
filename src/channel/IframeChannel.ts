import { Logger } from 'loglevel'

import { IChannel } from '../interface'

export class IframeChannel implements IChannel {
  postMessage (data: any): void {
    parent.postMessage(data, '*')
  }
}

export default IframeChannel
