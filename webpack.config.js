module.exports = {
    context: __dirname + '/source/js/',
    entry: {
        common: './common.js',
        index:  './pages/index.js',
        blog:   './pages/blog.js',
        works:  './pages/works.js'
    },
    output: {
        path: __dirname + '/build/assets/js/',
        filename: '[name].js'
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
    devtool: 'source-map',
    watch: true
};