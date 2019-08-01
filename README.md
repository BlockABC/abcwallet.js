# ABCWallet DApp SDK

协议文档详见 TAPD。

## 钱包端开发调试

钱包端开发同学不熟悉/缺少 node 运行环境的情况下，请联系前端同学帮忙启动一下开发服务。比如前端同学的机器在 hiwifi_5G2 这个局域网的 `192.168.199.100:8082`，那么首先需要加入同一个局域网，然后尝试用浏览器打开 http://192.168.199.100:8082/ ，确保浏览器能够打开成功后，就可以通过 webview 加载 http://192.168.199.100:8082/ 进行开发调试了。

页面中的各个按钮就是模仿 DApp 发起各种接口调用的，所以点击对应的按钮就能调试对应的功能。如果需要查看 js 日志，让 webview 在页面载入完成后执行 js `ABCWallet.vconsole.showSwitch()` 就能够在页面打开调试工具 **VConsole**，具体用法详见 https://github.com/Tencent/vConsole/blob/dev/doc/tutorial.md 。

## 本项目开发调试


