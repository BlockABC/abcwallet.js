import every from 'lodash-es/every'
import isNil from 'lodash-es/isNil'

import { IRequest } from './interface'
import { ABCWalletError } from './error'

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

/**
 * 判断当前页面是否被隐藏了
 */
export function isDocumentHidden (): boolean {
  return document.hidden || document.visibilityState === 'hidden'
}

/**
 * 唤起 native
 * @param schema {string|Function} string 的时候是一个要唤起的 schema；Function 时是一个要执行的动作
 * @param timeout
 */
export function invokeNative (schema: string|Function, timeout = 5000): Promise<void> {
  let hidden = false
  const startTime = Date.now()
  const visibilityChangeHandler = () => {
    if (isDocumentHidden()) {
      hidden = true
    }
  }

  document.addEventListener('visibilitychange', visibilityChangeHandler)

  return new Promise((resolve, reject) => {
    if (typeof schema === 'string') {
      window.location.href = schema
    }
    if (typeof schema === 'function') {
      schema()
    }

    setTimeout(() => {
      document.removeEventListener('visibilitychange', visibilityChangeHandler)

      const endTime = Date.now()
      const delayed = endTime - startTime > timeout + 1000 // timeout 的执行是否被延迟了

      if (isDocumentHidden() || hidden || delayed) {
        resolve()
      }
      else {
        reject(new Error('open failed'))
      }
    }, timeout)
  })
}
