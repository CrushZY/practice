const webpack=require('webpack');
const path=require('path');
const HtmlPlugin=require('html-webpack-plugin');
const ExtracTextPlugin=require("extract-text-webpack-plugin");
module.exports={
    mode:'development',
    entry:{
        'index':'./scr/index.js',
    },
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'[name].js'
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:ExtracTextPlugin.extract({
                    fallback:"style.loader",
                    use:"css-loader"
                })
            },{
                test:/\.(png|jpg|gif$)/,
                use:[{
                    loader:'url-loader',
                    options:{
                        limit:500,
                        outputPath:'images/'
                    }
                }]
            },{
                test:/\.(htm|html)$/i,
                loader:'html-withimg-loader'
            }
        ]
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
        new HtmlPlugin({
            minify:{
                removeAttributeQuotes:true
            },
            hash:true,
            template:'./scr/index.html'
        }),
        new ExtracTextPlugin("css/index.css")
    ],
    devServer:{
        contentBase:path.resolve(__dirname,'dist'),
        host:'localhost',
        compress:true,
        port:8081,
        open:true,
        hot:true
    },
};