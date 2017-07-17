//basic required import for NodeJs
var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");
var mongoose = require("mongoose");
const shortUrl = require("./models/shortUrl");
//connect to mongodb
mongoose.connect('mongodb://jzsplk:123@ds153752.mlab.com:53752/xc');

var app = module.exports = express();
app.use(bodyParser.json());
app.use(cors());
//get call to return JSON that format natural and unix data
app.use(express.static(__dirname + "/public"));
app.get('/new/:urlToShorten(*)', (req, res, next)=>{
  // ES5(var urlToShorten = req.params.urlToShorten)
    var { urlToShorten } = req.params;
  var expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
  var regex = expression;
  if(regex.test(urlToShorten)===true){
    var short = Math.floor(Math.random()*100000).toString()
    var data = new shortUrl({
      originalUrl: urlToShorten,
      shorterUrl: short
    });
    
    data.save(err => {
      if(err){
        return res.send("Error saving to database");
      }
    });
    return res.json({data});
  }
  else{
    return res.json({urlToShorten: "Failed"});
  }
  console.log(urlToShorten);
  return res.json({urlToShorten});
}); 

app.listen(process.env.PORT || 3000, () => {
  console.log("Everything is working");
});
