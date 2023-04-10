const http = require("http");

const server = http.createServer((req, res) => {
  // console.log(req);
  if (req.url === "/") {
    res.end("This is the home page");
  }
  if (req.url === "/about") {
    res.end("This is the About page");
  }
  res.end(`
  <h1>Oops! Page not found</h1>
  <p>The page you requested cannot be found, try the home page below</p>
  <a href="/">Link</a>
  `);
});

server.listen(5000); // setting listening port
