const express  = require('express');
const router = express.Router();
const db  = require('../db');

router.post('/selectItem', async(req, res) => {
  const badminton = await db.query(
    "Select * From badminton_yard"
  )

  res.json({data: badminton})
})

module.exports = router;