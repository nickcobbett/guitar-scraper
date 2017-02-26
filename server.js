var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app     = express();
var bodyParser = require('body-parser')

// bodyParser.urlencoded()

app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.get('/', function(req, res){
  // console.log('##@@',req.params.url)
  // console.log('#####', req.query.url)
  var url = JSON.parse(req.query.url);

  request(url, function(error, response, html){
    if(!error){
      console.log('#####', req.query.url)
      var $ = cheerio.load(html);
      var tab = $('.js-tab-content').html();
      res.json(tab);
      // console.log(tab)
      // fs.writeFile('tab.txt', tab, null, 4, function(err){
      //   console.log('File successfully written! - Check your project directory for the output.json file');
      // })
    } else {
      console.log('$$',error)
    }
  })
})

app.listen('8000')

console.log('Magic happens on port 8000');

exports = module.exports = app;