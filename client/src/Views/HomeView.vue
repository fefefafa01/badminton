<template>
    <div class=" container1">
        <div class="slider">
        <Splide :options="options" aria-label="My Favorite Images">
            <SplideSlide v-for="data in notifData" :key="data.notification_id">
                <img :src=data.href :alt="`Sample ${data.notification_id}`">
            </SplideSlide>
        </Splide>
        </div>
        
    </div>    
    <div class ="BangTin">
        <p><strong>Bảng Tin</strong></p>
        <div class="item">
            <ul v-for="(group, index) in slicedBangTinData" :key="index" class="sampleList">
                <div v-for="id in group" :key="id.bangtin_id" class="sample">
                    <div class="sampleGroup">
                        <div class="sampleText">
                            <p>{{ id.description }}</p>
                        </div>
                        <img :src="id.path" :alt="`Sample ${id.bantin_id}`" class="sampleImg">
                    </div>
                </div> 
            </ul>
        </div>
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
    const bangTinData = ref([]);
    const slicedBangTinData = ref([]);

    onMounted(async () => {
    try {
        const notif = await axios.get('http://localhost:5000/notif');
        notifData.value = notif.data.notifData;

        const bangTin = await axios.get('http://localhost:5000/bangtin');
        bangTinData.value = bangTin.data.bangTinData;
        console.log(bangTinData);

        const slicedData = [];
        for (let i = 0; i < bangTinData.value.length; i += 3) {
            slicedData.push(bangTinData.value.slice(i, i + 3));
        }
        slicedBangTinData.value = slicedData;
        console.log(slicedBangTinData);
    } catch (error) {
      console.error(error);
    }
    });

    return { options, notifData, slicedBangTinData };
},
});
</script>


<style lang="scss" scoped>
.container1{
    width: 100%;
    height: auto;
    padding-top: 150px;
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
    .item{
        width: 100%;
    }
    ul.sampleList{
        display: flex;
        align-items: center;
        flex-wrap: nowrap;
        flex-direction: row;
        justify-content: space-around;
        .sample{
            position: relative;
            height: 320px;
            width: 260px;
            text-align: center;
            .sampleGroup{
                display: flex;
                height: 80%;
                width: 100%;
                flex-direction: column-reverse;
                flex-wrap: nowrap;
                align-items: center;
                .sampleText{
                    display: flex;
                    flex-direction: column-reverse;
                    flex-wrap: nowrap;
                    justify-content: flex-start;
                    background-color: #e2e2e2;
                    height: 80%;
                    width: 100%;
                    color: #000;
                    font-size: 1.2rem;
                    font-family: 'Comfortaa';
                    position:relative;
                    z-index: 0;
                }
            }
            .sampleImg{
                    scale: 90%;
                    position: absolute;
                    z-index: 1;
                    top: 0;
            }
        }
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
