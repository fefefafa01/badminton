<template>
  <div class=" container1">
    <div class="slider">
      <Splide :options="options" aria-label="My Favorite Images">
        <SplideSlide v-for="data in notifData" :key="data.notification_id">
            <img :src=data.href :alt="`Sample ${data.notification_id}`">{{ console.log('data',data.href) }}
        </SplideSlide>
      </Splide>
    </div>
    
  </div>
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


 
</template>


<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import { defineComponent, ref, onMounted } from 'vue';
import axios from 'axios';


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
    const notifData = ref([]);

    onMounted(async () => {
    try {
      const response = await axios.get('http://localhost:5000/notif');
      notifData.value = response.data.notifData;
    } catch (error) {
      console.error(error);
    }
    });

    return { options, notifData };
},
});
</script>


<style lang="scss" scoped>
.container1{
    width: 100%;
    height: auto;
    padding-top: 160px;
    padding-bottom: 20px;
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
.BangTin{
    display: flex;
    color: white;
    width: 100%;
    height: auto;
    font-size:xx-large;
    justify-content: center; 
    flex-direction: column;
    align-items: center;
    ul{
        padding-left: 0;
    }

}

.ChuThich{
    display: flex;
    color: white;
    width: 100%;
    height: auto;
    font-size: large;
    justify-content: center; 
    font-style: italic;
}

</style>
