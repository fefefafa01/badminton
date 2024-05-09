<template>
  <footer class="pt-5 pb-4">
    <div class="container text-md-left">
      <div class="row text-md-left">
        <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
          <h5 class="text-uppercase font-weight-bold">Saigon Software</h5>
          <img src="@/assets/images/BCB logo.png" alt="this is logo" height="150" width="150" />
        </div>
        <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
          <h5 class="text-uppercase mb-4 font-weight-bold">HỖ TRỢ KHÁCH HÀNG</h5>
          <p class="footer-item">Hướng dẫn sử dụng</p>
          <p class="footer-item">Chính sách bảo mật thông tin</p>
        </div>
        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3 ">
          <h5 class="mb-4 font-weight-bold pe-auto footer-item" @click="redirectToAboutUs">VỀ CHÚNG TÔI</h5>
          <p class="footer-item">Sản phẩm</p>
          <p class="footer-item">Tin tức</p>
          <p class="footer-item">Hợp tác</p>
        </div>
        <div class="col-md-4 col-lg-4 col-xl-3 mx-auto mt-3 ">
          <h5 class="text-uppercase mb-4 font-weight-bold">LIÊN HỆ</h5>
          <p class="fas fa-home mr-3">268 Lý Thường Kiệt, Phường 14, Quận 10, TP. HCM, Việt Nam</p>
          <p class="fas fa-phone mr-3">02838328228</p>
          <p class="fas fa-envelope mr-3">pthanhtung412@gmail.com</p>
        </div>
      </div>
      <hr class="mb-4" />
      <div class="row align-content-center">
        <div class="col-md-7 col-lg-8">
          <p class="copyright">
            Copyright &copy; 2023 All Rights Reserved. <strong>BADMINTON COURT BOOKING</strong>
          </p>
        </div>
        <div class="col-md-5 col-lg-4">
          <div class="text-center text-md-right">
            <ul class="list-unstyled list-inline">
              <li class="list-inline-item">
                <a href="#"><i class="fab fa-facebook text-black" style="font-size: 23px"></i></a>
              </li>
              <li class="list-inline-item">
                <a href="#"><i class="fab fa-twitter text-black" style="font-size: 23px"></i></a>
              </li>
              <li class="list-inline-item">
                <a href="#"><i class="fab fa-youtube text-black" style="font-size: 23px"></i></a>
              </li>
              <li class="list-inline-item">
                <a href="#"
                  ><i class="fab fa-linkedin-in text-black" style="font-size: 23px"></i
                ></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
  import { defineComponent } from 'vue'
  export default defineComponent({
    methods: {
      redirectToAboutUs() {
        window.location.href = '#/aboutUs'
      }
    }
  })
</script>

<style lang="scss" scoped>
footer {
  background-color: #0b0c10;
  color: #ffffff;
}
.copyright {
  color: #45a29e;
}
.footer-item{
  cursor: pointer;
}
.footer-item:hover{
  color: #45a29e;
}
</style>
