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
  console.log(urlToShorten);
  return res.json({urlToShorten});
}); 

app.listen(process.env.PORT || 3000, () => {
  console.log("Everything is working");
});
