# t_serv
   key.pem  server.key
   cer.pem  server.crt
 
[nodejitsu](https://docs.nodejitsu.com/articles/HTTP/servers/how-to-create-a-HTTPS-server/)
 
  openssl genrsa -out key.pem
  openssl req -new -key key.pem -out csr.pem
  openssl x509 -req -days 9999 -in csr.pem -signkey key.pem -out cert.pem
  rm csr.pem
 
 
 
 

[mixz](http://book.mixu.net/node/ch10.html)

[local](https://forge.autodesk.com/blog/enable-https-local-nodejs)
[egnyte](https://github.com/adamenagy/data.management-nodejs-integration.egnyte)
