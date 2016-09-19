var path = require('path');
var ROOT_DIR = process.cwd();
var RESOURCE_DIR = path.resolve(ROOT_DIR, 'src/js/');
var webpack = require('webpack');
var requirejsConfig = require(path.resolve(ROOT_DIR, 'webpack/requirejs-config.js'));


module.exports = {
    context: RESOURCE_DIR,
    entry: './app.js',
    externals: Object.keys(requirejsConfig.REQUIRE_JS_PATHS_CDN),
    output: {
        path: RESOURCE_DIR,
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.js(x?)$/,
            loader: 'babel-loader',
            exclude: /(node_modules|bower_components)/

        }, {
            test: /\.css$/,
            loader: 'style-loader!css-loader'
        }]
    },
    resolve: {
        root: [ROOT_DIR, RESOURCE_DIR],
        extensions: ['', '.js', '.jsx'],
        modulesDirectories: ['node_modules'],
        alias: {
            
        }
    }
};
