<template>
  <div class="back_ground">
    <NavBar />
    <div class="back_ground flex min-h-screen items-center justify-center">
      <div class="container">
        <div class="login">
          <h2>ĐẶT LẠI MẬT KHẨU</h2>
          <form @submit.prevent="resetPwd">
            <div class="form-group">
              <div class="input">
                <input
                  v-model="newPassword"
                  type="password"
                  placeholder="Vui lòng nhập mật khẩu mới"
                  required
                />
              </div>
              <div class="input">
                <input
                  v-model="confirmPassword"
                  type="password"
                  placeholder="Vui lòng nhập lại mật khẩu mới"
                  required
                />
                <span @click="redirectToForgetPwd">Bạn quên mật khẩu?</span>
              </div>
              <br />
              <br />
              <div v-if="loggedIn === false" class="error">
                <p>{{ status }}</p>
              </div>
              <div v-else class="infor-required">
                <p>Information required</p>
              </div>
              <button type="submit">Đổi mật khẩu</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <FooterBar />
  </div>
</template>

<script>
// import { Splide, SplideSlide } from '@splidejs/vue-splide';
import { defineComponent } from 'vue'
// import TinTC from "../components/items/TinTC.vue";
import NavBar from '@/components/global/NavBar.vue'
import FooterBar from '@/components/global/FooterBar.vue'
import axios from 'axios'
import { backend } from '@/ENV/index'

export default defineComponent({
  name: 'HeaderLoggin',
  components: {
    NavBar,
    FooterBar
  },
  // components: {
  //   TinTC,
  // },

  setup() {
    const options = {
      rewind: true,
      gap: '1rem'
    }
    return { options }
  },

  data() {
    return {
      // product: 'PC GVN Gaming AMD R5-5600X/ VGA RTX 3050',
      // accessory: 'RTX 4090 32GB Z790 1TB i9 14900K',
      // price: '19.190.000₫'
      email: window.localStorage.getItem('user_email'),
      status: '',
      newPassword: '',
      confirmPassword: '',
      loggedIn: true
    }
  },
  methods: {
    redirectToSucess() {
      window.location.href = '#/profile'
    },
    redirectToForgetPwd() {
      window.location.href = '#/ForgetPwd'
    },
    async resetPwd() {
      console.log(this.newPassword)
      console.log(this.confirmPassword)
      if (this.newPassword !== this.confirmPassword) {
        this.loggedIn = false
        this.status = 'Mật khẩu không trùng khớp'
        console.log(this.status)
      } else {
        const response = await axios.post(backend + 'login/resetPwd', {
          email: this.email,
          password: this.newPassword
        })
        if (response.data.status === 'Successful') {
          window.location.assign('#/profile')
        } else {
          this.loggedIn = false
          this.status = response.data.status
        }
      }
    }
  }
})
</script>

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
  font-size: 1.5em;
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
  padding-left: 0;
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

input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
textarea:-webkit-autofill,
textarea:-webkit-autofill:hover,
textarea:-webkit-autofill:focus,
select:-webkit-autofill,
select:-webkit-autofill:hover,
select:-webkit-autofill:focus {
  border-bottom: solid 1px white;
  -webkit-text-fill-color: white;
  -webkit-box-shadow: 0 0 0px 1000px #1f2833 inset;
  transition: background-color 5000s ease-in-out 0s;
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

.infor-required {
  font-family: 'Comfortaa', Helvetica;
  top: 100%;
  color: white;
  font-size: 1.1em;
  align-self: center;
}

.form-group button {
  background-color: #1f2833;
  color: white;
  border: solid 1px #45a29e;
  border-radius: 50px;
  height: 50px;
  font-size: 1.25em;
}
</style>
