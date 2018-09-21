function formatTime(time) {
  // transform '23:30:17 GMT+0900 ...' to '23:30:17'
  return time.toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, '$1');
}

function run(func, options) {
  const task = typeof func.default === 'undefined' ? func : func.default;

  const startTime = new Date();
  console.log(
    `[${formatTime(startTime)}] Starting '${task.name}${
      options ? `(${options})` : ''
    }'...`
  );

  // task must be promise
  return task(options).then(() => {
    const endTime = new Date();
    const timeTaken = endTime.getTime() - startTime.getTime();

    console.log(
      `[${formatTime(endTime)}] Finished '${task.name}${
        options ? `(${options})` : ''
      }' after ${timeTaken} ms`
    );
  });
}

console.log(
  'process.mainModule.children.length :',
  process.mainModule.children.length
);
console.log('process.argv.length :', process.argv.length);
console.log('__filename :', __filename);
console.log('process.argv :', process.argv);

if (process.mainModule.children.length === 0 && process.argv.length > 2) {
  delete require.cache[__filename];

  const module = require(`./${process.argv[2]}.js`).default; // build.js

  run(module).catch(err => console.error(err.stack));
}

export default run;
