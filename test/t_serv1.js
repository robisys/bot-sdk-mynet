
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
  hostname: 'localhost', //'encrypted.google.com',
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

// /*

var express = require('express');
var app = express();
//var app = require('./server/server');

// Setting up local https support
var fs = require('fs');
var https = require('https');

var HOST ='localhost';
var PORT = 443;

var options = {
    key: fs.readFileSync('server.key'),
    cert: fs.readFileSync('server.crt'),
    passphrase: '<the password you used for the certificate>',
    requestCert: false,
    rejectUnauthorized: false
};

/*
 app.configure(function(){
   app.use(app.router);
   });
*/
// Start server

var server = https.createServer(options, function(req,res){

res.writeHead(200);
res.end("hello World\n") ;

}).listen(PORT,HOST);
    console.log('Server listening on  %s:%s',HOST,PORT);


// routes
app.get('/hey', function(req, res) {
    res.send('HEY!');
});
app.post('/ho', function(req, res) {
    res.send('HO!');
});




/*
var server = https.createServer(options, app).listen(443, function () {
    console.log('Starting at ' + (new Date()).toString());
    console.log('Server listening on port ' + server.address().port);
});
*/




