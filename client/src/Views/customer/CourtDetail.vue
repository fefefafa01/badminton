<template>
  <div class="back_ground">
    <NavBar />
    <div class="container">
      <div class="item">
        <div class="left-part">
          <div class="image-container">
            <img :src="item.linkimg" alt="CourtBadminton" />
          </div>
        </div>
        <div class="right-part">
          <div class="court-name">{{ item.name }}</div>
          <p>
            <i class="fas fa-home text-white" style="font-size: 23px; margin-right: 5px"></i>
            {{ item.address }}
          </p>
          <p>
            <i class="fas fa-phone text-white" style="font-size: 23px; margin-right: 5px"></i>
            {{ item.phone_num }}
          </p>
        </div>
      </div>
      <div class="rules">
        <span
          style="
            display: flex;
            width: 100%;
            text-align: center;
            justify-content: center;
            font-size: 25px;
          "
        >
          Quy định:
        </span>
        <div class="rules-content" v-html="regulation"></div>
      </div>
      <div class="mt-5">
        <table class="table table-custom">
          <thead>
            <tr>
              <th class="header-cell">Sân/Giờ</th>
              <th v-for="time in times" :key="time" class="header-cell">{{ time }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(row, rowIndex) in rows" :key="rowIndex">
              <td class="frameTitle">{{ row.name }}</td>
              <td class="frame" v-for="(cell, cellIndex) in row.schedule" :key="cellIndex">
                <div
                  v-if="cell.type === 'circle'"
                  :id="`frame_${row.name}_${times[cellIndex]}`"
                  :class="{ filled1: !cell.active, filled: cell.active }"
                  @click="selectFrame(row.name, times[cellIndex], rowIndex, cellIndex)"
                >
                  <div class="circle"></div>
                </div>
                <div v-else-if="cell.type === 'filled'" class="filled"></div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="status-container">
        <div class="status-note">Ghi chú:</div>
        <div class="status-item">
          <div class="status-box status-available">
            <div class="status-circle"></div>
          </div>
          Trống (có thể đặt)
        </div>
        <div class="status-item">
          <div class="status-box status-unavailable"></div>
          Không thể đặt
        </div>
      </div>
    </div>
    <div id="app" class="container1">
      <div class="booking-title">Sân đã chọn:</div>
      <div v-for="(slot, index) in slots" :key="index" class="booking-slot">
        <div class="slot-info">
          <div class="slot-name">{{ slot.name }}</div>
          <div class="slot-time">{{ slot.time }}</div>
        </div>
        <button class="delete-btn" @click="removeSlot(index)">Xóa</button>
      </div>
      <button class="confirm-btn" @click="confirmBooking()">Xác nhận</button>
    </div>
    <FooterBar />
  </div>
</template>

<script>
import axios from 'axios'
import NavBar from '@/components/global/NavBar.vue'
import FooterBar from '@/components/global/FooterBar.vue'
export default {
  components: {
    NavBar,
    FooterBar
  },
  data() {
    return {
      item: null,
      date: null,
      times: [],
      rows: [],
      slots: [],
      courts: [],
      unValidSlots: [],
      user_id: '',
      regulation: ''
    }
  },

  created() {
    this.CourtDetailStatus()
  },

  methods: {
    async CourtDetailStatus() {
      this.user_id = localStorage.getItem('user_id')
      this.date = localStorage.getItem('mytime')
      this.item = JSON.parse(localStorage.getItem('yardDetails'))
      this.regulation = this.item.regulation.replaceAll('\n', '<br>')
      try {
        const response = await axios.post('http://localhost:5000/CourtDetail', {
          item: this.item,
          date: this.date
        })
        var frame = response.data.frame
        for (var i = this.item.start_time; i <= this.item.end_time; i++) {
          this.times.push(`${i}:00`)
        }
        for (var i = 1; i <= response.data.count; i++) {
          this.rows.push(this.initializeRows(i, this.item.end_time - this.item.start_time + 1))
        }
        for (var i = 0; i < frame.length; i++) {
          this.rows[frame[i].court_num - 1].schedule[
            frame[i].time_slot - this.item.start_time
          ].active = true
          this.rows[frame[i].court_num - 1].schedule[
            frame[i].time_slot - this.item.start_time
          ].type = 'filled'
        }
        console.log(this.rows)
      } catch (error) {
        // Handle error
        console.error(error)
      }
    },
    initializeRows(num_of_court, count_time) {
      const circleArray = Array(count_time)
        .fill()
        .map(() => ({
          type: 'circle', // Loại ô ban đầu là 'circle'
          active: false // Trạng thái ban đầu là không hoạt động
        }))
      return {
        name: `Sân ${num_of_court}`,
        schedule: circleArray
      }
    },
    removeSlot(index) {
      // Lấy thông tin của slot
      const slot = this.slots[index]

      // Tìm chỉ số của court và time trong rows và times
      const courtIndex = this.rows.findIndex((row) => row.name === slot.name)
      const timeIndex = this.times.indexOf(slot.time.split(' - ')[0]) // Lấy phần đầu của chuỗi thời gian, ví dụ "9:00 - 10:00"

      // Cập nhật trạng thái của ô tương ứng trong rows
      if (courtIndex !== -1 && timeIndex !== -1) {
        this.rows[courtIndex].schedule[timeIndex].active = false // Đặt lại trạng thái active là false
        this.rows[courtIndex].schedule[timeIndex].type = 'circle' // Đặt lại loại ô là 'circle' nếu cần
      }

      // Xóa slot khỏi mảng slots
      this.slots.splice(index, 1)
    },
    selectFrame(court, time, courtIndex, timeIndex) {
      if (localStorage.getItem('loggedIn')) {
        if (courtIndex !== -1 && timeIndex !== -1) {
          // Đánh dấu ô này là đã được chọn
          this.rows[courtIndex].schedule[timeIndex].type = 'filled' // Thay đổi loại của cell
          this.rows[courtIndex].schedule[timeIndex].active = true // Đặt trạng thái hoạt động là true
        }
        this.slots.push({ name: court, time: `${time} - ${parseInt(time) + 1}:00` })
      } else {
        localStorage.setItem('booking', true)
        window.location.href = '#/Login'
      }
    },
    async confirmBooking() {
      if (this.slots != '') {
        let confirmMsg = `Tổng số tiền là ${
          this.item.average_price * this.slots.length
        } đồng \n Bạn có muốn chuyển đến trang thanh toán?`
        if (confirm(confirmMsg)) {
          var paymentInfo = {
            date: this.date,
            slots: this.slots,
            yard_id: this.item.yard_id,
            total_cost: this.item.average_price * this.slots.length,
            user_id: this.user_id
          }
          localStorage.setItem('paymentInfo', JSON.stringify(paymentInfo))
          window.location.href = '#/Payment'
        }

        // try {
        //   const response = await axios.post('http://localhost:5000/saveFrame', {
        //     date: this.date,
        //     slots: this.slots,
        //     yard_id: this.item.yard_id
        //   })
        //   if (response.data.status == "Successful") {
        //     window.location.reload()
        //   }
        // } catch (error) {
        //   // Handle error
        //   console.error(error)
        // }
      } else {
        alert('Vui lòng chọn khung thời gian bạn muốn đặt.')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  position: relative;
  width: 100%;
  height: auto;
  padding-top: 40px;
  display: flex;
  flex-direction: column;
  min-height: 500px;
  align-items: center; /* Căn giữa theo chiều ngang */
}

.rules {
  padding: 10px;
  margin-top: 50px;
  border-radius: 20px;

  height: 200px;
  width: 80%;
  background-color: rgb(69, 162, 157);
  color: mistyrose;
}

.rules-content {
  margin-top: 10px;
  width: 100%;
  font-size: 20px;
}

.item {
  border-radius: 20px;
  display: flex;
  height: 165px;
  width: 1100px;
  background-color: rgba(69, 162, 158, 0.6);
}

.left-part {
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 18%; /* Chiếm 20% */
}

.right-part {
  padding: 20px 5px 5px 4%;
  align-items: center;
  flex: 82%; /* Chiếm 80% */
  font-family: 'Comfortaa';
  color: #ffffff;
  font-size: 22px;
}

.court-name {
  font-size: xx-large;
}

.image-container {
  justify-content: center;
  height: 90%;
  width: auto;
}

.image-container img {
  padding-left: 20px;
  padding-right: 20px;
  width: 100%;
  height: 100%;
  display: block;
  border-radius: 50%; /* Áp dụng border-radius cho ảnh */
}

.table-custom {
  width: 100%;
  text-align: center;
}
.table-custom td,
.table-custom th {
  border: 2px solid #000;
  padding: 5px;
  vertical-align: middle;
}
.table-custom .filled {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: #c5c6c7;
}
.table-custom .filled1 {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: #45a29e;
}
.table-custom .filled1:hover {
  background-color: #1f2833;
}
.table-custom .frameTime {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: #c5c6c7;
}
.table-custom .frame {
  position: relative;
}
.table-custom .frameTitle {
  font-size: 18px;
  position: relative;
  background-color: #45a29e;
}
.table-custom .frame:hover {
  background-color: #1f2833;
}
.frame:hover {
  background-color: #1f2833;
}
.table-custom .circle {
  width: 20px;
  height: 20px;
  background-color: #c5c6c7; /* Green color */
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.header-cell {
  background-color: #45a29e;
  height: 55px; /* Set a specific height */
  font-size: 18px; /* Increase font size if needed */
  width: 100px;
  text-align: center;
}
.status-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: white;
  font-family: 'Comfortaa', sans-serif;
  font-size: 25px;
  margin-top: 20px;
  margin-bottom: 20px;
}
.status-note {
  display: flex;
  align-items: center;
  margin: 10px 0;
}
.status-item {
  display: flex;
  align-items: center;
  margin: 10px 0;
}
.status-box {
  width: 40px;
  height: 40px;
  border: 2px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
}
.status-circle {
  width: 20px;
  height: 20px;
  background-color: #c5c6c7;
  border-radius: 50%;
}
.status-available {
  background-color: #45a29e;
}
.status-unavailable {
  background-color: #c5c6c7;
}
.container1 {
  background-color: #0b0c10;
  color: white;
  padding: 20px;
  font-family: Arial, sans-serif;
  width: 400px;
  border-radius: 8px;
  margin-bottom: 40px;
  margin-left: 60px;
}
.booking-title {
  font-size: 25px;
  margin-bottom: 10px;
}
.booking-slot {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
}
.slot-info {
  width: 205px;
  background-color: #4caf50;
  padding: 10px;
  border-radius: 8px;
  display: flex;
}
.slot-time {
  width: 120px;
  display: flex;
  margin-right: 5px;
  font-size: 17px;
}
.slot-name {
  width: 80px;
  display: flex;
  margin-right: 10px;
  font-size: 17px;
}
.delete-btn,
.confirm-btn {
  background-color: #f44336;
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  border-radius: 8px;
}
.confirm-btn {
  background-color: #008cba;
}
</style>
