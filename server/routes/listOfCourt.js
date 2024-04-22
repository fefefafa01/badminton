const express = require('express');
const router = express.Router();
const db = require('../db');

router.post('/', async(req, res) => {
    // if(req.body.district) {
    //     res.json({ hap: true, status: "Successful"});
    // }
    if (req.body.district == "" || req.body.district == "Tất cả") {
        var yardInfo = await db.query(
            "Select * from badminton_yard");
        if (yardInfo.length > 0) {
            console.log("Court found");
        }
        res.json({ data: yardInfo, status: "Successful"});
    }
    else {
        var yardInfo = await db.query(
            "Select * from badminton_yard where address like $1", 
            '%'+[req.body.district] + '%');
        if (yardInfo.length > 0) {
            console.log("Court found");
        }
        res.json({ data: yardInfo, status: "Successful"});
    }
});

module.exports = router;