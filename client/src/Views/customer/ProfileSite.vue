<template>
  <div class="back_ground">
    <NavBar />
    <div class="container flex min-h-screen">
      <div class="bar">
        <div class="image-profile" type="button" @click="toggleMenu">
          <img src="@/assets/images/TAI KHOAN.png" alt="user-img" />
          <div class="profile-txt">
            <span>Tài khoản của</span>
            <h3>{{ name }}</h3>
          </div>
          <div :class="['profile-bar', { 'open-menu': isMenuOpen }]">
            <div class="item" @click="redirectToProfile">
              <img src="@/assets/images/Profile.png" alt="user-img" />
              <span>Thông tin chung</span>
            </div>
            <hr />
            <div class="item" @click="redirectToHistory">
              <img src="@/assets/images/history.png" alt="user-img" />
              <span>Lịch sử đặt sân</span>
            </div>
            <hr />
            <div class="item" v-if="isAdmin" @click="redirectToAdmin">
              <img src="@/assets/images/Change_password.png" alt="user-img" />
              <span>Quay lại trang Admin</span>
            </div>
            <div class="item" v-else @click="redirectToResetPwd">
              <img src="@/assets/images/Change_password.png" alt="user-img" />
              <span>Đổi mật khẩu</span>
            </div>
            <hr />
            <div class="item" @click="logout">
              <img src="@/assets/images/Logout.png" alt="user-img" />
              <span>Thoát</span>
            </div>
          </div>
        </div>
      </div>
      <div class="dashboard">
        <div class="title">
          <h2>THÔNG TIN CHUNG</h2>
          <a href="">Chỉnh sửa</a>
        </div>
        <hr />
        <div class="group-info">
          <div class="self-info col-xs-12 col-md-5">
            <div class="group">
              <div class="label">Họ và tên</div>
              <div class="detail">{{ name }}</div>
            </div>
            <div class="group">
              <div class="label">Email</div>
              <div class="detail">{{ email }}</div>
            </div>
          </div>
          <div class="self-info col-xs-12 col-md-5">
            <div class="group">
              <div class="label">Số điện thoại</div>
              <div class="detail">0909617574</div>
            </div>
            <div class="group">
              <div class="label">Tên tài khoản</div>
              <div class="detail">{{ email }}</div>
            </div>
          </div>
        </div>

        <div class="title">
          <h2>LỊCH SỬ ĐẶT SÂN</h2>
          <a href="#/History">Xem tất cả</a>
        </div>
        <div
          v-for="(item, index) in items"
          :key="index"
          :class="{ item1: index % 2 === 0, item2: index % 2 !== 0 }"
        >
          <div class="left-part">
            <div class="image-container">
              <img :src="item.imageSrc" alt="CourtBadminton" />
            </div>
          </div>
          <div class="right-part">
            <div class="court-name">{{ item.courtName }}</div>
            <p>
              <i class="fas fa-home text-white" style="font-size: 23px; margin-right: 5px"></i>
              {{ item.address }}
            </p>
            <p>
              <i class="fas fa-phone text-white" style="font-size: 23px; margin-right: 5px"></i>
              {{ item.phoneNumber }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <FooterBar />
  </div>
</template>

<!-- <script>
// import { Splide, SplideSlide } from '@splidejs/vue-splide';
import { defineComponent, ref, onMounted } from 'vue'
import axios from 'axios'

export default defineComponent({
  // components: {
  //     Splide,
  //     SplideSlide,
  // },

  setup() {
    const options = {
      rewind: true,
      gap: '1rem'
    }
    const notifData = ref([])
    const bangTinData = ref([])
    const slicedBangTinData = ref([])

    onMounted(async () => {
      try {
        const notif = await axios.get('http://localhost:5000/notif')
        notifData.value = notif.data.notifData

        const bangTin = await axios.get('http://localhost:5000/bangtin')
        bangTinData.value = bangTin.data.bangTinData
        console.log(bangTinData)

        const slicedData = []
        for (let i = 0; i < bangTinData.value.length; i += 3) {
          slicedData.push(bangTinData.value.slice(i, i + 3))
        }
        slicedBangTinData.value = slicedData
        console.log(slicedBangTinData)
      } catch (error) {
        console.error(error)
      }
    })

    return { options, notifData, slicedBangTinData }
  },

  data() {
    return {
      isMenuOpen: false,
      items: [
        {
          imageSrc:
            'https://sonsanepoxy.vn/wp-content/uploads/2023/07/lap-dat-he-thong-den-chieu-san-cau-long.jpg',
          courtName: 'Sân cầu lông Thiên Vân',
          address: '57 Nguyễn Nghiêm, Phú Trung, Tân Phú, Thành phố Hồ Chí Minh',
          phoneNumber: '0913 404 924'
        },
        {
          imageSrc: 'https://limosa.vn/wp-content/uploads/2023/08/san-cau-long-cay-keo.jpg',
          courtName: 'Sân cầu lông ABC',
          address: '710/53/2, Lũy Bán Bích, Tân Thành, Tân Phú, Thành phố Hồ Chí Minh',
          phoneNumber: '0983 916 646'
        }
      ]
    }
  },

  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
    },
    redirectToProfile() {
      window.location.href = '#/Profile'
    },
    redirectToHistory() {
      window.location.href = '#/History'
    },
    logout() {
      localStorage.removeItem('loggedIn')
      window.location.href = '#/home'
    }
  }
})
</script> -->

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import NavBar from '@/components/global/NavBar.vue'
import FooterBar from '@/components/global/FooterBar.vue'
import { data } from 'autoprefixer'

// Khai báo các biến sử dụng `ref` để tạo ra các biến phản ứng
const notifData = ref([])
const bangTinData = ref([])
const slicedBangTinData = ref([])
const isMenuOpen = ref(false)
const name = localStorage.getItem('user_name')
const email = localStorage.getItem('user_email')
const isAdmin = localStorage.getItem('AdminloggedIn')
// Khai báo mảng items chứa thông tin về các sân cầu lông
const items = ref([
  {
    imageSrc:
      'https://sonsanepoxy.vn/wp-content/uploads/2023/07/lap-dat-he-thong-den-chieu-san-cau-long.jpg',
    courtName: 'Sân cầu lông Thiên Vân',
    address: '57 Nguyễn Nghiêm, Phú Trung, Tân Phú, Thành phố Hồ Chí Minh',
    phoneNumber: '0913 404 924'
  },
  {
    imageSrc: 'https://limosa.vn/wp-content/uploads/2023/08/san-cau-long-cay-keo.jpg',
    courtName: 'Sân cầu lông ABC',
    address: '710/53/2, Lũy Bán Bích, Tân Thành, Tân Phú, Thành phố Hồ Chí Minh',
    phoneNumber: '0983 916 646'
  }
])

// Sử dụng `onMounted` để thực hiện các thao tác lấy dữ liệu khi component được gắn vào DOM
onMounted(async () => {
  try {
  } catch (error) {
    console.error(error)
  }
})

// Khai báo các hàm điều khiển tương tác
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const redirectToProfile = () => {
  window.location.href = '#/Profile'
}

const redirectToHistory = () => {
  window.location.href = '#/History'
}

const redirectToAdmin = () => {
  window.location.href = '#/admin/dashboard'
}

const redirectToResetPwd = () => {
  window.location.href = '#/ResetPwd'
}

const logout = () => {
  localStorage.removeItem('loggedIn')
  window.location.href = '#/home'
}
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  //  min-height: 500px;
  height: fit-content;
  padding-top: 50px;
  padding-bottom: 20px;
  display: flex;
}

.bar {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: relative;
  height: 80px;
  margin-right: 30px;
}

.image-profile {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  background-color: #45a29e;
  width: 300px;
  height: 80px;
  border-radius: 10px;
  padding: 10px;
  cursor: pointer;
  img {
    width: 50px;
  }
}

.image-profile:hover {
  /* Màu sắc khi hover */
  color: red; /* hoặc màu bạn muốn thay đổi khi hover */
}

.profile-txt {
  color: white;
  text-align: center;
  font-size: 1.5em;
  width: 100%;
  transition-duration: 0.4s;
}
.profile-txt:hover {
  color: mistyrose;
}

.profile-bar {
  display: flex;
  flex-direction: column;
  position: absolute;
  padding-top: 10px;
  top: 100%;
  max-height: 0px;
  width: 100%;
  overflow: hidden;
  transition: max-height 0.5s;
  z-index: 1000;

  .item {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: white;
    :hover {
      background-color: #ccc;
    }
    span {
      font-size: 1.5em;
    }
    span:hover {
      background-color: transparent;
      font-weight: 500;
    }
  }
  img {
    width: 30px;
    background-color: #e5e5e5;
    border-radius: 50%;
    padding: 8px;
    margin-right: 8px;
  }
  hr {
    border: 0;
    height: 2px;
    width: 100%;
    background-color: #45a29e;
    margin: 10px 0 10px;
  }
}
.profile-bar.open-menu {
  max-height: 400px;
}

.dashboard {
  width: 100%;
  hr {
    margin: 5px 0 5px;
  }
}

.title {
  position: relative;
  align-items: center;
  margin-top: 20px;
  h2 {
    color: white;
    font-weight: 500;
    border-left: 3px solid white;
    padding-left: 10px;
    font-size: 30px;
    line-height: 1.5;
    margin: 0 0 10px;
    min-height: 27px;
  }
  a {
    font-size: 15px;
    color: white;
    position: absolute;
    top: 3px;
    right: 0;
  }
}
.group-info {
  position: relative;
  display: flex;
  width: 100%;
}
.self-info {
  border: 1px solid #d9d9d9;
  border-radius: 3px;
  padding: 15px 20px;
  margin-right: 10px;
  .group {
    color: white;
    margin-bottom: 10px;
    .label {
      float: left;
      width: 100px;
      font-size: 100%;
      text-align: left;
      font-weight: 400;
    }
    .detail {
      display: table-cell;
      font-weight: 500;
    }
  }
}

//court
.item1,
.item2 {
  display: flex;
  height: 180px;
  width: 100%;
  // cursor: pointer;
  transition: transform 0.5s;
}

.item1:hover,
.item2:hover {
  z-index: 1;
  transform: scaleX(1.02);
  transition: transform 0.5s;
}

.item1 {
  background: rgba(69, 162, 158, 0.6);
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
  font-size: 1.5em;
}

.court-name {
  font-size: 1.5em;
}
.item2 {
  background-color: #45a29e;
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
</style>
