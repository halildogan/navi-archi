const express = require('express');
const http = require('http');
const https = require('https');
const fs = require('fs');
const bodyParser = require('body-parser');
const cors = require('cors');
const next = require('next');
const nextI18NextMiddleware = require('next-i18next/middleware').default;

const nextI18next = require('./i18n');

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
  http.createServer(server).listen(process.env.PORT, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${process.env.PORT}`);
  });
}).catch((ex) => {
  console.error(ex.stack);
});
