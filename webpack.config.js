const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
   mode: "development",
   entry:path.resolve(__dirname, 'src/index.js'),
   output:{
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js',
      clean: true,
   },
   devtool: 'source-map',
   devServer: {
      static:{
         directory: path.resolve(__dirname, 'dist'),
      },
      port: 3000,
      open: true,
      hot: true,
      compress: true,
      historyApiFallback: true,
   },
   module: {
      rules:[
         {
            test:/\.css$/,
            use:[
               'style-loader',
               'css-loader',               
            ]
         },
         {
            test: /\.js$/,
            exclude: /node_modules/,
            use:{
               loader: 'babel-loader',
               options:{
                  presets:['@babel/preset-env']
               }
            }
         },
         {
            test:/\.(png|svg|src|jpg|jpeg)$i/,
            type: 'asset/resorce',
         }
      ]
   },
   plugins:[
      new HtmlWebpackPlugin({
         title: 'Zusammen',
         filename: 'index.html',
      })
   ]
}