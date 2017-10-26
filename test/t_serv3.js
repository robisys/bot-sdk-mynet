/*
 *  key.pem  server.key
 *  cer.pem  server.crt
 
https://docs.nodejitsu.com/articles/HTTP/servers/how-to-create-a-HTTPS-server/
 
openssl genrsa -out key.pem
openssl req -new -key key.pem -out csr.pem
openssl x509 -req -days 9999 -in csr.pem -signkey key.pem -out cert.pem
rm csr.pem
 
 
 
 
 */

/*
Hmmm what be those .pem files? Those are the associated SSL certificates for your HTTPS web server. Read up: How to create SSL certificates for Node.js.
And here is the code for the TLS client:
*/
var PORT = 8000;
var HOST = 'localhost';
var tls = require('tls');
var fs = require('fs');

var options = { ca: [ fs.readFileSync('./server.crt') ] };
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
// 
// http://book.mixu.net/node/ch10.html
// https://github.com/mixu

//https://forge.autodesk.com/blog/enable-https-local-nodejs
//https://github.com/adamenagy/data.management-nodejs-integration.egnyte
