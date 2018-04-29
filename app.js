const express = require('express')
const httpProxy = require('http-proxy');

const port = 3000;

const app = express()
const proxy = httpProxy.createProxyServer({});

app.all('/api/V1/sensor/UploadSensor', function (req, res, next) {
  let body = [];
  req.on('error', (err) => {
    console.error(err);
  }).on('data', (chunk) => {
    body.push(chunk);
  }).on('end', () => {
    body = Buffer.concat(body).toString();
    console.log(body);
    // this is where we can hook into another system and 
    // do something with the sensor data
  });

  next()
})

app.all('*', function (req, res) {
  console.log('Forwarding request upstream %s %s', req.method, req.path)
  proxy.web(req, res, { target: 'http://www.solax-portal.com' });
});

app.listen(port, () => console.log('Server app listening on port %s!', port))