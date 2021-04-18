const express = require('express');
const http = require('http');
const https = require('https');
const fs = require('fs');
const bodyParser = require('body-parser');
const cors = require('cors');
const next = require('next');
const nextI18NextMiddleware = require('next-i18next/middleware').default;

const nextI18next = require('./i18n');
const ports = {
  http: process.env.PORT || 7006,
  https: process.env.PORT_SSL || 8006
};
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();
  server.use(nextI18NextMiddleware(nextI18next));

  server.use(bodyParser.json());
  server.use(bodyParser.urlencoded({ extended: true }));

  server.use(cors());

  server.all('*', (req, res) => handle(req, res));
  http.createServer(server).listen(ports.http, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${ports.http}`);
  });
  if (process.env.NODE_ENV === 'production') {
    const options = {
      key: fs.readFileSync('/home/admin/conf/web/ssl.navi.archi.key'),
      cert: fs.readFileSync('/home/admin/conf/web/ssl.navi.archi.crt'),
    };
    https.createServer(options, server).listen(ports.https, (err) => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${ports.https}`);
    });
  }
}).catch((ex) => {
  console.error(ex.stack);
});
