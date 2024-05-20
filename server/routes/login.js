const express = require('express');
const router = express.Router();
const db = require('../db');
const bcrypt = require('bcrypt')

router.post('/', async(req, res) => {
    if (req.body.email !== "" &&  req.body.password !== "" ) {
        var loginInfo = await db.query(
            "Select * from customer where email = $1", 
            [req.body.email]);
        if (loginInfo.length > 0) {
            const match = await bcrypt.compare(req.body.password, loginInfo[0].password);
            if (match) {
            // if (req.body.password === loginInfo[0].password) {
                res.json({ loggedIn: true, status: "Successful", name: loginInfo[0].name, email: req.body.email});
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
                const match = await bcrypt.compare(req.body.password, loginInfo[0].password);
                console.log("match",match);
                if (match){
                // if (req.body.password === loginInfo[0].password) {
                    res.json({ AdminloggedIn: true, status: "Successful", name: loginInfo[0].name, email: req.body.email});
                    console.log({status: "Successful"})
                }
                else {
                    res.json({ AdminloggedIn: false, status: "Wrong Password"});
                    console.log("Wrong Password:", req.body.password);
                }
            }
            else {
                res.json({ loggedIn: false, status: "Wrong Email"});
                console.log("Wrong Email:", req.body.email);
            }    
        } 
    }
    
});

router.post('/resetPwd', async(req, res) => {
    const resetInfo = await db.query(
        `Select * from customer where email = $1`, [
            req.body.email
        ]);
        const hashPass = await bcrypt.hash(req.body.password, 10);
        if (resetInfo.length > 0) {
            await db.query(
                `update customer set password = $1 where email = $2`, 
                [hashPass, req.body.email]
            )
            res.json({status: 'Successful'})
        }
        else {
            res.json({status: "Wrong Email"})
        }
})

module.exports = router;