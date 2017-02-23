var express = require('express');
var app = express();
var request = require('request');

app.use(express.static('public'));

var port = process.env.PORT || 5000;

app.listen(port, function() {
  console.log('listening on port 5000.');
});
