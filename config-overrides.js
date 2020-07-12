const {
  override,
  fixBabelImports,
  addLessLoader,
  addWebpackAlias,
  addDecoratorsLegacy,
} = require('customize-cra');

const path = require('path');
function resolve(dir) {
  return path.join(__dirname, '.', dir)
}

module.exports = override(
  addDecoratorsLegacy(),
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: { '@primary-color': '#409EFF' },
    localIdentName: '[path]-[local]-[hash:5]',
  }),
  addWebpackAlias({
    '@': resolve("src")
  }),
);