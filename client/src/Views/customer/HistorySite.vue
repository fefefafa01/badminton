<template>
  <div class="back_ground">
    <NavBar />
    <div class="container">
      <div class="bar">
        <div class="image-profile" type="button" @click="toggleMenu">
          <img src="@/assets/images/TAI KHOAN.png" alt="user-img" />
          <div class="profile-txt">
            <span>Tài khoản của</span>
            <h3>Khoa</h3>
          </div>
          <div :class="['profile-bar', { 'open-menu': isMenuOpen }]">
            <a href="#" @click="redirectToProfile">
              <img src="@/assets/images/Profile.png" alt="user-img" />
              <span>Thông tin chung</span>
            </a>
            <hr />
            <a href="#" @click="redirectToHistory">
              <img src="@/assets/images/history.png" alt="user-img" />
              <span>Lịch sử đặt sân</span>
            </a>
            <hr />
            <a href="#">
              <img src="@/assets/images/Change_password.png" alt="user-img" />
              <span>Đổi mật khẩu</span>
            </a>
            <hr />
            <a href="#" @click="logout">
              <img src="@/assets/images/Logout.png" alt="user-img" />
              <span>Thoát</span>
            </a>
          </div>
        </div>
      </div>
      <div class="dashboard">
        <div class="title">
          <h2>LỊCH SỬ ĐẶT SÂN</h2>
          <a href="">Xem tất cả</a>
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

<script>
// import { Splide, SplideSlide } from '@splidejs/vue-splide';
import { defineComponent, ref, onMounted } from 'vue'
import axios from 'axios'
import NavBar from '@/components/global/NavBar.vue'
import FooterBar from '@/components/global/FooterBar.vue'

export default defineComponent({
  components: {
      NavBar, 
      FooterBar,
  },

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
        },
        {
          imageSrc:
            'https://sieuthicaulong.vn/images/badminton-yard/1688728199_gallery_san-cau-long-tan-phuc-1.jpg',
          courtName: 'Sân cầu lông Tấn Phúc',
          address: '36/48 Huỳnh Thiện Lộc, Hoà Thanh, Tân Phú, Thành phố Hồ Chí Minh',
          phoneNumber: '0903 938 919'
        },
        {
          imageSrc:
            'https://badmintonw.com/uploads/images/gioi-thieu-san-cau-long-tao-dan-diem-den-li-tuong-cho-long-thu-quan-1-10.png',
          courtName: 'Sân cầu lông Viettel',
          address: '57 Nguyễn Nghiêm, Phú Trung, Tân Phú, Thành phố Hồ Chí Minh',
          phoneNumber: '0913404924'
        },
        {
          imageSrc: 'https://sieuthicaulong.vn/images/badminton-yard/1688381528_gallery_22.PNG',
          courtName: 'Sân cầu lông Lam Sơn',
          address: '320/1 Đ. Trần Bình Trọng, Phường 4, Quận 5, Thành phố Hồ Chí Minh',
          phoneNumber: '0909 222 958'
        }
      ]
    }
  },

  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
    },
    logout() {
      localStorage.removeItem('loggedIn')
      window.location.href = '#/home'
    },
    redirectToProfile() {
      window.location.href = '#/Profile'
    },
    redirectToHistory() {
      window.location.href = '#/History'
    }
  }
})
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  min-height: 500px;
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

.profile-txt {
  color: white;
  text-align: center;
  font-size: 1.5em;
  width: 100%;
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

  a {
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
  width: 1200px;
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
  font-size: 22px;
}

.court-name {
  font-size: xx-large;
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
