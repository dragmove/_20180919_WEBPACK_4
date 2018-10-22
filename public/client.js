import { isDefined } from './utils';
import { printHot } from './hot';

if (isDefined('wepback')) {
  console.log('client.js');
}

// https://webpack.js.org/guides/hot-module-replacement/
if (module.hot) {
  module.hot.accept('./hot.js', function() {
    console.log('Accepting the updated printHot module');

    printHot();
  });
}
