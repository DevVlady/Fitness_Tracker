//Acquiring all neccessary packages using require method
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));


//Establish connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb:localhost/fitnessTracker')