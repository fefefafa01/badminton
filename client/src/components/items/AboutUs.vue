<template>
  <div class="min-h-screen" style="display: flex">
    <div class="col-5 d-flex justify-content-center align-items-center txt">
      <img src="@/assets/images/BCB_logo.png" class="img" alt="this is logo" />
    </div>
    <div class="col-7 d-flex align-items-baseline aboutUs justify-content-center">
      <h1 class="txt mb-4">About Us</h1>
      <p class="txt mb-5">
        BCB không chỉ là một ứng dụng đơn giản để đặt sân cầu lông, mà còn là một cộng đồng nơi
        những người yêu thể thao này có thể kết nối, chia sẻ và tạo ra những trải nghiệm độc đáo.
        Được xây dựng trên nền tảng của sự thuận tiện và tính linh hoạt, BCB giúp người chơi dễ dàng
        tìm kiếm và đặt sân theo ý muốn, đồng thời cung cấp một môi trường sôi động để trao đổi, học
        hỏi và phát triển. Với sứ mệnh tạo ra một cộng đồng cầu lông mạnh mẽ và hứa hẹn, BCB không
        chỉ là một ứng dụng, mà là một phần của cuộc cách mạng thể thao di động.
      </p>
      <h2 class="txt mb-2"><b>Phone:</b> 02838328228</h2>
      <h2 class="txt mb-2">
        <b>Location:</b> 268 Lý Thường Kiệt, Phường 14, Quận 10, TP. HCM, Việt Nam
      </h2>
      <h2 class="txt mb-2"><b>Email:</b> pthanhtung412@gmail.com</h2>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue'
import axios from 'axios'

export default defineComponent({
  setup() {
    const options = {
      rewind: true,
      gap: '1rem'
    }
    const notifData = ref([])
    const bangTinData = ref([])
    const slicedBangTinData = ref([])

    onMounted(async () => {
      try {
        const notif = await axios.get('http://localhost:5000/notif')
        notifData.value = notif.data.notifData

        const bangTin = await axios.get('http://localhost:5000/bangtin')
        bangTinData.value = bangTin.data.bangTinData
        console.log(bangTinData)

        const slicedData = []
        for (let i = 0; i < bangTinData.value.length; i += 3) {
          slicedData.push(bangTinData.value.slice(i, i + 3))
        }
        slicedBangTinData.value = slicedData
        console.log(slicedBangTinData)
      } catch (error) {
        console.error(error)
      }
    })

    return { options, notifData, slicedBangTinData }
  }
})
</script>

<style lang="scss" scoped>
.aboutUs {
  flex-direction: column;
  padding-right: 15vw;
}
.txt {
  font-family: 'Comfortaa', Helvetica;
  color: white;
}
h1 {
  font-size: 2em;
  animation: fadeInUp 1.5s ease-in-out forwards;
}
h2 {
  font-size: 1.2em;
  animation: fadeInUp 1.5s ease-in-out forwards;
  b {
    color: #45a29e;
  }
}
p {
  font-size: 1.2em;
  animation: fadeInUp 1.5s ease-in-out forwards;
}
.img {
  scale: 200%;
  border-radius: 50%;
  animation: fadeInUp 1.5s ease-in-out forwards;
}

@keyframes fadeInUp {
  0% {
    opacity: 0; /* Bắt đầu với opacity là 0 để ẩn đi */
    transform: translateY(20px); /* Di chuyển lên trên 20px */
  }
  100% {
    opacity: 1; /* Kết thúc với opacity là 1 để hiển thị */
    transform: translateY(0); /* Di chuyển về vị trí ban đầu */
  }
}
</style>
