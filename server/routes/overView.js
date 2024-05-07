const express  = require('express');
const router = express.Router();
const db  = require('../db');

router.post('/count', async(req, res) => {
  const countClient = await db.query(
    "Select * From customer"
  )
  const countAdmin = await db.query(
    "Select * From admin"
  )

  const countCourt = await db.query(
    "Select * From court"
  )

  res.json({client: countClient.length, admin: countAdmin.length, court: countCourt.length})
})

router.post('/table', async(req, res) => {
  const table = await db.query(
    "SELECT customer_id, name, email, password, TO_CHAR(created_date, 'DD/MM/YYYY') AS created_date FROM customer ORDER BY customer_id ASC"
  )
    res.json({table: table}) 
})

module.exports = router;