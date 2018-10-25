import _ from 'lodash';
import { isDefined } from './utils';
import { printHot, name } from './hot';

if (isDefined('wepback')) {
  console.log('client.js');
}

if (name) {
  window.alert(_.join(['client', 'hot', 'util'], ' '));
}

// https://webpack.js.org/guides/hot-module-replacement/
if (module.hot) {
  module.hot.accept('./hot.js', function() {
    console.log('Accepting the updated printHot module');

    printHot();
  });
}
