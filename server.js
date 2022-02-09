const express = require('express');
const mongoose = require('mongoose');
const MongoClient = require('mongodb').MongoClient;
//const bodyParser = require('body-parser');

const items = require('./routes/api/items');

const app = express();

app.use(express.json());

const mongoURI = require('./config/keys').mongoURI;

mongoose
    .connect(mongoURI,
    {
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    })
    .then(() => console.log('MongoDB C0nnected...'))
    .catch(err => console.log(err));

//const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
//client
 //   .connect(err => {
 //       const collection = client.db("test").collection("devices")      
 //     client.close();
 //   });

// Use Routes

app.use('/api/items',items);

const port = process.env.PORT || 5000 ;

app.listen(port, () => console.log(`Server started on port ${port}`));

