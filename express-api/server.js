'use-strict';

var express = require('express');
var bodyParser = require('body-parser');
var routes = require('./api/routes/moviesCheckRoutes');
var app = express();
var port = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

routes(app);

app.use((req, res) => {
  res.status(404).send('path error');
});

app.listen(port, () => console.log('Stock Check RESTful API server started on: ' + port));