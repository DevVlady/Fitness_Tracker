//Acquiring all neccessary packages using require method
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const mongojs = require('mongojs');

const app = express();

//Mongo Database & Collections
const databaseUrl = 'fitnessTracker';
const collections = ['exercises'];

const db = mongojs(databaseUrl, collections);