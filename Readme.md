
## Development


watch模式
### 开发中遇到的问题
1.关于使用watch模式时，index.html文件会被删除的问题

解决方案：https://github.com/webpack/webpack/issues/10761
在引入html-webpack-plugin时设置cache为false，具体原理见 https://github.com/jantimon/html-webpack-plugin#options

webpack-dev-server

webpack-dev-server 为你提供了一个简单的 web 服务器，并且能够实时重新加载(live reloading)。  

遇到的问题 
1.Error: Cannot find module 'webpack-cli/bin/config-yargs'    
参考链接：https://www.jianshu.com/p/4ee085b610b7
webpack-cli@4.0.1和webpack-dev-server@3.11.0版本不兼容,降低webpack-cli版本至3.3.12


使用webpack-dev-middleware
