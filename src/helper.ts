import every from 'lodash-es/every'
import isNil from 'lodash-es/isNil'

import { IRequest } from './interface'
import { ABCWalletError } from './error'

export function isIOSBrowser (): boolean {
  const ua = navigator.userAgent.toLowerCase()
  if (!(ua.includes('iphone') || ua.includes('ipad'))) {
    return false
  }

  try {
    /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
    const send = window.webkit.messageHandlers.ABCWalletBridge.postMessage
    return true
  }
  catch {
    return false
  }
}

export function isAndroidBrowser (): boolean {
  if (!navigator.userAgent.toLowerCase().includes('android')) {
    return false
  }

  try {
    /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
    const send = window.ABCWalletBridge.postMessage
    return true
  }
  catch {
    return false
  }
}

export function isElectronBrowser (): boolean {
  return navigator.userAgent.toLowerCase().includes('abcwallet')
}

export function isRequest (obj: any): obj is IRequest {
  const requiredKeys = ['jsonrpc', 'id', 'namespace', 'method', 'params']
  return every(requiredKeys, (key): boolean => {
    return obj.hasOwnProperty(key)
  })
}

export function verifyParams (params: any, required: string[]): boolean {
  if (isNil(params)) {
    throw ABCWalletError.fromCode(10, `[${required.toString()}]`)
  }

  const missing = []
  for (const key of required) {
    if (!params.hasOwnProperty(key) || isNil(params[key])) {
      missing.push(key)
    }
  }

  if (missing.length > 0) {
    throw ABCWalletError.fromCode(10, `[${missing.toString()}]`)
  }

  return true
}
