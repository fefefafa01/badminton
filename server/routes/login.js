const express = require('express');
const router = express.Router();
const db = require('../db');

const email = 'dangkhoa0521@gmail.com';
const password = '123456';

router.post('/', async(req, res) => {
    if (req.body.email !== "" &&  req.body.password !== "" ) {
        const loginInfo = await db.query(
            // "Select * from customer where email = $1", 
            // [req.body.email]);
            "Select * from customer where email = 'dangkhoa0521@gmail.com'");
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
            console.log("Wrong Email:", email);
        } 
    } 
    
});

module.exports = router;