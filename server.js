import path from 'path';
import express from 'express';

const server = express();
const port = process.env.PORT || 3000;

server.use(express.static(path.join(__dirname, 'public')));

server.get('*', (req, res) => {
  res.send('ok');
});

server.listen(port, () =>
  console.log(`Node.js server is listening at http://localhost:${port}/`)
);
