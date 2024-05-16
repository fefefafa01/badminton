<template>
  <div class="back_ground">
    <NavBar />
    <AboutUs />
    <FooterBar />
  </div>
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue'
import NavBar from '@/components/global/NavBar.vue'
import FooterBar from '@/components/global/FooterBar.vue'
import AboutUs from '@/components/items/AboutUs.vue'
import axios from 'axios'

export default defineComponent({
  components: {
    AboutUs,
    NavBar,
    FooterBar
  },

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

<style lang="scss" scoped></style>
