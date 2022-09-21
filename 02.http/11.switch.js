//dispatch보단 switch가좋다

const http = require('http');
const fs = require('fs');
const url = require('url');

const server = http.createServer((req, res) => {
   let pathname = url.parse(req.url).pathname;
   switch(pathname){
   case "/":
      fs.readFile('view/03.helloWorld.html', 'utf8', (err, html) => {
         res.writeHead(200, {'Content-Type': 'text/html'});
         res.end(html);
      });
      break;
   case "/image":
      fs.readFile('media/samplejpeg.jpeg', (err, image) => {
         res.writeHead(200, {'Content-Type': 'image/jpeg'});
         res.end(image);
      });
      break;
   case "/audio":
      fs.readFile('media/samplemp3.mp3', (err, audio) => {
         res.writeHead(200, {'Content-Type': 'audio/mp3'});
         res.end(audio);
      });
      break;
   case "/video":
      fs.readFile('media/samplemp4.mp4', (err, video) => {
         res.writeHead(200, {'Content-Type': 'video/mp4'});
         res.end(video);
      });
      break;
   default:
      res.writeHead(404, {'Content-Type': 'text/html'});
      res.end();
   }
});

server.listen(3000, () => {
   console.log('Server running at http://localhost:3000');
});