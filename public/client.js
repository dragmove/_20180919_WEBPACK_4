// redux
import configureStore from './redux/configureStore';

// redux actions
// import { ping } from './redux/actions/ping';
import { updateNaviIndex } from './redux/actions/navi';
// import { fetchServices } from './redux/actions/services';

// import _ from 'lodash';
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
  function getComponent() {
    return import(/* webpackChunkName: "lodash" */ 'lodash')
      .then(({ default: _ }) => {
        const element = document.createElement('div');
        element.innerHTML = _.join(['Hello', 'webpack'], ' ');

        return element;
      })
      .catch(error => 'An error occurred while loading the component');
  }

  // implementation
  getComponent().then(component => {
    document.body.appendChild(component);
  });

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
