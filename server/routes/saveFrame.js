const express = require("express");
const router = express.Router();
const db = require("../db");

router.post("/", async (req, res) => {
  const date = req.body.date;
  const slots = req.body.slots;
  const yard_id = req.body.yard_id;
  const total_cost = req.body.total_cost;
  const user_id = req.body.user_id;
  try {
    let payment_id = date+slots[0].name+slots[0].time+yard_id;
    const {  error: insertPaymentError} = await db
      .from('payment')
      .insert({
          payment_id: payment_id,
          customer_id: user_id,
          total_cost: total_cost, // Giả sử date là một biến chứa ngày tháng
      });
      if (insertPaymentError) {
        // console.error('Error inserting data:', insertPaymentError);
      }

    for (const slot of slots) {
      var temp = slot.name.split(" ");
      const courtNum = parseInt(temp[1], 10); // Chuyển đổi chuỗi thành số nguyên với cơ số 10
      temp = slot.time.split(":");
      const time_slot = parseInt(temp[0], 10);

      // Giả sử yard_id và courtNum là các biến đã được cung cấp
      const { data: courts, error: courtError } = await db
      .from('court')
      .select('court_id')
      .eq('yard_id', yard_id)
      .eq('court_num', courtNum)
      .single(); // Sử dụng single() nếu bạn mong đợi chỉ một bản ghi trả về

      if (courtError) {
      console.error('Error fetching court ID:', courtError);
      return; // Xử lý lỗi hoặc trả về thông báo lỗi
      }

      const court_id = courts.court_id; // Giả sử chỉ một bản ghi được trả về
      const frame_id = court_id+date+time_slot
      const {  error: insertError} = await db
      .from('frame')
      .insert({
          frame_id: frame_id,
          court_id: court_id,
          time_frame: date, // Giả sử date là một biến chứa ngày tháng
          time_slot: time_slot // Giả sử time_slot là một biến chứa thông tin về khung giờ
      });
      if (insertError) {
        console.error('Error inserting data:', insertError);
      }
      const {  error: insertErrorBooking} = await db
      .from('booking')
      .insert({
          frame_id: frame_id,
          payment_id: payment_id,
      });
      if (insertErrorBooking) {
        console.error('Error inserting data:', insertErrorBooking);
      }
    }
    res.json({ status: "Successful" });
  } catch (error) {
    console.error("Error executing query", error);
    res.status(500).json({ status: "Failed" });
  }
});

module.exports = router;
