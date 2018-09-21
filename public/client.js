import { isDefined } from './utils';

if (isDefined('ok')) {
  // Promise.resolve().finally(); // es7.

  // const symbol = new Symbol();
  // window.alert(typeof symbol);

  const map = new Map();
  map.set('lib', 'aid.js');

  window.alert(map.get('lib'));
}

// https://babeljs.io/docs/en/usage#polyfill 참고.
/*
Promise.resolve().finally() would turn into this (because Edge 17 doesn't have Promise.prototype.finally):

require("core-js/modules/es.promise.finally");
Promise.resolve().finally()
*/
