const VirtualModulesPlugin = require('webpack-virtual-modules');
const HTMLWebpackPLugin = require('html-webpack-plugin');

const virtualModules = new VirtualModulesPlugin({
  'fakeFile.js': 'export const fakeExport = "This is a fake export";',
});

module.exports = {
  entry: './index.js',
  plugins: [virtualModules, new HTMLWebpackPLugin()]
};