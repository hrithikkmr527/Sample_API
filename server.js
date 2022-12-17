const { response } = require("express");
var express = require("express");

var app = express();
app.use(express.static("static"));
app.get("/index.html", function (req, res) {
  res.sendFile(__dirname + "/" + "index.html");
});

app.get("/process_get", function (req, res) {
  var response = {
    first_name: req.query.first_name,
    last_name: req.query.last_name,
  };
  console.log(response);
  res.send(JSON.stringify(response));
});
// app.get("/", function (req, res) {
//   console.log("Got a GET request");
//   res.send("hello GET");
// });

// app.post("/", function (req, res) {
//   console.log("Got a POST request");
//   res.send("hello POST");
// });

// app.delete("/del_user", function (req, res) {
//   console.log("Got a Delete request");
//   res.send("hello DELETE");
// });

// app.get("/list_user", function (req, res) {
//   console.log("Got a GET request for list user");
//   res.send("Page Listing");
// });
var server = app.listen(8081, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log("App listening at http://%s:%s", host, port);
});
