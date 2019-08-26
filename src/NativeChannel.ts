/*
* 统一客户端的接口调用方式，区分 ios 的 uiwebview、wkwebview 和 android
* moved from https://github.com/BlockABC/abcwallet_bridge/blob/master/src/common/NativeChannel.js
*/
const ua = navigator.userAgent.toLowerCase()

function isIOS (): boolean {
  return ua.includes('iphone')
}

function isAndroid (): boolean {
  return ua.includes('android')
}

export interface INativeChannel {
  postMessage: (data: string|object) => void,
}

/**
 * 客户端的 channel
 * @param requestChannel {String} ABCWalletScatter
 * @constructor
 */
function NativeChannel (requestChannel): INativeChannel {
  return {
    postMessage (data) {
      console.log(requestChannel, 'request', data)

      if (isIOS()) {
        if (window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers[requestChannel] && window.webkit.messageHandlers[requestChannel].postMessage) {
          window.webkit.messageHandlers[requestChannel].postMessage(data)
        }
        else {
          const iframe = document.createElement('iframe')
          // 对于 string 类型的数据，不需要转成 json 字符串；
          // 对于对象，需要转成 json 字符串
          if (typeof data === 'string') {
            iframe.setAttribute('src', `abcwallet://${requestChannel}?data=${data}`)
          }
          else {
            iframe.setAttribute('src', `abcwallet://${requestChannel}?data=${JSON.stringify(data)}`)
          }

          iframe.setAttribute('style', 'display: none')
          document.body.appendChild(iframe)

          setTimeout(() => {
            document.body.removeChild(iframe)
          }, 100)
        }
      }
      else if (isAndroid()) {
        // android 只能接收字符串，因此需要对于JSON统统转为字符串。
        // 但是对于已经是字符串的，比如 Scatter，就不需要再转一次了。
        if (typeof data === 'string') {
          (window as any)[requestChannel].postMessage(data)
        }
        else {
          (window as any)[requestChannel].postMessage(JSON.stringify(data))
        }
      }
    },
  }
}

export default NativeChannel
