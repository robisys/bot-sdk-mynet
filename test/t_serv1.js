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




