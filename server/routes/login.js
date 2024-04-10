const express = require('express');
const router = express.Router();
const db = require('../db');

router.post('/', async(req, res) => {
    if (req.body.email !== "" &&  req.body.password !== "" ) {
        var loginInfo = await db.query(
            "Select * from customer where email = $1", 
            [req.body.email]);
        if (loginInfo.length > 0) {
            if (req.body.password === loginInfo[0].password) {
                res.json({ loggedIn: true, status: "Successful"});
            }
            else {
                res.json({ loggedIn: false, status: "Wrong Password"});
                console.log("Wrong Password:", req.body.password);
            }
        }
        else{
            loginInfo = await db.query(
                "Select * from admin where email = $1", 
                [req.body.email]);
            if (loginInfo.length > 0) {
                if (req.body.password === loginInfo[0].password) {
                    res.json({ AdminloggedIn: true, status: "Successful"});
                }
            }
            else {
                res.json({ loggedIn: false, status: "Wrong Email"});
                console.log("Wrong Email:", req.body.email);
            }    
        } 
    }
    
});

module.exports = router;