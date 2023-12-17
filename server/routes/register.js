const express = require('express');
const router = express.Router();
const db = require('../db');

router.post('/', async(req, res) => {
    console.log(req.body);
    const regInfo = await db.query(
        "Select * from customer where email = $1",
        [req.body.email]);
    if (regInfo.length > 0) {
        res.json({ registered: false, status: 'Email Exist'})
        console.log("Email Exist", req.body.email)
    }
    else{
        var checkid = 0;
        const lastestID = await db.query(
            "select * from customer order by customer_id desc"
        )
        if (lastestID.length > 0)
            {checkid = lastestID[0].customer_id + 1;}
        else{checkid = 1}
        const createNewCustomer = await db.query(
            `insert into customer (name, customer_id, email, password)
            values ($1, $2, $3, $4)`,
            [req.body.name, checkid, req.body.email, req.body.password]
        );
        res.json({ registered: true, status: "Successful"});
        console.log("Successful");
    }     
});

module.exports = router;