var express = require('express'),
    app     = express(),
    path    = require('path');

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
  res.render('index', {
    signalUI: require('signal-ui')
  });
});

app.get('/SignalUI.css', function(req, res) {
  res.sendfile('/node_modules/Signal-UI/build/SignalUI.css', {root:__dirname});
});

app.get('/SignalUI.js', function(req, res) {
  res.sendfile('/node_modules/Signal-UI/build/SignalUI.js', {root:__dirname});
});

app.listen(3000, function() {
  console.log('Node server running at http://localhost:3000');
});
