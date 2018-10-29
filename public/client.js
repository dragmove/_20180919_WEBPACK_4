import { isDefined } from './utils';
import { printHot } from './hot';

if (isDefined('wepback')) {
  console.log('client.js');
}

import _ from 'lodash';

function component() {
  var element = document.createElement('div');
  var button = document.createElement('button');
  var br = document.createElement('br');

  button.innerHTML = 'Click me and look at the console!';
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.appendChild(br);
  element.appendChild(button);

  // Note that because a network request is involved, some indication
  // of loading would need to be shown in a production-level site/app.
  button.onclick = e =>
    import(/* webpackChunkName: "print" */ './print').then(module => {
      var print = module.default;

      print();
    });

  return element;
}

document.body.appendChild(component());

// https://webpack.js.org/guides/hot-module-replacement/
if (module.hot) {
  module.hot.accept('./hot.js', function() {
    console.log('Accepting the updated printHot module');

    printHot();
  });
}
