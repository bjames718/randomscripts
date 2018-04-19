const http = require('http');
const mysql = require('mysql');
const fs = require('fs');



http.createServer(function(req, res){
       fs.readFile("index.html", function(err, data){
       res.writeHead(200, {'Content-Type':'text/html'});
       res.write(data);
       res.end();
   })

}).listen(3000);

console.log('server up...');

var con = mysql.createConnection({
host: 'localhost',
user:'root', 
password:'',
database: 'contact'
});

// con.connect(function(err) {
//     if (err){
//         console.log('not connected');
//     }
//     else{
//     console.log("Connected!");
//     var string = con.query('Select * from contact.contactinfo');
//     console.log(string);
//     }
//   });

  