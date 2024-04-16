<script setup>
import { useDarkModeStore } from '@/stores/darkMode'
import axios from 'axios'
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import NavBar from '@/components/global/NavBar.vue'
import FooterBar from '@/components/global/FooterBar.vue'

const style = ['white', 'black']

// const options = {
//     rewind: true,
//     gap: '1rem'
// };

const darkModeStore = useDarkModeStore()
darkModeStore.set(false)

// Router instance
const router = useRouter()

// Khai báo dữ liệu
const email = ref('')
const password = ref('')
const loggedIn = ref(true)

// Khai báo phương thức handleStyleChange
const handleStyleChange = (slug) => {
  document.documentElement.classList.forEach((token) => {
    if (token.indexOf('style') === 0) {
      document.documentElement.classList.replace(token, `style-${slug}`)
    }
  })

  router.push('/admin/dashboard')
}

// Khai báo phương thức login
const login = async () => {
  try {
    const response = await axios.post('http://localhost:5000/login', {
      email: email.value,
      password: password.value
    })

    // Xử lý dữ liệu phản hồi khi cần
    console.log(response.data)
    if (response.data.loggedIn) {
      localStorage.setItem('loggedIn', true)
      localStorage.setItem('user_data', response.data)
      window.location.assign('/home')
    } else {
      loggedIn.value = false
    }
  } catch (error) {
    // Xử lý lỗi
    console.error(error)
  }
}

// Khai báo các phương thức điều hướng
const redirectToForgetPwd = () => {
  window.location.href = '#/ForgetPwd'
}

const redirectToRegister = () => {
  window.location.href = '#/Register'
}

const redirectToAdmin = () => {
  handleStyleChange(style)
}
</script>

<template>
  <div class="back_ground">
    <NavBar />
    <div class="back_ground flex min-h-screen items-center justify-center">
      <!-- for login site -->
      <div class="container">
        <div class="login">
          <h2>CHÀO MỪNG ĐẾN VỚI BCB</h2>
          <h2>ĐĂNG NHẬP NGAY!</h2>
          <form @submit.prevent="login">
            <div class="form-group">
              <div class="input">
                <input v-model="email" type="email" placeholder="Số điện thoại/Email" required />
                <div v-if="loggedIn === false" class="error">
                  <p>Tên đăng nhập hoặc mật khẩu sai</p>
                </div>
              </div>
              <div class="input">
                <input v-model="password" type="password" placeholder="Mật khẩu" required />
                <div v-if="loggedIn === false" class="error">
                  <p>Tên đăng nhập hoặc mật khẩu sai</p>
                </div>
                <span @click="redirectToForgetPwd">Bạn quên mật khẩu?</span>
              </div>
              <button type="submit">ĐĂNG NHẬP</button>
            </div>
          </form>
          <br />
          <br />
          <a @click="redirectToAdmin">Admin</a>
          <br />
          <br />
          <span>BẠN CHƯA CÓ TÀI KHOẢN?</span>
          <a @click="redirectToRegister">ĐĂNG KÝ</a>
        </div>
      </div>
    </div>
    <FooterBar />
  </div>
</template>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: auto;
  padding-top: 100px;
  padding-bottom: 70px;
  font-family: 'Comfortaa', Helvetica;
  a {
    color: #45a29e;
    cursor: pointer;
  }
}

.back_ground {
  background-color: #1f2833;
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
  color: #45a29e;
}

form {
  width: 500px;
}
.form-group {
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 20px;
}

.input {
  position: relative;
  margin-bottom: 30px;
}

.input input {
  position: relative;
  align-self: center;
  background-color: #1f2833;
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
  color: #45a29e;
  cursor: pointer;
  font-size: 1.25em;
}

.error {
  font-family: 'Comfortaa', Helvetica;
  position: absolute;
  top: 100%;
  color: red;
  font-size: 1.1em;
}

.form-group button {
  margin-top: 30px;
  background-color: #1f2833;
  color: white;
  border: solid 1px #45a29e;
  border-radius: 50px;
  height: 50px;
  font-size: 1.25em;
}
</style>
