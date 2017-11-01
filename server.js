const http = require('http');
const fs = require('fs');
const urlib = require('url');
const querystring = require('querystring');

var server = http.createServer(function(req,res){
  var obj = urlib.parse(req.url);
  var url = obj.pathname;

  console.log(url);

  var file_name = './www'+url;

  console.log("fileName"+file_name);

  fs.readFile(file_name,function(err,data){
    if(err){
      res.write('<h1><a href="http://67.218.138.249:8080/game.html">plseae click here to enter game</a></h1>');
      console.log("not found");
    }else{
      res.write(data);
      console.log("success");
    }
    res.end();
  });
});

server.listen(8080);
