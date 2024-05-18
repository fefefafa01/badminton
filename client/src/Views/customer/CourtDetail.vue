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
                <div v-if="cell === 'circle'" class="frame"><div class="circle"></div></div>
                <div v-else-if="cell === 'filled'" class="filled"></div>
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
      times: [
        '6:00',
        '7:00',
        '8:00',
        '9:00',
        '10:00',
        '11:00',
        '12:00',
        '13:00',
        '14:00',
        '15:00',
        '16:00',
        '17:00',
        '18:00',
        '19:00',
        '20:00',
        '21:00',
        '22:00',
        '23:00',
        '24:00'
      ],
      rows: [
        { name: 'Sân 1', schedule: Array(19).fill('circle') },
        {
          name: 'Sân 2',
          schedule: [
            'circle',
            'circle',
            'circle',
            'filled',
            'circle',
            'circle',
            'circle',
            'circle',
            'circle',
            'circle',
            'circle',
            'circle',
            'circle',
            'filled',
            'circle',
            'circle',
            'circle',
            'circle',
            'circle'
          ]
        },
        {
          name: 'Sân 3',
          schedule: [
            'circle',
            'circle',
            'circle',
            'circle',
            'filled',
            'circle',
            'circle',
            'circle',
            'circle',
            'circle',
            'circle',
            'circle',
            'circle',
            'circle',
            'circle',
            'circle',
            'circle',
            'circle',
            'circle'
          ]
        },
        { name: 'Sân 4', schedule: Array(19).fill('circle') },
        {
          name: 'Sân 5',
          schedule: [
            'circle',
            'circle',
            'circle',
            'circle',
            'circle',
            'circle',
            'circle',
            'circle',
            'filled',
            'circle',
            'circle',
            'circle',
            'circle',
            'circle',
            'circle',
            'circle',
            'circle',
            'circle',
            'circle'
          ]
        },
        {
          name: 'Sân 6',
          schedule: [
            'circle',
            'circle',
            'circle',
            'circle',
            'circle',
            'circle',
            'circle',
            'filled',
            'circle',
            'circle',
            'circle',
            'circle',
            'circle',
            'circle',
            'filled',
            'circle',
            'circle',
            'circle',
            'circle'
          ]
        },
        { name: 'Sân 7', schedule: Array(19).fill('circle') },
        { name: 'Sân 8', schedule: Array(19).fill('circle') },
        { name: 'Sân 9', schedule: Array(19).fill('circle') },
        { name: 'Sân 10', schedule: Array(19).fill('circle') },
        { name: 'Sân 11', schedule: Array(19).fill('circle') }
      ],
      courts: []
    }
  },

  created() {
    this.CourtDetailStatus()
  },

  methods: {
    async CourtDetailStatus() {
      this.item = JSON.parse(localStorage.getItem('yardDetails'))
      try {
        const response = await axios.post('http://localhost:5000/CourtDetail', {
          item: this.item
        })

        console.log(response)
      } catch (error) {
        // Handle error
        console.error(error)
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
.table-custom .frame {
  position: relative;
  background-color: #45a29e;
  transition: background-color 0.2s ease;
}
.table-custom .frameTitle {
  font-size: 18px;
  position: relative;
  background-color: #45a29e;
}
.table-custom .frame:hover {
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
</style>
