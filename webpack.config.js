module.exports = {
    entry: './app/app.js',
    output: {
        path: __dirname,
        filename: './public/bundle.js'
    },
    resolve: {
        modules: ['node_modules', __dirname],
        alias: {
            home: 'app/components/home.js',
            main: 'app/components/main.js',
            nav: 'app/components/nav.js',
            account: 'app/components/account.js',
            transaction: 'app/components/transaction.js'
        }
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react', 'stage-0']
                },
                test: /\.jsx?$/,
                exclude: /node_modules/
            }
        ]
    }

};