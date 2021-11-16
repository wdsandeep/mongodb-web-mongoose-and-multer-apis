require('dotenv').config()
const mongoose = require('mongoose');
const url = 'mongodb+srv://' + process.env.USER +':' + process.env.PASS +'@cluster0.vgg3n.mongodb.net/e-comm';

mongoose.connect(url);

