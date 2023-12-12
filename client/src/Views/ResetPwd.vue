<template>
    <div class="back_ground">
    <div class=" container">
        <div class="login">
            <h2>ĐẶT LẠI MẬT KHẨU</h2>
            <form>
                <div class="form-group">
                    <input type="email" placeholder="・・・・・" v-model="email" required />
                    <span>Mật khẩu tối thiểu 8 ký tự bao gồm cả chữ và số</span>
                    <br>
                    <input type="email" placeholder="・・・・・" v-model="email" required />
                    <br>
                    <br>
                    <button @click="redirectToLogin">HOÀN THÀNH</button>
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
        redirectToLogin() {
            window.location.href = 'Login';
        },
        
    },



    
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
        cursor: pointer;
    }
  }
  
  .back_ground{
    background-color: #1F2833
  }

  .login {
    width: 100%;
    height: 100%;
    color: white;
    display: flex;
    align-items: center;
    flex-direction: column;
    font-size: 15px;
  }

  .login h2 {
    color: #45A29E;
  }

  .form-group {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding-top: 15%;
  }

  .form-group input {
    align-self: center;
    background-color: #1F2833;
    border: none;
    border-bottom: solid 1px white;
    width: 150%;
  }

  .form-group input::placeholder {
    color: white;
  }

  .form-group span {
    width: 125%;
    display: flex;
    justify-content: flex-end;
    color: white;
    cursor: pointer;
  }

  .form-group button {
    background-color: #1F2833;
    color: white;
    border: solid 1px #45A29E;
    border-radius: 50px;
  }

  </style>
  