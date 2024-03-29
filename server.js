// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});

var date = new Date(2015-12-25).getTime();


// API timestamp endpoint
app.get("/api/timestamp/:date_string?", function(req, res) {
  var input = req.params.date_string;
  //console.log(input);
  var date;
  
  if (/^\d+$/.test(input)) {
    input = parseInt(input);
  }
  if (typeof input === "undefined") {
    date = new Date();
  } else {
    date = new Date(input);
  };
  
  //deal with invalid dates, should return { "error" : "Invalid Date"}
  if (date.toString() === "Invalid Date") {
    res.json({ "error": "Invalid Date" });
  } else {
    res.json({ "unix": date.getTime(), "utc": date.toUTCString() })
  };
  
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});