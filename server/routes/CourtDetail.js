const express = require('express');
const router = express.Router();
const db = require('../db');

router.post('/', async(req, res) => {
    // if(req.body.district) {
    //     res.json({ hap: true, status: "Successful"});
    // }
    res.json({ data: 'yardInfo', status: "Successful"});
});

module.exports = router;