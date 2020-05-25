//B CONNECTION: mongodb+srv://Dami:<password>@cluster0-teywi.mongodb.net/test?retryWrites=true&w=majority
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Thing = require('./models/thing');
const userRoutes = require('./routes/user');
const app = express();

mongoose.connect('mongodb+srv://Dami:damilola2@cluster0-teywi.mongodb.net/test?retryWrites=true&w=majority')
  .then(() => {
    console.log('Successfully connected to MongoDB Atlas!');
  })
  .catch((error) => {
    console.log('Unable to connect to MongoDB Atlas!');
    console.error(error);
  });
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });
app.use('/api/stuff', (req, res, next) => {
    const stuff = [
      {
        _id: 'oeihfzeoi',
        title: 'My first thing',
        description: 'All of the info about my first thing',
        imageUrl: '',
        price: 4900,
        userId: 'qsomihvqios',
      },
      {
        _id: 'oeihfzeomoihi',
        title: 'My second thing',
        description: 'All of the info about my second thing',
        imageUrl: '',
        price: 2900,
        userId: 'qsomihvqios',
      },
    ];
    res.status(200).json();
  });
  app.use('/api/stuff', stuffRoutes);
app.use('/api/auth', userRoutes);