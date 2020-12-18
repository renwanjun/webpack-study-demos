const path=require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")

module.exports={
    mode:'development',
    entry:{
        app:'./src/index.js',
        print:'./src/print.js'
    },
    devtool:'inline-source-map',
    devServer:{
        contentBase:'./dist'
    },
    output:{
        filename:'[name].bundle.js',
        path:path.resolve(__dirname,'dist'),
        publicPath:'/'
    },
    plugins:[
        // new CleanWebpackPlugin(),
        // 如果不想在watch触发增量构建后删除index.html,可以在CleanWebpackPlugin中配置cleanStableWebpackAssets选项来实现
        new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
        new HtmlWebpackPlugin({
            title:'Development',
            // cache:false
        })
    ]
}