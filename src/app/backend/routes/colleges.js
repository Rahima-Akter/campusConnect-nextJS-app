const express = require('express');
const router = express.Router();
const { ObjectId } = require('mongodb');

// Get all colleges
router.get('/', async (req, res) => {
  const db = req.app.locals.db;
  const colleges = await db.collection('colleges').find().toArray();
  res.json(colleges);
});

// Get college by id
router.get('/:id', async (req, res) => {
  const db = req.app.locals.db;
  const college = await db.collection('colleges').findOne({ _id: new ObjectId(req.params.id) });
  res.json(college);
});

module.exports = router; 