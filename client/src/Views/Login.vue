<template>
    <div class="back_ground">
        <div class="container">
            <div class="login">
                <h2>CHÀO MỪNG ĐẾN VỚI BCB</h2>
                <h2>ĐĂNG NHẬP NGAY!</h2>
                <form @submit.prevent="login">
                    <div class="form-group">
                        <div class="input">
                            <input 
                            type="email" 
                            placeholder="Số điện thoại/Email" 
                            v-model="email" required />
                            <div v-if="loggedIn === false" class="error">
                                <p>Tên đăng nhập hoặc mật khẩu sai</p>
                            </div>
                        </div>
                        <div class="input">
                            <input 
                            type="password" 
                            placeholder="Mật khẩu" 
                            v-model="password" required />
                            <div v-if="loggedIn === false" class="error">
                                <p>Tên đăng nhập hoặc mật khẩu sai</p>
                            </div>
                            <span @click="redirectToForgetPwd">Bạn quên mật khẩu?</span>                            
                        </div>
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
            password: '',
            loggedIn: true
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
                localStorage.setItem('loggedIn', true);
                localStorage.setItem('user_data', response.data);
                window.location.assign("/home");
            }
            else{
                this.loggedIn = false;
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
        padding-top: 100px;
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

    form{
        width: 500px;
    }
    .form-group {
        width: 100%;
        display: flex;
        flex-direction: column;
        padding-top: 20px;
    }

    .input{
        position: relative;
        margin-bottom: 30px;
    }

    .input input {
        position: relative;
        align-self: center;
        background-color: #1F2833;
        border: none;
        outline: none;
        border-bottom: solid 1px white;
        width: 100%;
        color: white;
        font-size: 1.25em;
    }

    .input input::placeholder {
        color: white;
    }

    .input span {
        top: 100%;
        position: absolute;
        right: 0;
        color: #45A29E;
        cursor: pointer;
        font-size: 1.25em;
    }

    .error{
        font-family: "Comfortaa", Helvetica;
        position: absolute;
        top: 100%;
        color: red;
        font-size: 1.1em;
    }

    .form-group button {
        margin-top: 30px;
        background-color: #1F2833;
        color: white;
        border: solid 1px #45A29E;
        border-radius: 50px;
        height: 50px;
        font-size: 1.25em;
    }
    

  </style>
  