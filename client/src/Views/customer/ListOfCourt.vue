<template>
  <div class="back_ground">
    <NavBar />
    <div>
      <div class="title">
        <span style="font-size: 40px">Danh sách sân cầu lông</span>
      </div>
      <div class="container">
        <div
          v-for="(item, index) in itemsPaginated"
          :key="index"
          :class="{ item1: index % 2 === 0, item2: index % 2 !== 0 }"
          class="w-100"
          @click="redirectToCourt(item)"
        >
          <div class="left-part">
            <div class="image-container">
              <img :src="item.linkimg" alt="CourtBadminton" />
            </div>
          </div>
          <div class="right-part">
            <div class="court-name">{{ item.name }}</div>
            <p>
              <i class="fas fa-home text-white" style="font-size: 23px; margin-right: 5px"></i>
              {{ item.address }}
            </p>
            <p>
              <i class="fas fa-phone text-white" style="font-size: 23px; margin-right: 5px"></i>
              {{ item.phone_num }}
            </p>
          </div>
        </div>
        <div class="lg:px-6" style="padding: 0.75rem">
          <vueAwesomePaginate
            :total-items="place.length"
            v-model="currentPage"
            :items-per-page="perPage"
            :max-pages-shown="3"
            :on-click="clickHandler"
          />
        </div>
      </div>
    </div>
    <FooterBar />
  </div>
</template>

<script>
import NavBar from '@/components/global/NavBar.vue'
import FooterBar from '@/components/global/FooterBar.vue'
import vueAwesomePaginate from '@/components/items/vue-awesome-paginate.vue'
import { backend } from '@/ENV/index'
import axios from 'axios'
export default {
  components: {
    NavBar,
    FooterBar,
    vueAwesomePaginate
  },
  data() {
    return {
      currentPage: 1,
      perPage: 4,
      place: []
    }
  },
  computed: {
    itemsPaginated() {
      return this.place.slice(
        this.perPage * (this.currentPage - 1),
        this.perPage * this.currentPage
      )
    }
  },
  created() {
    this.ListOfCourtStatus()
  },

  methods: {
    async ListOfCourtStatus() {
      try {
        const response = await axios.post(backend + 'listOfCourt', {
          district: localStorage.getItem('selectedDistrict')
        })

        console.log(response.data.data)
        this.place = response.data.data
      } catch (error) {
        // Handle error
        console.error(error)
      }
    },

    redirectToCourt(item) {
      if (localStorage.getItem('mytime')) {
        localStorage.setItem('yardDetails', JSON.stringify(item))
        window.location.href = '#/CourtDetail'
      } else {
        alert('Vui lòng nhập ngày đặt sân')
      }
    },
    clickHandler(page) {
      console.log(page)
    }
  }
}
</script>

<style lang="scss" scoped>
.title {
  width: 100%;
  height: auto;
  padding-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center; /* Căn giữa theo chiều ngang */
  font-family: 'Comfortaa';
  color: #ffffff;
  font-size: 22px;
}

.container {
  position: relative;
  width: 100%;
  height: auto;
  padding-top: 40px;
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
  align-items: center; /* Căn giữa theo chiều ngang */
}

.tieuDe {
  //schua chữ danh sách cầu lông
  display: block;
  padding-top: 2px;
  padding-bottom: 60px;
}

.item1,
.item2 {
  z-index: 0;
  display: flex;
  height: 180px;
  max-width: 1200px;
  cursor: pointer;
}

.item1 {
  background: rgba(69, 162, 158, 0.6);
  transition: transform 0.5s;
}

.item1:hover {
  z-index: 1;
  transform: scaleX(1.02);
  transition: transform 0.5s;
}

.item2 {
  background-color: #45a29e;
  transition: transform 0.5s;
}

.item2:hover {
  z-index: 1;
  transform: scaleX(1.02);
  transition: transform 0.5s;
}

.left-part {
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 18%; /* Chiếm 20% */
}

.right-part {
  padding: 20px 5px 5px 4%;
  align-items: center;
  flex: 82%; /* Chiếm 80% */
  font-family: 'Comfortaa';
  color: #ffffff;
  font-size: 22px;
}

.court-name {
  font-size: xx-large;
}

.image-container {
  justify-content: center;
  height: 90%;
  width: auto;
}

.image-container img {
  padding-left: 20px;
  padding-right: 20px;
  width: 100%;
  height: 100%;
  display: block;
  border-radius: 50%; /* Áp dụng border-radius cho ảnh */
}
</style>
