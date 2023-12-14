const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/', async(req, res) => {
    // if (req.body.email !== "" &&  req.body.password !== "" ) {
    //     const loginInfo = await db.query(
    //         "Select * from customer where email = $1", 
    //         [req.body.email]);
    //     if (loginInfo.length > 0) {
    //         if (req.body.password === loginInfo[0].password) {
    //             res.json({ loggedIn: true, status: "Successful"});
    //             console.log("Successful");
    //         }
    //         else{
    //             res.json({ loggedIn: false, status: "Wrong password"});
    //             console.log("Wrong password", req.body.password);
    //         }
    //     }
    //     else{
    //         res.json({ loggedIn: false, status: "Wrong Email"});
    //         console.log("Wrong Email:", req.body.email);
    //     } 
    // } 
    const notifData = await db.query(
        `Select * from notification order by notification_id asc`
    )
    if (notifData.length > 0) {
        res.json({notifData: notifData});
        console.log("Notification found");
    }
    else {
        console.log("No notification");
    }
});

module.exports = router;