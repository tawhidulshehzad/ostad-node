// const http = require("http");

// const server = http.createServer(function (req, res) {
//   res.end("hello");
// });

// server.listen(5000);
// console.log("running server");

const http = require("http");

const server = http.createServer(function (req, res) {
  if (req.url == "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h1>2nd trial</h1>");
    res.end();
  }
});
server.listen(5000);
console.log("sei");
