require('enzyme/withDom');
require('@babel/register')({
  presets: [[
    '@babel/preset-env',
    { targets: { node: true }}
  ]]
});
const Enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');

Enzyme.configure({ adapter: new Adapter() });
