const express = require('express');
const router = express.Router();
const db = require('../db');

router.post('/',async (req, res) => {
    var item = req.body.item;
    var countResult = await db.query("SELECT COUNT(*) AS count FROM court WHERE yard_id = $1", item.yard_id);
    var count = countResult[0].count;
    res.json({ data: item, count: count, status: "Successful" });
});

module.exports = router;