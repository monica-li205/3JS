const http = require('http');
const host = 'localhost';
const port = 8080;
const fs = require(`fs`);

let app = http.createServer((req, res) => {
  // Set a response type of mp4 video for the response
  res.writeHead(200, {'Content-Type': 'text/html'});

  // Read the video into a stream
  let vidstream = fs.createReadStream('assets/Yngwie_Malmsteen_interview.mp4');

  // Pipe our stream into the response
  vidstream.pipe(res);
});

// Start the server on port 3000
app.listen(3000, '127.0.0.1');
console.log('Node server running on port 3000');

//create a server object:
// const requestListener = function (req, res) {
//   fs.readFile(__dirname + "/index.html")
//     .then(contents => {
//       res.setHeader("Content-Type", "text/html");
//       res.writeHead(200);
//       res.end(contents);
//     })
//     .catch(err => {
//       res.writeHead(500);
//       res.end(err);
//       return;
//   });
// }; 

// const server = http.createServer(requestListener);
// server.listen(port, host, () => {
//     console.log(`Server is running on http://${host}:${port}`);
// });