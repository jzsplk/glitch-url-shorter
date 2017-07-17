//basic required import for NodeJs
var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");
var mongoose = require("mongoose");

var app = module.exports = express();
app.use(bodyParser.json());
app.use(cors());
//get call to return JSON that format natural and unix data
app.get('/dateValues/:dateVal', function(req, res, next){
    console.log('url works');
    var dateVal = req.params.dateVal;
    var dataFormattingOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    };
    
    if(isNaN(dateVal)){
        var naturalDate = new Date(dateVal);
        naturalDate = naturalDate.toLocaleDateString("en-us", dataFormattingOptions);
        var unixDate = new Date(dateVal).getTime()/1000;
    }
    else{
        var unixDate = dateVal;
        var naturalDate = new Date(dateVal *1000);
        naturalDate = naturalDate.toLocaleDateString("en-us", dataFormattingOptions);
    }
    res.json({unix: unixDate, natural: naturalDate});
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Everything is working");
});
