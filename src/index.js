let http = require("http");

let server = http.createServer((req, res) => {
  if (req.url === "/welcome") {
    res.write("Welcome to Dominos!");
    res.end();
  }
  if (req.url === "/contact") {
    res.write(
      JSON.stringify({
        phone: "18602100000",
        email: "guestcaredominos@jublfood.com"
      })
    );
    res.end();
  }
});
console.log("listeneing..........");

server.listen(8081);
