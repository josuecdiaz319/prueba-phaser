const express = require('express');

const app = express();
const server = require('http').Server(app);

//app.use(express.static(__dirname + '/public'));

app.use(express.static('/css'));


app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.get('/example/', function (req, res) {
  res.sendFile(__dirname + '/example.html');
});

app.get('/css/style.css', function (req, res) {
    console.log('Get: css/style.css');
    res.sendFile('/css/style.css', {root: __dirname })
})

app.get('/simplegame/', function (req, res) {
  res.sendFile(__dirname + '/simplegame.html');
});

server.listen(8080, function () {
  console.log(`Listening on ${server.address().port}`);
});
