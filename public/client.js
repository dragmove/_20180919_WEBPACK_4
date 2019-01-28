// redux
import configureStore from './redux/configureStore';

// redux actions
// import { ping } from './redux/actions/ping';
import { updateNaviIndex } from './redux/actions/navi';
// import { fetchServices } from './redux/actions/services';

import _ from 'lodash';
import { isDefined } from './utils';
import { printHot } from './hot';

(() => {
  'use strict';

  if (isDefined('hello client.js')) console.log('This is client.js');

  /*
   * redux
   */
  const store = configureStore();
  let unsubscribeStore;

  setStore();

  function setStore() {
    unsubscribeStore = store.subscribe(() => {
      // render view
      console.log('store.getState() :', store.getState());
    });

    console.log('unsubscribeStore :', unsubscribeStore);

    // + dispatch actions
    store.dispatch(updateNaviIndex(1, 3));
    // store.dispatch(fetchServices());
  }

  /*
   * @babel/plugin-proposal-optional-chaining
   */
  const obj = { foo: () => 99 };
  console.log('obj?.foo() :', obj?.foo());

  /*
   * dynamic imports (https://webpack.js.org/guides/code-splitting/#dynamic-imports)
   */
  document.body.appendChild(component());

  function component() {
    let element = document.createElement('div');
    let button = document.createElement('button');
    let br = document.createElement('br');

    button.innerHTML = 'Click me and look at the console!';

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.appendChild(br);
    element.appendChild(button);

    // Note that because a network request is involved, some indication
    // of loading would need to be shown in a production-level site/app.
    button.onclick = evt =>
      import(/* webpackChunkName: "print" */ './print').then(module => {
        const print = module.default;

        print();
      });

    return element;
  }

  /*
   * https://webpack.js.org/guides/hot-module-replacement/
   */
  if (module.hot) {
    module.hot.accept('./hot.js', function() {
      console.log('Accepting the updated printHot module');

      printHot();
    });
  }
})();
