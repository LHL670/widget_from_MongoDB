const express = require('express');
const bodyParse = require('body-parser');
const mongoose = require('mongoose');

// set up express app
const app = express();

// connect to mongodb
mongoose.connect('mongodb://cgu:cgu@0.tcp.jp.ngrok.io:16896/CGUScholar_com?authSource=admin');

// mongoose.connect('mongodb://reactInterface:reactInterfacepwd@120.126.17.90:27017/CGUScholar?authSource=admin');
//online
//mongoose.connect('mongodb+srv://CGUScholar:cguscholarpwd@cluster0.hvf4e.mongodb.net/CGUScholar_com?retryWrites=true&w=majority');
mongoose.Promise = global.Promise;

app.use(express.static('public'));

app.use((req, res, next) => {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});
// use body-parser middleware
app.use(bodyParse.json())

//initialize routes
app.use('/api', require('./routes/api'));

//error handling routes
app.use(function (err, req, res, next) {
  // console.log(err)
  res.status(422).send({ error: err.message })
});
// app.use((req, res, next) => {
//   // Website you wish to allow to connect
//   res.setHeader('Access-Control-Allow-Origin', '*');

//   // Request methods you wish to allow
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

//   // Request headers you wish to allow
//   res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

//   // Set to true if you need the website to include cookies in the requests sent
//   // to the API (e.g. in case you use sessions)
//   res.setHeader('Access-Control-Allow-Credentials', true);

//   // Pass to next layer of middleware
//   next();
// });

// listen for requests
app.listen(process.env.port || 4000, function () {
  console.log('now listening for requests');
});
