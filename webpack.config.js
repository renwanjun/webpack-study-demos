
const path = require("path")
const toml = require("toml")
const yaml = require("yamljs")
const json5 = require("json5")

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|svg|jpe?g|gif)$/,
                // 在 webpack 5 中，可以使用内置的 Asset Modules，我们可以轻松地将这些内容混入我们的系统中
                type: 'asset/resource'
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                type: 'asset/resource'
            },
            {
                test: /\.(csv|tsv)$/,
                use: [
                    'csv-loader'
                ]
            },
            {
                test: /\.xml$/,
                use: [
                    'xml-loader'
                ]
            }, {
                test: /\.toml$/i,
                type: 'json',
                parser: {
                    parse: toml.parse
                }
            }
            , {
                test: /\.yaml$/i,
                type: 'json',
                parser: {
                    parse: yaml.parse
                }

            }, {
                test: /\.json5$/i,
                type: 'json',
                parser: {
                    parse: json5.parse
                }
            }
        ]
    },
    resolve: {
        alias: {
            fonts: path.resolve(__dirname, './src/fonts'),
            db: path.resolve(__dirname, './src/assets')
        }
    }
}