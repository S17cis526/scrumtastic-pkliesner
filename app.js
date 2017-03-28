"use strict";

var fs = require('fs');
var http = require('http');
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('scrumtastic.sqlite3', function(err) {
  if(err) console.error(err);
});

var router = new (require('./lib/route').Router);
router.get('/app.js', function(req, res) {
  fs.readFile('public/index.html', function(err, body){
    res.end(body);
  });
});

router.get('/projects', function(req, res) {
  fs.readFile('SELECT * FROM projects', function(err, body){
    res.setHeader('Content-Type', 'text/json');
    res.end(JSON.stringify());
  });
});


var migrate = require('./lib/migrate');
migrate(db, 'migrations', function(err){

  var server = new http.Server(function(req, res) {
    router.route(req, res);
  });
  server.listen(3000, function(){
    console.log("listening on port " + 3000);
  });

});
