const express = require('express');
const router = express.Router();
const db = require('../db');

router.post('/',async (req, res) => {
    var item = req.body.item;
    var date = req.body.date;
    var courtIDs = await db.query("SELECT court_id FROM court WHERE yard_id = $1", item.yard_id);
    var frame = await db.query(
        `SELECT DISTINCT f.time_slot, c.court_num
        FROM frame f, court c
        WHERE f.court_id = c.court_id and c.yard_id = $1 and f.time_frame = $2`
        ,[item.yard_id, date]);
    res.json({ data: item, count: courtIDs.length, frame: frame, status: "Successful" });
});

module.exports = router;