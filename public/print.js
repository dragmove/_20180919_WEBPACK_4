import aid from 'aid.js';

console.log(
  'The print.js module has loaded! See the network tab in dev tools...'
);

export default () => {
  if (aid.isBoolean(true)) {
    window.alert('Button Clicked: Here\'s "some text"!');
  }
};
