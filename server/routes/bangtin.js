/** @format */

const express = require("express");
const router = express.Router();
const db = require("../db");

router.get("/", async (req, res) => {
	const notifData = await db.query(`Select * from bangtin order by bangtin_id asc`);
	if (notifData.length > 0) {
		res.json({ bangTinData: notifData });
		console.log("Bang Tin found");
	} else {
		console.log("No Bang Tin");
	}
});

module.exports = router;
