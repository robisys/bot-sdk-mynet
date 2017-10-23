/*
 *  key.pem  server.key
 *  cer.pem  server.crt
 
https://docs.nodejitsu.com/articles/HTTP/servers/how-to-create-a-HTTPS-server/
 
openssl genrsa -out key.pem
openssl req -new -key key.pem -out csr.pem
openssl x509 -req -days 9999 -in csr.pem -signkey key.pem -out cert.pem
rm csr.pem
 
 
 
 
 */
// http://node.readthedocs.io/en/latest/api/https/
/*
var https = require('https');
var options = {
  hostname: 'encrypted.google.com',
  port: 443,
  path: '/',
  method: 'GET'
};
var req = https.request(options, function(res) {
  console.log("statusCode: ", res.statusCode);
  console.log("headers: ", res.headers);
  res.on('data', function(d) {
    process.stdout.write(d);
  });
});
req.end();
req.on('error', function(e) {
  console.error(e);
});
*/

/*

var https = require('https');
var fs = require('fs');

var options = {
  key: fs.readFileSync('server.key'),
  cert: fs.readFileSync('server.crt')
};

var a = https.createServer(options, function (req, res) {
  res.writeHead(200);
  res.end("hello world\n");
}).listen(8000);
*/

// /*
// https://www.hacksparrow.com/express-js-https-server-client-example.html
var fs = require('fs');
var express = require('express');
var https = require('https');
var key = fs.readFileSync('./server.key');
var cert = fs.readFileSync('./server.crt')
var https_options = {
    key: key,
    cert: cert
};
var PORT = 8000;
var HOST = 'localhost';
app = express();
/*
app.configure(function(){
    app.use(app.router);
});
*/
server = https.createServer(https_options, app).listen(PORT, HOST);
console.log('HTTPS Server listening on %s:%s', HOST, PORT);
// routes
app.get('/hey', function(req, res) {
    res.send('HEY!');
});
app.get('/ho', function(req, res) {
    res.send('HO!');
});

/*

Hmmm what be those .pem files? Those are the associated SSL certificates for your HTTPS web server. Read up: How to create SSL certificates for Node.js.
And here is the code for the TLS client:
var PORT = 8000;
var HOST = 'localhost';
var tls = require('tls');
var fs = require('fs');
var options = { ca: [ fs.readFileSync('./cert.pem') ] };
var client = tls.connect(PORT, HOST, options, function() {
    if (client.authorized) {
        
        console.log('CONNECTED AND AUTHORIZED\n');
        
        client.on('close', function() {
            console.log('SOCKET CLOSED\n');
            process.exit();
        });
        
        process.stdin.pipe(client);
        process.stdin.resume();
        
        // Time to make some request to the server
        // We will write straight to the socket, but recommended way is to use a client library like 'request' or 'superagent'
        client.write('GET /hey HTTP/1.1\r\n');
        client.write('\r\n');
        
        client.write('POST /ho HTTP/1.1\r\n');
        client.write('\r\n');
    }
    else {
        console.log('AUTH FAILED\n');
        process.exit();
    }
});
client.setEncoding('utf8');
client.on('data', function(data) {
    console.log('-------------');
    console.log(data);
});
 */
// http://book.mixu.net/node/ch10.html

//https://forge.autodesk.com/blog/enable-https-local-nodejs
//https://github.com/adamenagy/data.management-nodejs-integration.egnyte
