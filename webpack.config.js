var path = require('path');

module.exports = {
    entry: './app/myApp',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js',
    },
    resolve: {
        alias: {
            Main: path.resolve(__dirname, 'app/components/Main.jsx'),
            NavComponent: path.resolve(__dirname, 'app/components/NavComponent.jsx'),
            Weather: path.resolve(__dirname, 'app/components/Weather.jsx'),
            About: path.resolve(__dirname, 'app/components/About.jsx'),
            Examples: path.resolve(__dirname, 'app/components/Examples.jsx'),
        },
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            exclude: [/node_modules/],
            use: [{
                loader: 'babel-loader',
                options: {
                    presets: ['react', 'es2015', 'stage-0'],
                    plugins: ['transform-es2015-spread'],
                }
            }],
        }]
    },
};
