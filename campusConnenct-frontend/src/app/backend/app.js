const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Import routes
const collegeRoutes = require('./routes/colleges');
const admissionRoutes = require('./routes/admissions');
const reviewRoutes = require('./routes/reviews');
const userRoutes = require('./routes/users');

app.use('/api/colleges', collegeRoutes);
app.use('/api/admissions', admissionRoutes);
app.use('/api/reviews', reviewRoutes);
app.use('/api/users', userRoutes);

app.get('/', (req, res) => res.send('API Running'));

module.exports = app; 