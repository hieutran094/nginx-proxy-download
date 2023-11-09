const express = require('express');
const app = express();

app.get('/download/:id', function (req, res) {
  const id = req.params.id;
  res.set('signed-url', 'https://another.domain/file');
  res.set('X-Accel-Redirect', `/proxy/download`);
  res.end();
});

app.get('/', function (req, res) {
  res.json({ message: Date.now() });
});

app.listen(5000, () =>
  console.log(`⚡️[bootup]: Server is running at port: 5000`)
);
