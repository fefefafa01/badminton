const express = require('express');
const router = express.Router();
const db = require('../db/index');

router.post('/',async (req, res) => {
    const { item, date } = req.body;
    const { data: courtIds, error: errorCourt } = await db
        .from("court")
        .select("court_id")
        .eq("yard_id", item.yard_id)
    if (errorCourt) {
        console.error(errorCourt)
        return;
    }    
    const { data: frame, error: errorFrame } = await db
        .from("frame")
        .select("time_slot, court:court_id(court_num)")
        .eq("court.yard_id", item.yard_id)
        .eq("time_frame", date)
        .distinct()
    if (errorFrame) {
        console.error(errorFrame)
        return;
    }  
    
    if (courtIds && courtIds.length > 0 && frame && frame.length > 0) {
        res.json({ data: item, count: courtIds.length, frame: frame, status: "Successful" })
    }
});

module.exports = router;