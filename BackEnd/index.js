// import denpendencies
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');

dotenv.config();
const app = express();
//conect to mongodb

mongoose.connect(process.env.database_url,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', (error) => {
  console.error('Error connecting to MongoDB:', error);
});

db.once('open', () => {
  console.log('Connected to MongoDB successfully!');
});

app.use(cors());
app.use(cookieParser());
app.use(express.json());

app.listen(8000, () => {
    console.log('Server is running on port 8000');
});