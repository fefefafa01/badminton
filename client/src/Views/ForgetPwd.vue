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
                <div class="input">
                  <input type="email" placeholder="Vui lòng nhập số điện thoại/email" v-model="email" required />
                </div>
                <br>
                <div class="input">
                  <input type="password" placeholder="Vui lòng nhập mật khẩu mới" v-model="email" required />
                </div>
                <br>
                <div class="input">
                    <input type="password" placeholder="Vui lòng nhập lại mật khẩu mới" v-model="email" required />
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
    padding-top: 100px;
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
    align-self: center;
    margin-left: -5%;
        h2 {
            color: #45A29E;
        }
        a {
            color: white;
            font-size: 1.25em;
        }
        span {
          width: 100%;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          padding-top: 20px;
          color: #45A29E;
          font-size: 1.25em;
        }
        
  }

  .form-group {
    width: 200%;
    display: flex;
    flex-direction: column;
    padding-top: 20px;
    align-content: center;
  }

  .form-group div {
    display: flex;
    flex-direction: row;
    input {
        color: white;
        background-color: #1F2833;
        border: none;
        border-bottom: solid 1px white;
        outline: none;
        width: 60%;
        font-size: 1.25em;
    }

    p {
      width: 20%;
      margin-bottom: -0px;
      border-bottom: solid 1px white;
      display: flex;
      justify-content: flex-end;
      color: #45A29E;
      cursor: pointer;
      font-size: 1.25em;
    }
    p:hover {
        text-decoration: underline;
    }
    .input{
        width: 100%;
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
    height: 50px;
    font-size: 1.25em;
  }

  </style>
  