<template>
    <div class="header-loggin">
        <div type="button" @click="redirectToHomepage" class="grid-item1">
            <img
            class="img"
            alt="Img"
            src="https://c.animaapp.com/UGutMkT8/img/da6c9e2e3c8f4d8abaf5e7e4c325ee24--1--1-1@2x.png"
            />
        </div>
        
        
        <TinTC type="button" @click="redirectToHomepage" class="grid-item2" divClassName="TIN-t-c-instance phuc_nav" text="Trang chủ" />
        
        <div class="frame grid-item3" type="button" @click="redirectToListOfCourt">
            <div class="div">
                <div class="text-wrapper-2">Quận 7</div>
                <img
                class="icon-location"
                alt="Icon location"
                src="https://c.animaapp.com/UGutMkT8/img/---icon--location--1@2x.png"
                />
                
            </div>
            <div class="frame-2">
                <img class="vector" alt="Vector" src="https://c.animaapp.com/UGutMkT8/img/vector-1.svg" />
                <div class="ch-nh-t">
                Chủ Nhật
                <br />
                29/10/2023
                </div>
            </div>
            <div class="frame-3">
                <img
                class="icon-clock"
                alt="Icon clock"
                src="https://c.animaapp.com/UGutMkT8/img/---icon--clock--1@2x.png"
                />
                <div class="text-wrapper-3">7:00 - 9:00</div>
            </div>
            
            
        </div>
        <TinTC type="button" class="design-component-instance-node phuc_nav" divClassName="SN-PHM-2" text="Tham gia vào sân cầu lông" />
        <div class="group-wrapper">
            <div class="group">
                <div v-if="isLoggedIn" class="overlap-group nav-link phuc_nav" type="button" @click="toggleMenu">
                    <div class="log_icon"><img src="../../assets/images/TAI KHOAN.png" alt="this is logo"  ></div>
                    <div class="ng-xu-t"> 
                        Cá <br/>nhân
                    </div>  
                    <!-- dropdown -->
                    <div :class="['sub-menu-wrap', { 'open-menu': isSubMenuOpen }]" id="subMenu">
                        <div class="sub-menu">
                            <div class="user-info">
                                <img src="../../assets/images/TAI KHOAN.png" alt="this is logo" >
                                <h3>Khoa</h3>
                            </div>
                            <hr>

                            <a href="#" class="sub-menu-link">
                                <img src="../../assets/images/TAI KHOAN.png" alt="">
                                <span class="p">Edit Profile</span>
                                <span class="trans">></span>
                            </a>
                            <a href="#" class="sub-menu-link">
                                <img src="../../assets/images/TAI KHOAN.png" alt="">
                                <span class="p">Edit Profile</span>
                                <span class="trans">></span>
                            </a>
                            <a href="#" class="sub-menu-link">
                                <img src="../../assets/images/TAI KHOAN.png" alt="">
                                <span class="p">Edit Profile</span>
                                <span class="trans">></span>
                            </a>
                            <a href="#" class="sub-menu-link" @click="logout">
                                <img src="../../assets/images/TAI KHOAN.png" alt="">
                                <span class="p">Logout</span>
                                <span class="trans">></span>
                            </a>
                        </div>
                    </div>
                    
                </div>
                <div v-else class="overlap-group nav-link phuc_nav" type="button " @click="redirectToLogin">
                    <div class="log_icon"><img src="../../assets/images/TAI KHOAN.png" alt="this is logo" ></div>
                    <div class="ng-xu-t"> 
                        Đăng <br/>nhập
                    </div>
                </div>
            </div>
        </div>
    </div>

    
</template>

<script>
import TinTC from "../items/TinTC.vue";

export default {
    name: "HeaderLoggin",
    components: {
        TinTC,
    },
    data() {
        return {
            isLoggedIn: false,
            isSubMenuOpen: false,
        }
    },

    created() {
        this.checkLoginStatus();
    },

    methods: {
        redirectToLogin() {
            // Chuyển hướng đến trang Login
            window.location.href = 'Login';
        },
        redirectToHomepage() {
            window.location.href = 'home';
        },
        redirectToListOfCourt() {
            window.location.href = 'ListOfCourt';
        },
        checkLoginStatus() {
            const isLoggedIn = localStorage.getItem('loggedIn');
            this.isLoggedIn = isLoggedIn === 'true';
        },
        toggleMenu() {
            this.isSubMenuOpen = !this.isSubMenuOpen;
        },
        logout() {
            localStorage.removeItem('loggedIn');
            window.location.href = 'home';
        }
    },
};

</script>

<style>
.header-loggin {/* Position the navbar at the top of the page */
    display: grid;
    grid-template-columns: 1fr 2fr 3fr 2fr 1fr;
    align-items: center;
    margin-top: 5px;
    /* display: block; */
    box-shadow: 0px 2px 2px rgba(0,0,0,0.5); /*Đổ bóng cho menu*/
    /* position: fixed; Cho menu cố định 1 vị trí với top và left */
    /* top: 0; Nằm trên cùng
    left: 0; Nằm sát bên trái */
    /* Set the navbar to fixed position */
    background-color: #0b0c10;
    border-radius: 30px;
    height: 115px;
    /* overflow: hidden; */
    width: 100%;
    /* z-index: 100000;  */
}

.header-loggin .SN-PHM {
  height: 17px !important;
  left: 15%!important;
  position: absolute !important;
  top: 50px !important;
  width: 100px !important;
}

.header-loggin .TIN-t-c-instance {
  margin-top:-15px ;
  display: flex;
  justify-content: center; /* Căn giữa theo chiều ngang */
  align-items: center;
  color: #ffffffcc !important;
  font-size: 22px !important;
  font-weight: 700 !important;
  width: 120px !important;
  height: 50px;
}

.header-loggin .design-component-instance-node {
  text-align: center;
  align-items: center;
  height: 50px !important;
  position: relative;
  width: 147px !important;
  color: #ffffff;
  margin: 0 33.33%
}

.header-loggin .SN-PHM-2 {
  color: #ffffffcc !important;
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
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
}

.header-loggin .div {
  height: 58px;
  left: 22px;
  position: relative;
  width: 129px;
}

.header-loggin .text-wrapper-2 {
  color: #ffffff;
  font-family: "Comfortaa", Helvetica;
  font-size: 20px;
  font-weight: 700;
  left: 44px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-align: center;
  top: 19px;
  white-space: nowrap;
}

.header-loggin .icon-location {
  height: 30px;
  left: 0;
  position: absolute;
  top: 16px;
  width: 30px;
}

.header-loggin .frame-2 {
  height: 58px;
  position: relative;
  width: 165px;
  display: flex;
}

.header-loggin .ch-nh-t {
  color: #ffffff;
  font-family: "Comfortaa", Helvetica;
  font-size: 20px;
  font-weight: 700;
  left: 20px;
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  text-align: center;
  top: 10px;
}

.header-loggin .vector {
  height: 34px;
  left: 4px;
  position: relative;
  top: 14px;
  width: 30px;
}

.header-loggin .frame-3 {
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
  color: #ffffff;
  font-family: "Comfortaa", Helvetica;
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
  display :flex ;
  align-items: center;
  height: 58px;
  position: relative;
  width: 150px;
  margin: 0 33.33%;
}

.header-loggin .group {
 
  height: 64px;
  left: -13px;
  position: relative;
  top: -9px;
  width: 150px;
}

.header-loggin .overlap-group {
    display: flex;
    padding-left: 20px;
    align-items: center;
    border-radius: 18px;
    height: 84px;
    position: relative;
    width: 100%;
    cursor: pointer;
}

.header-loggin .ng-xu-t {
  color: #ffffffcc;
  font-family: "Comfortaa", Helvetica;
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
  border-radius: 18px;
  height: 84px;
  left: 0;
  position: absolute;
  top: 0;
  width: 125px;
}
.header-loggin .log_icon{
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
  color: black;
}

/* Info */
.sub-menu-wrap{
    position: absolute;
    top: 100%;
    left: 0px;
    width: 250px;  
    max-height: 0px;
    float: left;
    overflow: hidden;
    transition: max-height 0.5s;
}
.sub-menu-wrap.open-menu{
    max-height: 400px;
}

.sub-menu{
    background: #45a29e;
    padding: 20px;
    margin: 10px 10px 10px 0;
    border-radius: 10%;
}
.user-info{
    display: flex;
    align-items: center;
}
.user-info h3{
    font-weight: 500;
}
.user-info img{
    width: 60px;
    border-radius: 50%;
    margin-right: 15px;
}
.sub-menu hr{
    border: 0;
    height: 1px;
    width: 100%;
    background-color: #ccc;
    margin: 15px 0 10px;
    
}
.sub-menu-link{
    display: flex;
    align-items: center;
    text-decoration: none;
    color: white;
    margin: 12px 0;
}
.sub-menu-link .p{
    width: 100%;
    margin-top: none;
}
.sub-menu-link img{
    width: 40px;
    background: #e5e5e5;
    border-radius: 50%;
    padding: 8px;
    margin-right: 15px;
}
.sub-menu-link span.trans{
    font-size: 22px;
    transition: transform 0.5s;
}
.sub-menu-link:hover span{
    transform: translateX(5px);
}
.sub-menu-link:hover p{
    font-weight: 600;
}

</style>