<template>
  <div class="back_ground">
    <NavBar />
    <div class="back_ground flex min-h-screen items-center justify-center">
      <div class="container">
        <div class="login">
          <h2>CHÀO MỪNG ĐẾN VỚI BK-ECOMERCIAL!</h2>
          <!-- <h2>ECOMERCIAL!</h2> -->
          <br />
          <span>Đổi mật khẩu thành công</span>
          <br />
          <br />
          <button @click="redirectToHomepage">Quay lại trang chủ</button>
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
const redirectToHomepage = () => {
  window.location.href = '#/home'
}
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: auto;
  font-family: 'Comfortaa', Helvetica;
}

.back_ground {
  background-color: #1f2833;
}

.login {
  color: white;
  display: flex;
  align-items: center;
  flex-direction: column;
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
  font-size: 2em;
}

.login button {
  background-color: #1f2833;
  color: white;
  border: solid 1px #45a29e;
  border-radius: 50px;
  width: 200px;
  height: 50px;
  font-size: 1.2em;
}
</style>
