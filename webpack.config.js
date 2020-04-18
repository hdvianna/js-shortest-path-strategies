const path = require('path');

module.exports = {
    entry: './src/modules.js',
    output: {
        filename: 'shortest-path-strategies.js',
        path: path.resolve(__dirname, 'dist'),
    },
};