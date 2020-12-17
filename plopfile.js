const viewGenerator = require('./plop-templates/view/prompt');
const componentGenerator = require('./plop-templates/component/prompt');
const storeGenerator = require('./plop-templates/store/prompt');

module.exports = function (plop) {
  plop.storeGenerator('view', viewGenerator);
  plop.storeGenerator('component', componentGenerator);
  plop.storeGenerator('store', storeGenerator);
};
