[liesmich](liesmich.md)

[express](http://expressjs.com/de/)

# t_serv
   key.pem  server.key
   cer.pem  server.crt
 
[nodejitsu](https://docs.nodejitsu.com/articles/HTTP/servers/how-to-create-a-HTTPS-server/)
 
 [t_serv](./t_serv.js)
 
 
     openssl genrsa -out key.pem
     openssl req -new -key key.pem -out csr.pem
     openssl x509 -req -days 9999 -in csr.pem -signkey key.pem -out cert.pem
     rm csr.pem
 
 [readthedocs](http://node.readthedocs.io/en/latest/api/https/)
 
 [express-bsp](https://www.hacksparrow.com/express-js-https-server-client-example.html)
 

[mixz](http://book.mixu.net/node/ch10.html)

[local](https://forge.autodesk.com/blog/enable-https-local-nodejs)

[egnyte](https://github.com/adamenagy/data.management-nodejs-integration.egnyte)
