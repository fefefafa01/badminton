<template>
  <div class="header-loggin">
    <div class="navbar">
      <div type="button" @click="redirectToHomepage" class="grid-item1">
        <img
          style="height: 100px"
          class="img"
          alt="Img"
          src="https://c.animaapp.com/UGutMkT8/img/da6c9e2e3c8f4d8abaf5e7e4c325ee24--1--1-1@2x.png"
        />
      </div>

      <TinTC
        type="button"
        @click="redirectToHomepage"
        class="grid-item2"
        divClassName="TIN-t-c-instance phuc_nav"
        text="Trang chủ"
      />

      <!-- type="button" @click="redirectToListOfCourt" -->
      <div class="frame grid-item4" style="z-index: 3">
        <div class="frame-1">
          <div class="phuc_nav" type="button" @click="togglePlaceMenu">
            <img
              class="icon-location"
              alt="Icon location"
              src="https://c.animaapp.com/UGutMkT8/img/---icon--location--1@2x.png"
            />
            <div class="text-wrapper-2 select-btn">{{ selectedDistrict || 'Địa điểm' }}</div>
          </div>
          <div class="content" :class="{ show: isMenuVisible }">
            <div class="search">
              <span class="uil--search-alt"></span>
              <input type="text" placeholder="Tìm kiếm" @keyup="handleKeyUp" />
            </div>
            <ul class="options">
              <li v-for="(dis, index) in districtTemp" :key="index" @click="updateName(dis)">
                {{ dis }}
              </li>
            </ul>
          </div>
        </div>
        <div class="frame-2 phuc_nav" type="button">
          <img class="vector" alt="Vector" src="https://c.animaapp.com/UGutMkT8/img/vector-1.svg" />
          <div class="ch-nh-t">
            <div>{{ selectedDayOfWeek }}</div>
            <input class="datepick" type="text" v-model="mytime" placeholder="Ngày tháng" />
          </div>
        </div>
        <div class="frame-3 phuc_nav" type="button" @click="redirectToListOfCourt">
          <img
            class="icon-clock"
            alt="Icon clock"
            src="https://c.animaapp.com/UGutMkT8/img/---icon--clock--1@2x.png"
          />
          <div class="text-wrapper-3">Thời gian</div>
        </div>

        <!-- frame-4 -->
        <div class="frame-3 phuc_nav" type="button" @click="redirectToListOfCourt">
          <img class="icon-clock" alt="Icon clock" src="../../assets/images/icon/icon.png" />
          <div class="text-wrapper-3">Giá</div>
        </div>
      </div>
      <TinTC
        type="button"
        class="design-component-instance-node"
        divClassName="SN-PHM-2 phuc_nav"
        text="Tham gia vào sân cầu lông"
      />
      <div class="group-wrapper">
        <div class="group">
          <div
            v-if="isLoggedIn"
            class="overlap-group nav-link phuc_nav"
            divClassName="phuc_nav"
            type="button"
            @click="toggleMenu"
          >
            <div class="log_icon">
              <img src="../../assets/images/TAI KHOAN.png" alt="this is logo" />
            </div>
            <div class="ng-xu-t">Cá <br />nhân</div>
            <!-- dropdown -->
            <div :class="['sub-menu-wrap', { 'open-menu': isSubMenuOpen }]">
              <div class="sub-menu">
                <div class="user-info">
                  <img src="../../assets/images/TAI KHOAN.png" alt="this is logo" />
                  <h3>Khoa</h3>
                </div>
                <hr />

                <a href="#" class="sub-menu-link" @click="redirectToProfile">
                  <img src="../../assets/images/Profile.png" alt="" />
                  <span class="p">Trang cá nhân</span>
                  <span class="trans">></span>
                </a>
                <a href="#" class="sub-menu-link" @click="redirectToHistory">
                  <img src="../../assets/images/history.png" alt="" />
                  <span class="p">Lịch sử đặt sân</span>
                  <span class="trans">></span>
                </a>
                <a href="#" class="sub-menu-link" @click="logout">
                  <img src="../../assets/images/Logout.png" alt="" />
                  <span class="p">Logout</span>
                  <span class="trans">></span>
                </a>
              </div>
            </div>
          </div>
          <div
            v-else
            class="overlap-group phuc_nav nav-link"
            type="button "
            @click="redirectToLogin"
          >
            <div class="log_icon">
              <img src="../../assets/images/TAI KHOAN.png" alt="this is logo" />
            </div>
            <div class="ng-xu-t">Đăng <br />nhập</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import TinTC from '../items/TinTC.vue'
import flatpickr from 'flatpickr'
import 'flatpickr/dist/flatpickr.css'

export default {
  name: 'HeaderLoggin',
  name: 'UilSearchAlt',
  components: {
    TinTC
  },
  data() {
    return {
      district: [
        'Tất cả',
        'Quận 1',
        'Quận 3',
        'Quận 4',
        'Quận 5',
        'Quận 6',
        'Quận Tân Phú',
        'Quận Tân Bình',
        'Quận Bình Thạnh',
        'TP Thủ Đức'
      ],
      districtTemp: [],
      isMenuVisible: false, // Trạng thái của drop-down place menu
      isLoggedIn: false,
      isSubMenuOpen: false,
      wrapper: null,
      options: null,
      selectBtn: null,
      isActive: false,
      selectedDistrict: '',
      searchInp: null,
      mytime: null,
      selectedDayOfWeek: null
    }
  },

  created() {
    this.checkLoginStatus()
  },
  mounted() {
    this.wrapper = document.querySelector('.wrapper')
    this.options = document.querySelector('.options')
    this.districtTemp = this.district

    if (this.wrapper) {
      this.selectBtn = this.wrapper.querySelector('.select-btn')
      this.searchInp = this.wrapper.querySelector('.input')
    }

    const daysOfWeek = ['Chủ nhật', 'Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy']

    flatpickr('.datepick', {
      dateFormat: 'd/m/Y',
      onChange: (selectedDates) => {
        const date = selectedDates[0]
        this.selectedDayOfWeek = daysOfWeek[date.getDay()]
      }
    })
    // this.addDistinct();
  },

  methods: {
    redirectToLogin() {
      // Chuyển hướng đến trang Login
      window.location.href = '#/Login'
    },
    redirectToHomepage() {
      window.location.href = '#/home'
    },
    redirectToListOfCourt() {
      window.location.href = '#/ListOfCourt'
    },
    redirectToProfile() {
      window.location.href = '#/profile'
    },
    redirectToHistory() {
      window.location.href = '#/History'
    },
    checkLoginStatus() {
      const isLoggedIn = localStorage.getItem('loggedIn')
      this.isLoggedIn = isLoggedIn === 'true'
    },
    updateName(selectedLi) {
      // this.selectedDistrict = selectedLi;
      // this.togglePlaceMenu();
      localStorage.setItem('selectedDistrict', selectedLi)
      this.redirectToListOfCourt()
    },
    confirmExit(event) {
      localStorage.removeItem('selectedDistrict')
    },
    togglePlaceMenu() {
      this.isMenuVisible = !this.isMenuVisible // Đảo ngược trạng thái của menu}
    },
    handleKeyUp(event) {
      let arr = [] // creating empty array
      let searchedVal = event.target.value.toLowerCase()
      arr = this.district.filter((data) => {
        return data.toLowerCase().includes(searchedVal)
      })
      this.districtTemp = arr
    },
    toggleMenu() {
      this.isSubMenuOpen = !this.isSubMenuOpen
    },
    logout() {
      localStorage.removeItem('loggedIn')
      window.location.href = '#/home'
    }
  }
}
</script>

<style>
.header-loggin {
  /* Position the navbar at the top of the page */
  margin-top: 5px;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.5); /*Đổ bóng cho menu*/
  background-color: #0b0c10;
  border-radius: 30px;
  height: 115px;
  width: 100%;
  z-index: 1000;
}
.navbar {
  display: grid;
  grid-template-columns: 1fr 2fr 3fr 2fr 1fr;
  height: 115px;
  width: 100%;
  top: 50%;
  left: 50%;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.5); /*Đổ bóng cho menu*/
  background-color: #0b0c10;
  border-radius: 30px;
  transform: translate(-50%, -50%);
}
.grid-item1 {
  position: relative;
  margin-left: 2rem;
}
.grid-item2 {
  position: relative;
}
.header-loggin .SN-PHM {
  height: 17px !important;
  left: 15% !important;
  position: absolute !important;
  top: 50px !important;
  width: 100px !important;
}

.header-loggin .TIN-t-c-instance {
  margin-top: -15px;
  display: flex;
  justify-content: center; /* Căn giữa theo chiều ngang */
  align-items: center;
  color: #ffffffcc;
  font-size: 22px !important;
  font-weight: 700 !important;
  width: 120px !important;
  height: 50px;
}

.header-loggin .design-component-instance-node {
  text-align: center;
  display: flex;
  align-items: center;
  height: 50px !important;
  position: relative;
  width: 147px !important;
  color: #ffffff;
  /* margin: 0 33.33%; */
}

.header-loggin .SN-PHM-2 {
  position: relative;
  color: #ffffffcc;
  font-size: 20px !important;
  font-weight: 700 !important;
  text-align: center !important;
  white-space: unset !important;
  width: 147px !important;
}

.header-loggin .img {
  max-width: 115px;
}

.header-loggin .frame {
  background-color: #45a29e;
  position: relative;
  border-radius: 40px;
  height: 97px;
  width: 800px;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.uil--search-alt {
  color: #999;
  margin: 13px;
  position: absolute;
  display: inline-block;
  width: 1.5em;
  height: 1.5em;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='black' d='M21.07 16.83L19 14.71a3.08 3.08 0 0 0-3.4-.57l-.9-.9a7 7 0 1 0-1.41 1.41l.89.89a3 3 0 0 0 .53 3.46l2.12 2.12a3 3 0 0 0 4.24 0a3 3 0 0 0 0-4.29m-8.48-4.24a5 5 0 1 1 0-7.08a5 5 0 0 1 0 7.08m7.07 7.07a1 1 0 0 1-1.42 0l-2.12-2.12a1 1 0 0 1 0-1.42a1 1 0 0 1 1.42 0l2.12 2.12a1 1 0 0 1 0 1.42'/%3E%3C/svg%3E");
}

.content {
  display: none;
  width: 160%;
  padding: 20px;
  margin-top: 80px;
  margin-left: -10px;
  border-radius: 7px;
  background: #ffffff;
  color: #0b0c10;
}

.show {
  display: block;
}

.content .search {
  position: relative;
  display: flex;
}

.search input {
  width: 100%;
  height: 50px;
  font-size: 18px;
  padding-left: 40px;
}

.content .options {
  margin-top: 10px;
  padding-left: 0px;
  max-height: 250px;
  overflow-y: auto;
}

.options li {
  font-size: 21px;
  height: 50px;
  border-radius: 5px;
  display: flex;
  cursor: pointer;
  align-items: center;
}

.options::-webkit-scrollbar {
  width: 7px;
}
.options::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 25px;
}
.options::-webkit-scrollbar-thumb {
  background: #ccc;
  border-radius: 25px;
}
.options li:hover {
  background: #f2f2f2;
}

.header-loggin .frame-1 {
  color: #ffffff;
  height: 58px;
  position: relative;
  width: 150px;
  max-width: 150px;
}

.header-loggin .text-wrapper-2 {
  margin-left: 40px;
  font-family: 'Comfortaa', Helvetica;
  font-size: 20px;
  font-weight: 700;
  top: 50%; /* Đưa về giữa theo chiều dọc */
  transform: translateY(-50%); /* Dịch chuyển về giữa */
  white-space: normal;
  position: absolute;
  display: flex;
  align-items: center;
  width: 100%; /* Đảm bảo chiều rộng 100% để căn giữa */
}

.header-loggin .icon-location {
  height: 30px;
  left: 0;
  position: absolute;
  top: 16px;
  width: 30px;
}

.header-loggin .frame-2 {
  color: #ffffff;
  height: 58px;
  position: relative;
  width: 165px;
  display: flex;
  align-items: center;
}

.header-loggin .ch-nh-t {
  margin-left: 30%;
  font-family: 'Comfortaa', Helvetica;
  font-size: 20px;
  font-weight: 700;
  top: 50%; /* Đưa về giữa theo chiều dọc */
  transform: translateY(-50%);
  white-space: normal;
  position: absolute;
  display: flex;
  /* align-items: center; */
  width: 100%; /* Đảm bảo chiều rộng 100% để căn giữa */
  flex-direction: column;
}
.ch-nh-t div {
  margin-left: 10%;
}
.header-loggin .vector {
  height: 34px;
  left: 4px;
  position: relative;
  width: 30px;
}

.header-loggin .frame-3 {
  color: #ffffff;
  height: 58px;
  overflow: hidden;
  position: relative;
  width: 147px;
  display: flex;
}

.header-loggin .icon-clock {
  height: 37px;
  left: 0;
  position: relative;
  top: 11px;
  width: 37px;
}

.header-loggin .text-wrapper-3 {
  font-family: 'Comfortaa', Helvetica;
  font-size: 20px;
  font-weight: 700;
  left: 10px;
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  text-align: center;
  top: 19px;
  white-space: nowrap;
}

.header-loggin .group-wrapper {
  display: flex;
  align-items: center;
  height: 58px;
  position: relative;
  width: 150px;
}

.header-loggin .group {
  height: 64px;
  left: -13px;
  position: relative;
  top: -9px;
  width: 150px;
}

.header-loggin .overlap-group {
  color: #ffffffcc;
  display: flex;
  padding-left: 30px;
  align-items: center;
  border-radius: 18px;
  height: 84px;
  position: relative;
  width: 100%;
  cursor: pointer;
}

.header-loggin .ng-xu-t {
  font-family: 'Comfortaa', Helvetica;
  font-size: 20px;
  font-weight: 700;
  left: 10px;
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  text-align: justify;
}

.header-loggin .rectangle {
  border: 1px solid;
  border-color: #45a29e;
  /* #45a29e */
  border-radius: 18px;
  height: 84px;
  left: 0;
  position: absolute;
  top: 0;
  width: 125px;
}
.header-loggin .log_icon {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.header-loggin .TAI-KHOAN {
  background-image: url(https://c.animaapp.com/UGutMkT8/img/t-i-kho-n.svg);
  background-size: 100% 100%;
  height: 31px;
  left: 23px;
  position: absolute;
  top: 26px;
  width: 30px;
}

.phuc_nav {
  transition-duration: 0.4s;
  border-radius: 15px;
}

.phuc_nav:hover {
  background-color: #45a29e;
  color: mistyrose;
}

/* Info */
.sub-menu-wrap {
  position: absolute;
  top: 100%;
  right: 0px;
  width: 300px;
  max-height: 0px;
  float: left;
  overflow: hidden;
  transition: max-height 0.5s;
}
.sub-menu-wrap.open-menu {
  max-height: 400px;
}

.sub-menu {
  background: #45a29e;
  padding: 20px 20px 10px 20px;
  margin: 10px 0 10px 10px;
  border-radius: 10%;
  font-family: 'Comfortaa', Helvetica;
}
.user-info {
  display: flex;
  align-items: center;
}
.user-info h3 {
  font-weight: 600;
}
.user-info img {
  width: 40px;
  border-radius: 50%;
  margin-right: 15px;
}
.sub-menu hr {
  border: 0;
  height: 2px;
  width: 100%;
  background-color: black;
  margin: 10px 0 10px;
}

.sub-menu-link {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: white;
  margin: 12px 0;
  :hover {
    background-color: #ccc;
  }
}
.sub-menu-link .p {
  width: 100%;
  margin-top: none;
  font-size: 1.25em;
  transition: transform 0.5s;
}
.sub-menu-link img {
  width: 40px;
  background: #e5e5e5;
  border-radius: 50%;
  padding: 8px;
  margin-right: 15px;
}
.sub-menu-link span.trans {
  font-size: 22px;
  transition: transform 0.5s;
}
.sub-menu-link:hover span {
  transform: translateX(5px);
}
.sub-menu-link:hover .p {
  font-weight: 600;
  background: transparent;
}
.sub-menu-link:hover span.trans {
  background: transparent;
}
.datepick {
  background-color: #45a29e !important;
  width: 85%;
  border: none;
  color: #ffffff;
  outline: none;
  font-family: 'Comfortaa', Helvetica;
  font-size: 20px !important;
  font-weight: 700;
}
.datepick:hover {
  background-color: #45a29e;
  color: mistyrose;
}
.datepick::-webkit-calendar-picker-indicator {
  filter: invert(100%);
}
.datepick::placeholder {
  color: #ffffff;
}
.datepick:hover::placeholder {
  color: mistyrose;
}
</style>
