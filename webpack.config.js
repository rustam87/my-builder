module.exports = {
    entry: './source/js/app.js',
    output: {
        filename: './build/assets/js/app.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            }
        ]
    },
    watch: true
};