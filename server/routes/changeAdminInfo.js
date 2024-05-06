const express  = require('express');
const router = express.Router();
const db  = require('../db');

router.post('/info', async(req, res) => {
    console.log(req.body);
    if (req.body.email != req.body.curEmail){
        const checkChangeInfo = await db.query(
            "Select * From admin where email = $1",
            [req.body.email]
        );
        if (checkChangeInfo.length == 0) {
            const checkExistance = await db.query(
                "Select * From admin Where email = $1 And name = $2",
                [req.body.curEmail, req.body.curName]
            )
            if (checkExistance.length > 0) {
                await db.query(
                    "Update admin Set email = $1, name = $2 Where email = $3 and name = $4",
                    [req.body.email, req.body.name, req.body.curEmail, req.body.curName]
                );

                const infoChanged = await db.query(
                    "Select * from admin where email = $1, name = $2",
                    [req.body.email, req.body.name]
                )
                if (infoChanged.length > 0) {
                    res.json({changed: true, status: 'Success', email: infoChanged[0].email, name: infoChanged[0].name})
                }
                else {
                    res.json({changed: false, status: 'Change Failed'})
                }
            }
            else {
                res.json({changed: false, status: 'Info not Exist'})
            }
        }
        else if (checkChangeInfo.length > 0) {
            res.json({changed: false, status: 'Email Exist'})
        }
    }
    else{
        await db.query(
            "Update admin Set name = $1 Where email = $2 and name = $3",
            [req.body.name, req.body.curEmail, req.body.curName]
        )
        res.json({changed: true, status: 'Success', email: req.body.email, name: req.body.name})
    }    
    
});

router.post('/password', async(req, res) => {
    console.log(req.body);
    var checkPassword = await db.query(
      `Select * From admin Where email = $1 and password = $2`,
      [req.body.email, req.body.curPass]
    )
    if (checkPassword.length > 0){
      await db.query(
        "Update admin Set password = $1 Where email = $2 ", 
        [req.body.password, req.body.email]
      );
      res.json({changed: true, status: 'Success'})
    }
    else { 
      res.json({changed: false, status: 'Info Not Exist'})
    }
});

module.exports = router;