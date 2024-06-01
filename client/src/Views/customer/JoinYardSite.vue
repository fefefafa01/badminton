<template>
  <div class="back_ground">
    <NavBar />
    <div class="flex">
      <div class="col-7">
        <div class="title">
          <span style="font-size: 40px">Danh sách bảng tin</span>
        </div>
        <div class="container">
          <div v-for="(item, index) in itemsPaginated" :key="index" class="w-100">
            <div :class="{ item1: index % 2 === 0, item2: index % 2 !== 0 }" class="w-100">
              <div class="left-part">
                <div class="image-container">
                  <img :src="item.linkimg" alt="CourtBadminton" />
                </div>
              </div>
              <div class="right-part flex">
                <div class="col-8 pr-10">
                  <div class="court-name">{{ item.name }}</div>
                  <p style="font-size: 1em">
                    <i class="fas fa-home text-white"></i>
                    {{ item.address }}
                  </p>
                </div>
                <div class="col">
                  <p style="font-size: 1em">
                    <i class="fas fa-home text-white"></i>
                    price: {{ item.price }}vnd
                  </p>
                  <p style="font-size: 1em">
                    <i class="fas fa-home text-white"></i>
                    date: {{ item.date }}
                  </p>
                </div>
              </div>
            </div>
            <div class="desc">
              <div :key="index" class="w-100 desc_item">
                <p style="font-size: 1em">
                  <i class="fas fa-home text-white"></i>
                  {{ item.description }}
                </p>
              </div>
            </div>
          </div>
          <div class="lg:px-6" style="padding: 0.75rem">
            <vueAwesomePaginate
              :total-items="news.length"
              v-model="currentPage"
              :items-per-page="perPage"
              :max-pages-shown="3"
              :on-click="clickHandler"
            />
          </div>
        </div>
      </div>
      <div class="col flex flex-col items-center">
        <div class="title">
          <span style="font-size: 40px">Đăng ký sân</span>
        </div>
        <div class="h-2/4 w-3/4 py-10">
          <div class="item max-h-fit p-5">
            <form @submit.prevent="Submit" class="flex flex-col items-center">
              <div class="flex justify-center items-center mb-4 w-100">
                <label for="Yards" class="font-bold mr-5 text-lg">*Quận: </label>
                <select
                  name=""
                  id="district"
                  v-model="selectedDistrict"
                  @change="filterCourts"
                  class="col rounded-2xl cursor-pointer"
                >
                  <option v-for="district in district" :key="district" :value="district">
                    {{ district }}
                  </option>
                </select>
              </div>
              <div class="flex justify-center items-center mb-4 w-100">
                <label for="yards" class="font-bold mr-5 text-lg">*Sân: </label>
                <select id="yards" v-model="selectedName" class="col rounded-2xl cursor-pointer">
                  <option v-for="item in filteredNames" :key="item.id" :value="item.name">
                    {{ item.name }}
                  </option>
                </select>
              </div>
              <div class="flex justify-center items-center mb-4 w-100">
                <label for="yards" class="font-bold mr-5 text-lg">*Địa chỉ: </label>
                <select id="yards" v-model="selectedAddress" class="col rounded-2xl cursor-pointer">
                  <option v-for="item in filteredAddress" :key="item.id" :value="item.address">
                    {{ item.address }}
                  </option>
                </select>
              </div>
              <div class="flex justify-center items-center mb-4 w-100">
                <label for="Yards" class="font-bold mr-5 text-lg">*Thứ: </label>
                <select
                  name=""
                  id="date"
                  v-model="selectedDate"
                  class="col rounded-2xl cursor-pointer"
                >
                  <option v-for="date in date" :key="date" :value="date">{{ date }}</option>
                </select>
              </div>
              <div class="flex justify-center items-center mb-4 w-100">
                <label for="Yards" class="font-bold mr-5 text-lg">*Giá: </label>
                <select
                  name=""
                  id="price"
                  v-model="selectedPrice"
                  class="col rounded-2xl cursor-pointer"
                >
                  <option v-for="item in filteredPrices" :key="item.id" :value="item.average_price">
                    {{ item.average_price }}
                  </option>
                </select>
              </div>

              <div class="mb-4 w-100">
                <label for="Yards" class="block font-bold mr-5 text-lg">Mô tả </label>
                <textarea
                  name="des"
                  v-model="selectedDes"
                  id=""
                  cols="40"
                  rows="5"
                  class="w-100 rounded-lg"
                ></textarea>
              </div>

              <div v-if="fillData === false" class="error">
                <p>{{ status }}</p>
              </div>
              <div v-else class="infor-required">
                <p>Information * required</p>
              </div>
              <button type="submit" class="rounded-full text-xl shadow-xl h-12 w-50">
                Đăng ký
              </button>
            </form>
          </div>
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
import axios from 'axios'
import { reactive, onMounted } from 'vue'

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
      table: reactive({
        clientData: []
      }),
      fillData: true,
      district: [
        'Tất cả',
        'Quận 1',
        'Quận 3',
        'Quận 4',
        'Quận 5',
        'Quận 6',
        'Quận Tân Phú',
        'Quận Tân Bình',
        'Quận Bình Thạnh',
        'TP Thủ Đức'
      ],
      date: ['Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy', 'Chủ Nhật'],
      data: [],
      selectedDistrict: '',
      selectedName: '',
      selectedAddress: '',
      selectedDate: '',
      selectedPrice: '',
      selectedDes: '',
      selectedImg: '',
      status: '',
      news: [],
      activeIndex: null // Thêm dòng này
    }
  },
  computed: {
    itemsPaginated() {
      return this.news.slice(this.perPage * (this.currentPage - 1), this.perPage * this.currentPage)
    },
    numPages() {
      return Math.ceil(this.news.length / this.perPage)
    },
    rows() {
      return this.news.length
    },
    filteredData() {
      if (!this.selectedDistrict || this.selectedDistrict === 'Tất cả') {
        return this.data
      }
      return this.data.filter((item) => item.address.includes(this.selectedDistrict))
    },
    filteredNames() {
      if (this.selectedDistrict === 'Tất cả') {
        return this.data
      }
      return this.data.filter((item) => {
        return (
          item.address.includes(this.selectedDistrict) &&
          (!this.selectedPrice || item.average_price === this.selectedPrice)
        )
      })
    },
    filteredAddress() {
      if (this.selectedDistrict === 'Tất cả') {
        if (!this.selectedName) {
          return this.data
        } else {
          return this.data.filter((item) => item.name === this.selectedName)
        }
      } else {
        return this.data.filter((item) => {
          const isDistMatch = item.address.includes(this.selectedDistrict)
          const isNameMatch = !this.selectedName || item.name === this.selectedName
          return isDistMatch && isNameMatch
        })
      }
    },
    filteredPrices() {
      if (this.selectedDistrict === 'Tất cả') {
        if (!this.selectedName) {
          return this.data
        } else {
          return this.data.filter((item) => item.name === this.selectedName)
        }
      } else {
        return this.data.filter((item) => {
          const isDistMatch = item.address.includes(this.selectedDistrict)
          const isNameMatch = !this.selectedName || item.name === this.selectedName
          return isDistMatch && isNameMatch
        })
      }
    }
  },
  watch: {
    selectedName(newVal) {
      const selectedItem = this.data.find((item) => item.name === newVal)
      if (selectedItem) {
        this.selectedImg = selectedItem.linkimg
      }
    }
  },
  created() {
    this.ListOfNews()
    this.GetItem()
  },
  methods: {
    async ListOfNews() {
      try {
        const response = await axios.post('http://localhost:5000/joinYard/takeNews')

        console.log(response.data.data)
        this.news = response.data.data
      } catch (error) {
        console.error(error)
      }
    },
    async GetItem() {
      try {
        const response = await axios.post('http://localhost:5000/joinYard/selectItem')
        console.log(response.data.data)
        this.data = response.data.data
      } catch (error) {
        console.error(error)
      }
    },

    async Submit() {
      console.log(
        'name:',
        this.selectedName,
        'address:',
        this.selectedAddress,
        'date:',
        this.selectedDate,
        'price:',
        this.selectedPrice,
        'linkImg:',
        this.selectedImg,
        'desc:',
        this.selectedDes
      )
      if (
        this.selectedAddress == '' ||
        this.selectedDate == '' ||
        this.selectedDistrict == '' ||
        this.selectedName == '' ||
        this.selectedPrice == ''
      ) {
        this.fillData = false
        this.status = 'Fill all * information'
      } else {
        try {
          const response = await axios.post('http://localhost:5000/joinYard/submit', {
            name: this.selectedName,
            address: this.selectedAddress,
            date: this.selectedDate,
            price: this.selectedPrice,
            linkImg: this.selectedImg,
            desc: this.selectedDes
          })
          this.reloadPage()
        } catch (error) {
          console.error(error)
        }
      }
    },
    redirectToCourt(item) {
      localStorage.setItem('yardDetails', JSON.stringify(item))
      window.location.href = '#/CourtDetail'
    },
    reloadPage() {
      const currentPath = window.location.hash

      const desiredPath = '#/joinYard'

      if (currentPath !== desiredPath) {
        window.location.href = desiredPath
      } else {
        window.location.reload()
      }
    },
    clickHandler(pageNum) {
      console.log(pageNum)
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
  padding-bottom: 10px;
  display: flex;
  flex-direction: column;
  min-height: 500px;
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
  height: 150px;
  max-width: 1200px;
  box-shadow:
    0 20px 25px -5px rgb(0 0 0 / 0.1),
    0 8px 10px -6px rgb(0 0 0 / 0.1);
}

.item1 {
  background: rgba(69, 162, 158, 0.6);
  transition: transform 0.5s;
}

.item2 {
  background-color: #45a29e;
  transition: transform 0.5s;
}

.item1:hover,
.item2:hover {
  z-index: 1;
  transform: scaleX(1.02);
  transition: transform 0.5s;
}

.item1:hover + .desc .desc_item,
.item2:hover + .desc .desc_item {
  max-height: 100px;
  transition:
    max-height 0.5s ease-out,
    color 0.25s;
  color: white;
}

.desc {
  padding-right: 0.25rem;
  padding-left: 1rem;
  padding-bottom: 1rem;
}

.desc_item {
  max-height: 0px;
  height: 100px;
  max-width: 1200px;
  border-bottom-right-radius: 1rem;
  border-bottom-left-radius: 1rem;
  background: #2d4f57;
  transition:
    max-height 1s ease-in,
    color 1s;
  padding-left: 0.5rem;
  display: flex;
  align-items: center;
  color: transparent;
}

.item1:hover .desc_item {
}

.left-part {
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 20%; /* Chiếm 20% */
}

.right-part {
  padding: 20px 5px 5px 4%;
  align-items: center;
  flex: 82%; /* Chiếm 80% */
  font-family: 'Comfortaa';
  color: #ffffff;
  font-size: 18px;
}

.court-name {
  font-size: 1.5em;
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

.item {
  background-color: #45a29e;
}

button {
  background-color: #1f2833;
  border: solid 1px white;
  color: white;
}

textarea {
  resize: none;
}

select {
  width: 200px; /* Chiều rộng cố định cho hộp chọn */
  max-width: 100%; /* Đảm bảo nó không vượt quá chiều rộng của cha */
}

.error {
  font-family: 'Comfortaa', Helvetica;
  top: 100%;
  color: red;
  font-size: 1.1em;
  align-self: center;
  font-weight: bold;
}

.infor-required {
  font-family: 'Comfortaa', Helvetica;
  top: 100%;
  color: #1f2833;
  font-size: 1.1em;
  align-self: center;
  font-weight: bold;
}
</style>
