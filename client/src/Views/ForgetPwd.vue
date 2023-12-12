<template>
    <div class="back_ground">
    <div class=" container">
        <div class="forgetpwd">
            <h2>BẠN QUÊN MẬT KHẨU?</h2>
            <a>*Lựa chọn phương thức xác minh</a>
            <form>
              <span>
                <input type="radio" id="sdt" name="check" value="sđt">
                <label for="sdt">Số điện thoại</label> <br>
                <input type="radio" id="mail" name="check" value="mail">
                <label for="mail">Email</label> <br>
              </span>
              <div class="form-group">
                <div>
                  <input type="email" placeholder="Vui lòng nhập số điện thoại/email" v-model="email" required />
                  <p>Gửi</p>
                </div>
                <br>
                <div>
                  <input type="email" placeholder="Vui lòng nhập mã xác minh" v-model="email" required />
                  <p>Xác minh</p>
                </div>
                <br>
                <br>
                <button @click="redirectToResetPwd">TIẾP TỤC</button>
              </div>
            </form>
        </div>
    </div>
    </div>
  
   
  </template>
  
  
  <script>
  import { Splide, SplideSlide } from '@splidejs/vue-splide';
  import { defineComponent } from 'vue';
  import TinTC from "../components/items/TinTC.vue";
  
  
  export default defineComponent( {
    components: {
      Splide,
      SplideSlide,
    },
  
  
    setup() {
      const options = {
        rewind: true,
        gap   : '1rem',
      };
      return { options };
    },
  
    data() {
      return {
        product: 'PC GVN Gaming AMD R5-5600X/ VGA RTX 3050',
        accessory: 'RTX 4090 32GB Z790 1TB i9 14900K',
        price: '19.190.000₫'
      };
    },

    name: "HeaderLoggin",
    components: {
      TinTC,
    },
    methods: {
        redirectToResetPwd() {
            window.location.href = 'ResetPwd';
        },
    }
  } );
  
  
  
  </script>
  
  
  <style lang="scss" scoped>
  .container{
    width: 100%;
    height: auto;
    padding-top: 250px;
    padding-bottom: 70px;
    font-family: "Comfortaa", Helvetica;
    a {
        color: #45A29E;
    }
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
  
  .back_ground{
    background-color: #1F2833
  }

  .forgetpwd {
    width: max-content;
    height: 100%;
    color: white;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    font-size: 15px;
    align-self: center;
    margin-left: -5%;
        h2 {
            color: #45A29E;
        }
        a {
            color: white;
        }
        span {
          width: 100%;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          padding-top: 20px;
          font-size: larger;
          color: #45A29E;
        }
        
  }

  .form-group {
    width: 200%;
    display: flex;
    flex-direction: column;
    padding-top: 15%;
    align-content: center;
  }

  .form-group div {
    display: flex;
    flex-direction: row;
    input {
      background-color: #1F2833;
      border: none;
      border-bottom: solid 1px white;
      width: 60%;
    }
    p {
      width: 20%;
      margin-bottom: -0px;
      border-bottom: solid 1px white;
      display: flex;
      justify-content: flex-end;
      color: #45A29E;
      cursor: pointer;
    }
  }
  .form-group{
    display: flex;
    flex-direction: column;
  } 

  .form-group input::placeholder {
    color: white;
  }

  .form-group span {
    width: 150%;
    display: flex;
    justify-content: flex-end;
    color: #45A29E;
  }

  .form-group button {
    background-color: #1F2833;
    color: white;
    border: solid 1px #45A29E;
    border-radius: 50px;
    width: 50%;
    align-self: center;
    margin-left: -20%;
  }

  </style>
  