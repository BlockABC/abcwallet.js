# abcwallet.js

这是一个用于开发运行在 ABCWallet 的 webview 中应用准备的 SDK ，通过它你可和 ABCWallet 进行一些通常浏览器中无法提供的交互
，比如设置 webview 的外观、对区块链交易进行签名等。


## Installation 

通过 `npm i abcwallet` 即可安装本 SDK 作为项目依赖，我们同时提供了 cjs 模块和 esm 模块两种输出，可以通过设置 
package.json 的 main 和 browser 字段来按需引用。  


## Usage

本项目会导出一个 abcwallet 对象，如果使用模块化开发，直接引入模块即可。如果直接引入 js ，本项目会在全局暴露一个 
ABCWallet 对象。无论何种方式，只要通过 `ABCWallet.{namespace}.{method}( params )` 即可调用对应接口。

调用接口示例：

```js
ABCWallet.webview.setOrientation({ horizontal: e.target.value })
```

想要接收来自钱包的通知，因为 ABCWallet 是一个 EventEmitter 的子类，所以可以通过 
`ABCWallet.on('notify:{event}, function (params ...) { ... } )` 来订阅通知，其中 `notify:` 是为了区分而必须的固定前缀。

接收通知示例：

```js
ABCWallet.on('notify:changeIdentity', function (params) {
  console.log('Receive notify:', params)
})
```


## More

`clone` 本项目并安装依赖，然后运行 `npm run dev` 可以看到一个调试页面，该页面包含了各种接口的调用，你可以在 ABCWallet 
钱包中打开此页面查看各种接口、参数的调试效果。

