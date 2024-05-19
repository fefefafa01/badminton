const express  = require('express');
const router = express.Router();
const db  = require('../db');

router.post('/selectItem', async(req, res) => {
  const badminton = await db.query(
    "Select * From badminton_yard order by yard_id ASC"
  )

  res.json({data: badminton})
})

router.post('/submit', async(req, res) => {
  await db.query(
    `Insert into court_news (name, address, date, price, linkimg, description)
            values ($1, $2, $3, $4, $5, $6)`,
            [req.body.name, req.body.address, req.body.date, req.body.price, req.body.linkImg, req.body.desc]
  )
  res.json("Success")
})

router.post('/takeNews', async (req, res) => {
  const news = await db.query(
    "Select * from court_news order by news_id ASC"
  )
  res.json({data: news})
})
module.exports = router;