var path = require('path')

module.exports = {
    entry: './src/js/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/dist'
    },
    module:{
        rules:[
            {
                test: /\.css$/,
                use:[ //first loader will be loaded last, etc
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    }
}