module.exports = () => {
    const path = require("path");
    const HtmlWebpackPlugin = require("html-webpack-plugin");
    const MiniCssExtractPlugin = require("mini-css-extract-plugin");

    const VENDOR_LIBS = [
        "react", "redux", "react-redux", "react-dom", "redux-thunk", "react-router", "react-router-dom", "@babel/polyfill/noConflict"
    ];

    return{
        entry:{
            bundle: "./src/index.js",
            vendor: VENDOR_LIBS
        }, 
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: '[name].[chunkhash].js'
        },
        resolve: {
            alias:{
                src: path.resolve(__dirname, 'src')
            }
        },
        optimization: {
            splitChunks: {
                chunks: 'async',
                minSize: 30000,
                maxSize: 0,
                minChunks: 1,
                maxAsyncRequests: 5,
                maxInitialRequests: 3,
                automaticNameDelimiter: '~',
                name: true,
                cacheGroups: {
                    vendors: {
                        test: /[\\/]node_modules[\\/]/,
                        priority: -10
                    },
                    default: {
                        minChunks: 2,
                        priority: -20,
                        reuseExistingChunk: true
                    }
                }
            }
        },
        plugins:[
            new HtmlWebpackPlugin({
                template: "src/index.html"
            }),
            new MiniCssExtractPlugin({
                filename: "[name].css",
                chunkFilename: "[id].css"
            })
        ],
        module:{
            rules:[
                {
                    test: /\.js$/,
                    use: {
                        loader: "babel-loader",
                        options: {
                            presets: ['@babel/preset-react','@babel/preset-env'],
                            plugins: ['@babel/plugin-proposal-class-properties','@babel/plugin-proposal-object-rest-spread']
                        }
                    },
                    exclude:/node_modules/
                },
                {
                    test:/\.s?css$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        { 
                            loader: 'css-loader', 
                            options: { 
                                sourceMap: true
                            } 
                        },
                        { 
                            loader: 'sass-loader', 
                            options: { 
                                sourceMap: true
                            } 
                        }   
                    ]
                },
                {
                    test:/\.(jpe?g|png|gif|svg)$/,
                    use:[
                    {
                        loader: "url-loader",
                        options: {limit: 40000}
                    },
                    "image-webpack-loader"
                    ]
                }
            ]
        },
        devServer: {
          historyApiFallback: true,
          contentBase: './dist'
        }
    }
}