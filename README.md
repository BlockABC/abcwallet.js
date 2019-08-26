# ABCWallet DApp SDK

协议文档详见 TAPD。


## 使用方式

调用特定命名空间的接口，只要使用 `ABCWallet.{namespace}.{method}( params... )` 即可调用，比如

```js
ABCWallet.btc.getAddressFromAddressBook()
```

想要接收来自钱包的通知，因为 ABCWallet 是一个 EventEmitter 的子类，所以可以通过 `ABCWallet.on('notify:{event}, function (params ...) { ... } )` 来订阅通知，其中 `notify:` 是为了区分而必须的固定前缀，比如

```js
ABCWallet.on('notify:changeCurrency', function (params) {
  console.log('Receive notify:', params)
})
```


## 钱包接入开发调试

钱包端开发同学不熟悉/缺少 node 运行环境的情况下，请联系前端同学帮忙启动一下开发服务。比如前端同学的机器在 hiwifi_5G2 这个局域网的 `192.168.199.100:8080`，那么首先需要加入同一个局域网，然后尝试用浏览器打开 http://192.168.199.100:8080/ ，确保浏览器能够打开成功后，就可以通过 webview 加载 http://192.168.199.100:8080/ 进行开发调试了。

页面中的各个按钮就是模仿 DApp 发起各种接口调用的，所以点击对应的按钮就能调试对应的功能。如果需要查看 js 日志，通过拦截网络请求的方式注入 vconsole。


## 本项目开发调试

1. 运行 `npm run dev` 启动开发服务器。
2. 访问开发服务的页面，比如 http://127.0.0.1:8080/ 。

页面一切正常，那么整体代码就没有问题。点击各个按钮，通常来说，只要能够确认日子打出如同预期的信息即可认为接口实现正常。

开发调试页面位于 `public/` 目录，添加、删除接口时记得更新开发调试页面的测试代码，确保页面随时工作正常。
