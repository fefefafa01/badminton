const express = require("express");
const router = express.Router();
const db = require("../db");

router.post("/", async (req, res) => {
  const date = req.body.date;
  const slots = req.body.slots;
  const yard_id = req.body.yard_id;
  // console.log(date);
  // console.log(slots);
  try {
    for (const slot of slots) {
      var temp = slot.name.split(" ");
      const courtNum = parseInt(temp[1], 10); // Chuyển đổi chuỗi thành số nguyên với cơ số 10
      temp = slot.time.split(":");
      const time_slot = parseInt(temp[0], 10);

      const result = await db.query(
        `SELECT court_id 
                FROM court
                WHERE yard_id = $1 AND court_num = $2`,
        [yard_id, courtNum]
      );

      var court_id = result[0].court_id;
      const update = await db.query(
        `insert into frame(court_id, time_frame, time_slot) 
                values($1, $2, $3)`,
        [court_id, date, time_slot]
      );
    }
    res.json({ status: "Successful" });
  } catch (error) {
    console.error("Error executing query", error);
    res.status(500).json({ status: "Failed" });
  }
});

module.exports = router;
