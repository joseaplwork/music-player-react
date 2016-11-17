const ip = require('ip');
const express = require('express');
const setup = require('./express');
const port = process.env.PORT || 3000;
const resolve = require('path').resolve;
const app = express();

setup(app, {
  outputPath: resolve(process.cwd(), 'dist'),
  publicPath: '/',
});

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
