const express  = require('express');
const router = express.Router();
const db  = require('../db');

router.post('/count', async(req, res) => {
  const countClient = await db.query(
    "Select * From customer"
  )
  const countPayment = await db.query(
    "Select * From payment"
  )

  const countCourt = await db.query(
    "Select * From court"
  )

  res.json({client: countClient.length, payment: countPayment.length, court: countCourt.length})
})

router.post('/table', async(req, res) => {
  const table = await db.query(
    "SELECT customer_id, name, email, password, TO_CHAR(created_date, 'DD/MM/YYYY') AS created_date FROM customer ORDER BY customer_id ASC"
  )
    res.json({table: table}) 
})

router.post('/tableYards', async(req, res) => {
  const table = await db.query(
    `Select yard_id, badminton_yard.name, address, phone_num, owner_name
    From badminton_yard 
    Join yard_owner 
    On badminton_yard.owner_id = yard_owner.owner_id
    ORDER BY yard_id ASC
    `
  )
  res.json({table: table})
})

router.post('/tablePayments', async (req, res) => {
  const table = await db.query(
    `Select name, owner_name, total_cost from (payment
    Join customer On payment.customer_id = customer.customer_id)
    Join yard_owner On payment.owner_id = yard_owner.owner_id
    Order By payment_id ASC
    `
  )
  res.json({table: table})  
})
module.exports = router;