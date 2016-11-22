const ip = require('ip');
const express = require('express');
const request = require('request');
const setup = require('./express');
const port = process.env.PORT || 3000;
const resolve = require('path').resolve;
const app = express();
const itunesAPI = 'https://itunes.apple.com/search?term=';

app.get('/api', (req, res) => {
  request(itunesAPI + req.query.term, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.send(JSON.parse(body)); // Print json.
    }
  })
});

setup(app);

// Start app
app.listen(port, (err) => {
  if (err) {
    console.error(err.message);
    return false;
  }

  const divider = '\n-----------------------------------';
  console.log('Server started ✓');
  console.log(`Access URLs:${divider}\n
  Localhost: http://localhost:${port}
        LAN: http://${ip.address()}:${port}
  ${divider}
  `);
});
