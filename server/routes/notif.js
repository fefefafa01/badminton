/** @format */

const express = require("express");
const router = express.Router();
const db = require("../db");

router.get("/", async (req, res) => {
	const notifData = await db.query(`Select * from notification order by notification_id asc`);
	if (notifData.length > 0) {
		res.json({ notifData: notifData });
		console.log("Notification found");
	} else {
		console.log("No notification");
	}
});

module.exports = router;
