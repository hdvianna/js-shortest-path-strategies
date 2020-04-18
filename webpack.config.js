const path = require('path');

module.exports = [{
    entry: './src/modules.js',
    output: {
        library: 'JSShortestPathStrategies',
        libraryExport: 'default',
        libraryTarget: 'window',
        filename: 'shortest-path-strategies.min.js',
        path: path.resolve(__dirname, 'dist'),
    },
},{
    entry: './src/modules.js',
    output: {
        library: 'JSShortestPathStrategies',
        libraryExport: 'default',
        libraryTarget: 'commonjs2',
        filename: 'shortest-path-strategies.commonjs2.js',
        path: path.resolve(__dirname, 'dist'),
    },
}];