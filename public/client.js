import _ from 'lodash';
import { isDefined } from './utils';
import { printHot } from './hot';

if (isDefined('hello client.js')) console.log('This is client.js');

/*
 * @babel/plugin-proposal-optional-chaining
 */
const obj = {
  foo: {
    bar() {
      return 42;
    }
  }
};

// FIXME: obj.foo.bar()
if (obj && obj.foo && obj.foo.bar) {
  // console.log('obj.foo.bar() :', obj.foo.bar());
  // console.log('obj.hello.bar() :', obj.hello.bar());
}
// TO:
// console.log('obj?.foo?.bar() :', obj?.foo?.bar());
// console.log('obj?.hello?.bar() :', obj?.hello?.bar());

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
