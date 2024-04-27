<template>
  <div class="back_ground">
    <NavBar />
    <div>
      <div class="title">
        <span style="font-size: 40px">Danh sách sân cầu lông</span>
      </div>
      <div class="container">
        <div
          v-for="(item, index) in place"
          :key="index"
          :class="{ item1: index % 2 === 0, item2: index % 2 !== 0 }"
          @click="redirectToCourt()"
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
      </div>
    </div>
    <FooterBar />
  </div>
</template>

<script>
import NavBar from '@/components/global/NavBar.vue'
import FooterBar from '@/components/global/FooterBar.vue'
import axios from 'axios'
export default {
  components: {
    NavBar,
    FooterBar
  },
  data() {
    return {
      place: [],
      items: [
        {
          imageSrc:
            'https://sonsanepoxy.vn/wp-content/uploads/2023/07/lap-dat-he-thong-den-chieu-san-cau-long.jpg',
          courtName: 'Sân cầu lông Thiên Vân',
          address: '57 Nguyễn Nghiêm, Phú Trung, Tân Phú, Thành phố Hồ Chí Minh',
          phoneNumber: '0913 404 924'
        },
        {
          imageSrc: 'https://limosa.vn/wp-content/uploads/2023/08/san-cau-long-cay-keo.jpg',
          courtName: 'Sân cầu lông ABC',
          address: '710/53/2, Lũy Bán Bích, Tân Thành, Tân Phú, Thành phố Hồ Chí Minh',
          phoneNumber: '0983 916 646'
        },
        {
          imageSrc:
            'https://sieuthicaulong.vn/images/badminton-yard/1688728199_gallery_san-cau-long-tan-phuc-1.jpg',
          courtName: 'Sân cầu lông Tấn Phúc',
          address: '36/48 Huỳnh Thiện Lộc, Hoà Thanh, Tân Phú, Thành phố Hồ Chí Minh',
          phoneNumber: '0903 938 919'
        },
        {
          imageSrc:
            'https://badmintonw.com/uploads/images/gioi-thieu-san-cau-long-tao-dan-diem-den-li-tuong-cho-long-thu-quan-1-10.png',
          courtName: 'Sân cầu lông Viettel',
          address: '57 Nguyễn Nghiêm, Phú Trung, Tân Phú, Thành phố Hồ Chí Minh',
          phoneNumber: '0913404924'
        },
        {
          imageSrc: 'https://sieuthicaulong.vn/images/badminton-yard/1688381528_gallery_22.PNG',
          courtName: 'Sân cầu lông Lam Sơn',
          address: '320/1 Đ. Trần Bình Trọng, Phường 4, Quận 5, Thành phố Hồ Chí Minh',
          phoneNumber: '0909 222 958'
        }
        // Add more items as needed
      ]
    }
  },

  created() {
    this.ListOfCourtStatus()
  },

  methods: {
    async ListOfCourtStatus() {
      try {
        const response = await axios.post('http://localhost:5000/listOfCourt', {
          district: localStorage.getItem('selectedDistrict')
        })

        console.log(response.data.data)
        this.place = response.data.data
      } catch (error) {
        // Handle error
        console.error(error)
      }
    },

    redirectToCourt() {
      window.location.href = 'pro'
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
  height: 180px;
  width: 1200px;
}

.item1 {
  background: rgba(69, 162, 158, 0.6);
}

.item1:hover {
  z-index: 1;
  transform: scaleX(1.02); /* Màu nền khi hover */
}

.item2 {
  background-color: #45a29e;
}

.item2:hover {
  z-index: 1;
  transform: scaleX(1.02); /* Màu nền khi hover */
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
