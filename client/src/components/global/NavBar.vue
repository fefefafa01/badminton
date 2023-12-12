<template>
  <div class="header-loggin ">
    <TinTC type="button" @click="redirectToHomepage" class="SN-PHM" divClassName="TIN-t-c-instance phuc_nav" text="Trang chủ" />
    <TinTC type="button" class="design-component-instance-node phuc_nav" divClassName="SN-PHM-2" text="Tham gia vào sân cầu lông" />
    <img
      class="img"
      alt="Img"
      src="https://c.animaapp.com/UGutMkT8/img/da6c9e2e3c8f4d8abaf5e7e4c325ee24--1--1-1@2x.png"
    />
    <div class="frame" type="button" @click="redirectToListOfCourt">
      <div class="div">
        <div class="text-wrapper-2">Quận 7</div>
        <img
          class="icon-location"
          alt="Icon location"
          src="https://c.animaapp.com/UGutMkT8/img/---icon--location--1@2x.png"
        />
      </div>
      <div class="frame-2">
        <div class="ch-nh-t">
          Chủ Nhật
          <br />
          29/10/2023
        </div>
        <div class="frame-2">
          <div class="ch-nh-t">
            Chủ Nhật
            <br />
            29/10/2023
          </div>
          <img class="vector" alt="Vector" src="https://c.animaapp.com/UGutMkT8/img/vector-1.svg" />
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
      <div class="group-wrapper">
        <div class="group">
          <div class="overlap-group nav-link phuc_nav" type="button " @click="redirectToLogin">
            <div class="log_icon"><img src="../../assets/images/TAI KHOAN.png" alt="this is logo" ></div>
            <div class="ng-xu-t">      
              Đăng <br>nhập
            </div>
            
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
  methods: {
      redirectToLogin() {
          // Chuyển hướng đến trang Login
          window.location.href = 'Login';
      },
      redirectToHomepage() {
        window.location.href = 'home'
      },
      redirectToListOfCourt() {
        window.location.href = 'ListOfCourt'
      },
  },
};
</script>

<style>
.header-loggin {/* Position the navbar at the top of the page */
  margin-top: 5px;
  display: block;
  box-shadow: 0px 2px 2px rgba(0,0,0,0.5); /*Đổ bóng cho menu*/
  position: fixed; /*Cho menu cố định 1 vị trí với top và left*/
  top: 0; /*Nằm trên cùng*/
  left: 0; /*Nằm sát bên trái*/
/* Set the navbar to fixed position */
  background-color: #0b0c10;
  border-radius: 30px;
  height: 115px;
  overflow: hidden;
  width: 100%;
  z-index: 100000; 
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
  left: 72% !important;
  position: absolute !important;
  top: 35px !important;
  width: 147px !important;
  color: #ffffff
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
  height: 114px;
  left: 28px;
  object-fit: cover;
  position: absolute;
  top: 1px;
  width: 115px;
}

.header-loggin .frame {
  background-color: #45a29e;
  border-radius: 40px;
  height: 97px;
  left: 30%;
  overflow: hidden;
  position: absolute;
  top: 9px;
  width: 518px;
}

.header-loggin .div {
  height: 58px;
  left: 22px;
  position: absolute;
  top: 17px;
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
  left: 165px;
  position: absolute;
  top: 17px;
  width: 165px;
}

.header-loggin .ch-nh-t {
  color: #ffffff;
  font-family: "Comfortaa", Helvetica;
  font-size: 20px;
  font-weight: 700;
  left: 48px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-align: center;
  top: 13px;
}

.header-loggin .vector {
  height: 34px;
  left: 4px;
  position: absolute;
  top: 14px;
  width: 30px;
}

.header-loggin .frame-3 {
  height: 58px;
  left: 353px;
  overflow: hidden;
  position: absolute;
  top: 17px;
  width: 147px;
}

.header-loggin .icon-clock {
  height: 37px;
  left: 0;
  position: absolute;
  top: 11px;
  width: 37px;
}

.header-loggin .text-wrapper-3 {
  color: #ffffff;
  font-family: "Comfortaa", Helvetica;
  font-size: 20px;
  font-weight: 700;
  left: 51px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-align: center;
  top: 19px;
  white-space: nowrap;
}

.header-loggin .group-wrapper {
  display :flex ;
  align-items: center;
  height: 58px;
  left: 90%; 
  
}

  .header-loggin {/* Position the navbar at the top of the page */
    margin-top: 5px;
    display: block;
    box-shadow: 0px 2px 2px rgba(0,0,0,0.5); /*Đổ bóng cho menu*/
    position: fixed; /*Cho menu cố định 1 vị trí với top và left*/
    top: 0; /*Nằm trên cùng*/
    left: 0; /*Nằm sát bên trái*/
 /* Set the navbar to fixed position */
    background-color: #0b0c10;
    border-radius: 30px;
    height: 115px;
    overflow: hidden;
    width: 100%;
    z-index: 100000; 
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
    left: 72% !important;
    position: absolute !important;
    top: 35px !important;
    width: 147px !important;
    color: #ffffff
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
    height: 114px;
    left: 28px;
    object-fit: cover;
    position: absolute;
    top: 1px;
    width: 115px;
  }
  
  .header-loggin .frame {
    background-color: #45a29e;
    border-radius: 40px;
    height: 97px;
    left: 30%;
    overflow: hidden;
    position: absolute;
    top: 9px;
    width: 518px;
  }
  
  .header-loggin .div {
    height: 58px;
    left: 22px;
    position: absolute;
    top: 17px;
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
    left: 165px;
    position: absolute;
    top: 17px;
    width: 165px;
  }
  
  .header-loggin .ch-nh-t {
    color: #ffffff;
    font-family: "Comfortaa", Helvetica;
    font-size: 20px;
    font-weight: 700;
    left: 48px;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    text-align: center;
    top: 13px;
  }
  
  .header-loggin .vector {
    height: 34px;
    left: 4px;
    position: absolute;
    top: 14px;
    width: 30px;
  }
  
  .header-loggin .frame-3 {
    height: 58px;
    left: 353px;
    overflow: hidden;
    position: absolute;
    top: 17px;
    width: 147px;
  }
  
  .header-loggin .icon-clock {
    height: 37px;
    left: 0;
    position: absolute;
    top: 11px;
    width: 37px;
  }
  
  .header-loggin .text-wrapper-3 {
    color: #ffffff;
    font-family: "Comfortaa", Helvetica;
    font-size: 20px;
    font-weight: 700;
    left: 51px;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    text-align: center;
    top: 19px;
    white-space: nowrap;
  }
  
  .header-loggin .group-wrapper {
    display :flex ;
    align-items: center;
    height: 58px;
    left: 90%; 
    
    position: absolute;
    top: 26px;
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
    padding-left: 20px;
    align-items: center;
    border-radius: 18px;
    height: 84px;
    position: relative;
    width: 150px;
  }
  
  .header-loggin .ng-xu-t {
    display: flex;
    padding-left: 25px;
    color: #ffffffcc;
    font-family: "Comfortaa", Helvetica;
    font-size: 20px;
    font-weight: 700;
    left: 42px;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    text-align: justify;
    top: 18px;
    width: 180px;
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
    padding-top: 22px;
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

  </style>