import del from 'del';
import Promise from 'bluebird';
import webpack from 'webpack';
import run from './run';
import webpackConfig from '../webpack.config';

async function clean() {
  await del(['build/*', '!build/.git']);
}

async function copy() {
  const ncp = Promise.promisify(require('ncp'));
  await ncp('public', 'build/public');
  await ncp('package.json', 'build/package.json');
}

function bundle({ isWatch }) {
  return new Promise((resolve, reject) => {
    let bundlerRunCount = 0;

    const bundler = webpack(webpackConfig);

    const callback = (error, stats) => {
      if (error) {
        reject(error);
        return;
      }

      if (++bundlerRunCount === 1) {
        resolve();
      }
    };

    bundler.run(callback);
  });
}

async function build(options = { isWatch: false }) {
  await run(clean);
  await run(copy);
  // await run(bundle, options);
}

export default build;
