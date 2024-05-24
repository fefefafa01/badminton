const express = require('express');
const router = express.Router();
const db = require('../db/index');

router.post('/',async (req, res) => {
    const { item } = req.body
    // const countResult = await db.query("SELECT COUNT(*) AS count FROM court WHERE yard_id = $1", item.yard_id);
    const { data, error } = await db
        .from("court")
        .select("court_id", { count: 'exact' })
        .eq('yard_id', item.yard_id)
    if (error) {
        console.error(error);
        return;
    }    

    if(data && data.length > 0) {
        const count = data[0].count;
        res.json({ data: item, count: count, status: "Successful" });
    }
    
});

module.exports = router;