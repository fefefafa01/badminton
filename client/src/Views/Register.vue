<template>
    <div class="back_ground">
    <div class=" container">
        <div class="login">
            <h2>CHÀO MỪNG ĐẾN VỚI BCB</h2>
            <h2>ĐĂNG KÝ NGAY!</h2>
            <form @submit.prevent = "register">
                <div class="form-group">
                    <input type="text" placeholder="Họ và tên" v-model="name" required/>
                    <br>
                    <input type="email" placeholder="Số điện thoại/Email" v-model="email" required />
                    <br>
                    <input type="password" placeholder="Mật khẩu" v-model="password" required />
                    <br>
                    <input type="password" placeholder="Nhập lại mật khẩu" v-model="con_password" required />
                    <br>
                    <button type = "submit">ĐĂNG KÝ</button>
                </div>
            </form>
            <br>
            <br>
            <span>Bằng việc đăng ký, bạn đã đồng ý với Cocoon về</span>
            <span>
                <p>Điều khoản dịch vụ</p>
                <a>và</a>
                <p>Chính sách bảo mật </p>
            </span>
            <span>BẠN ĐÃ CÓ TÀI KHOẢN?</span>
            <a @click="redirectToLogin">ĐĂNG NHẬP</a>
        </div>
    </div>
    </div>
</template>
  
  
<script>
import { defineComponent } from 'vue';
import axios from "axios";

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
            name: "",
            email: "",
            password: "",
        };
    },

    methods: {
        async register() {
            try {
                const response = await axios.post('http://localhost:5000/register', {
                    name: this.name,
                    email: this.email,
                    password: this.password
                })
                console.log(response.data);
                if (response.data.registered){
                    window.location.assign("/Success");
                }
            } catch (error) {
                console.error(error);
            }
        },
        redirectToLogin() {
            window.location.href = 'Login';
        },
        redirectToSuccess() {
            window.location.href = 'Success';
        },
    },
});
  
  
   
  
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
    span {
        display: flex;
        flex-direction: row;
        gap: 5px;
        font-size: 1.25em;
        p {
            color: red;
            cursor: pointer;
        }
        a {
            color: white;
            cursor: auto;
        }
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
    outline: none;
    border-bottom: solid 1px white;
    width: 200%;
    font-size: 1.25em;
    color: white;
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
    height: 50px;
    font-size: 1.25em;
  }

  </style>
  