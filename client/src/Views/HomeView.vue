<template>
<<<<<<< HEAD
  <div class=" container1">
=======
  <div class="back_ground">
  <div class=" container">
>>>>>>> 21dfdcabef97bbc35df03c2f6bc49e0fbe49d842
    <div class="slider">
      <Splide :options="options" aria-label="My Favorite Images">
        <SplideSlide>
          <img src="../assets/images/slider/caulong-2-28620.png" alt="Sample 1">
        </SplideSlide>
        <SplideSlide>
          <img src="../assets/images/slider/khai truong VNB Thuan An.jpg" alt="Sample 2">
        </SplideSlide>
        <SplideSlide>
          <img src="../assets/images/slider/Minigame-Mừng-ngày-8-tháng-3-1.jpg" alt="Sample 3">
        </SplideSlide>
        <SplideSlide>
          <img src="../assets/images/slider/LOG_7134-scaled.jpg" alt="Sample 4">
        </SplideSlide>
      </Splide>
    </div>
  </div>
<<<<<<< HEAD
  <div class ="BangTin">
        <p><strong>Bảng Tin</strong></p>
    </div>
    <div class ="ChuThich">
        <p>Cập nhập thông tin về các sân cầu lông, các khuyến mãi và những sự kiện nổi bật</p>
    </div>
<!-- Danh sach quang cao -->
<div class="container">
  <div class="row">
    <div class="col">
      1 of 2
    </div>
    <div class="col">
      2 of 2
    </div>
  </div>
  <div class="row">
    <div class="col">
      1 of 3
    </div>
    <div class="col">
      2 of 3
    </div>
    <div class="col">
      3 of 3
    </div>
  </div>
</div>

=======
  </div>
>>>>>>> 21dfdcabef97bbc35df03c2f6bc49e0fbe49d842

 
</template>


<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import { defineComponent } from 'vue';


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
  }
} );



</script>


<style lang="scss" scoped>
.container{
  
  width: 100%;
  height: auto;
  padding-top: 180px;
  padding-bottom: 200px;
}
.slider{
  width: 100%;
  height: 500px;
}
.splide__slide img{
  height:500px;
  object-fit: cover;
  display: block;
  width: 100%;
}
.newProduct{
  width: 130px;
  background-color: rgb(2, 154, 2);
  color: white;
  border-radius: 10px;
  text-align: center;
  font-weight: bold;
}
.nameOfProduct{
  font-weight: bold;
  padding-top: 5px;
  padding-bottom: 5px;
}
.accessoryOfProduct{
  background-color:rgb(166, 166, 166);
}
.priceOfProduct{
  color:red;
  font-size:larger;
  font-weight: bold;
}

<<<<<<< HEAD
}

.ChuThich{
  
  display: flex;
  color: white;
  width: 100%;
  height: auto;
  font-size:large;
  justify-content: center; 
  font-style: italic;
}

=======
.back_ground{
  background-color: #1F2833
}
>>>>>>> 21dfdcabef97bbc35df03c2f6bc49e0fbe49d842
</style>
