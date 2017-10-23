/*
 *  key.pem  server.key
 *  cer.pem  server.crt
 
https://docs.nodejitsu.com/articles/HTTP/servers/how-to-create-a-HTTPS-server/
 
openssl genrsa -out key.pem
openssl req -new -key key.pem -out csr.pem
openssl x509 -req -days 9999 -in csr.pem -signkey key.pem -out cert.pem
rm csr.pem
 
 
 
 
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

