//basic required import for NodeJs
var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");
var mongoose = require("mongoose");

var app = module.exports = express();
app.use(bodyParser.json());
app.use(cors());
//get call to return JSON that format natural and unix data
app.get('/new/:urlToShorten(*)', (req, res, next)=>{
  // ES5(var urlToShorten = req.params.urlToShorten)
    var { urlToShorten } = req.params;
  console.log(urlToShorten);
}); 

app.listen(process.env.PORT || 3000, () => {
  console.log("Everything is working");
});
