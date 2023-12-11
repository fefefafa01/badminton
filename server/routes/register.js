const express = require('express');
const router = express.Router();
const db = require('../db');

var email = "dangkhoan@gmail.com";
var password = "123456"

router.post('/', async(req, res) => {
    if (req.body.email !== "" &&  req.body.password !== "" ) {
        const loginInfo = await db.query(
            // "Select * from customers where email = $1", 
            // [req.body.email]);
            "Select * from customers where email = $1",
            [email]);
        if (loginInfo.rowCount > 0) {
            const passCorrect = await db.query(
                // req.body.password, loginInfo.rows[0].password
                password, loginInfo.rows[0].password
            );
            if (passCorrect){
                req.session.user = {
                    // email: req.body.email,
                    email: email,
                    id: loginInfo.rows[0].customer_id,
                }
                res.json({ loggedIn: true, status: "Successful"});
                console.log("Successful");
            }
            else{
                res.json({ loggedIn: false, status: "Wrong password"});
                console.log("Wrong password");
            }
        }
        else{
            res.json({ loggedIn: false, status: "Wrong Email"});
            console.log("Wrong Email");
        } 
    } 
    
});

module.exports = router;