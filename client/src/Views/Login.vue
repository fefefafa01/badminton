<template>
    <div class="back_ground">
      <div class="container">
        <div class="login">
          <h2>CHÀO MỪNG ĐẾN VỚI BCB</h2>
          <h2>ĐĂNG NHẬP NGAY!</h2>
          <form @submit.prevent="login">
            <div class="form-group">
              <input 
                type="email" 
                placeholder="Số điện thoại/Email" 
                v-model="email" required />
              <br>
              <input 
                type="password" 
                placeholder="Mật khẩu" 
                v-model="password" required />
              <span @click="redirectToForgetPwd">Bạn quên mật khẩu?</span>
              <br>
              <button type="submit">ĐĂNG NHẬP</button>
            </div>
          </form>
          <br>
          <br>
          <span>BẠN CHƯA CÓ TÀI KHOẢN?</span>
          <a @click="redirectToRegister">ĐĂNG KÝ</a>
        </div>
      </div>
    </div>
  </template>
  
<script>
  import {defineComponent, ref } from 'vue';
  import axios from 'axios';
   
  export default defineComponent( {
    
    setup() {
      const options = {
        rewind: true,
        gap   : '1rem',
      };
      return { options };
    },
    
    data() {
        return {
            email: '',
            password: ''
        };
    },
    
    methods: {
      async login(){
        try {
          const response = await axios.post('http://localhost:5000/login', {
            email: this.email,
            password: this.password
          });
  
          // Handle response data as needed
          console.log(response.data);
          if (response.data.loggedIn) {
            window.location.assign("/home");
          }
        } catch (error) {
          // Handle error
          console.error(error);
        }
      },
      redirectToForgetPwd() {
        window.location.href = 'ForgetPwd';
      },
      redirectToRegister() {
        window.location.href = 'Register';
      }
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
    width: 200%;
  }

  .form-group input::placeholder {
    color: white;
  }

  .form-group span {
    width: 150%;
    display: flex;
    justify-content: flex-end;
    color: #45A29E;
    cursor: pointer;
  }

  .form-group button {
    background-color: #1F2833;
    color: white;
    border: solid 1px #45A29E;
    border-radius: 50px;
  }

  </style>
  