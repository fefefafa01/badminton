<template>
  <div class="back_ground">
    <NavBar />
    <div class="back_ground flex min-h-screen items-center justify-center">
      <div class="container">
        <div class="login">
          <h2>CHÀO MỪNG ĐẾN VỚI BK-</h2>
          <h2>ECOMERCIAL!</h2>
          <br />
          <span>Tài khoản của bạn đã được đăng ký thành công</span>
          <br />
          <div>VUI LÒNG ĐĂNG NHẬP ĐỂ TIẾP TỤC</div>
          <br />
          <button @click="redirectToLogin">ĐĂNG NHẬP</button>
        </div>
      </div>
    </div>
    <FooterBar />
  </div>
</template>

<!-- <script>
// import { Splide, SplideSlide } from '@splidejs/vue-splide';
import { defineComponent } from 'vue'
// import TinTC from "../components/items/TinTC.vue";

export default defineComponent({
  name: 'HeaderLoggin',
  // components: {
  //   Splide,
  //   SplideSlide,
  // },
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
      product: 'PC GVN Gaming AMD R5-5600X/ VGA RTX 3050',
      accessory: 'RTX 4090 32GB Z790 1TB i9 14900K',
      price: '19.190.000₫'
    }
  },
  methods: {
    redirectToLogin() {
      window.location.href = '#/Login'
    }
  }
})
</script> -->

<script setup>
import NavBar from '@/components/global/NavBar.vue'
import FooterBar from '@/components/global/FooterBar.vue'

// Hàm điều hướng đến trang đăng nhập
const redirectToLogin = () => {
  window.location.href = '#/Login'
}
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: auto;
  padding-top: 250px;
  padding-bottom: 70px;
  font-family: 'Comfortaa', Helvetica;
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
  span {
    font-size: 130%;
  }
  div {
    font-size: 130%;
    color: #45a29e;
  }
}

.login h2 {
  color: #45a29e;
}

.login button {
  background-color: #1f2833;
  color: white;
  border: solid 1px #45a29e;
  border-radius: 50px;
  font-size: 100%;
}
</style>
