<script setup>
import { computed, reactive, ref } from 'vue'
import { useMainStore } from '@/stores/main'
import { mdiCheckDecagram } from '@mdi/js'
import BaseLevel from '@/components/admin/BaseLevel.vue'
import UserAvatarCurrentUser from '@/components/admin/UserAvatarCurrentUser.vue'
import CardBox from '@/components/admin/CardBox.vue'
import FormCheckRadio from '@/components/admin/FormCheckRadio.vue'
import PillTag from '@/components/admin/PillTag.vue'

const mainStore = useMainStore()

const userName = reactive({
  name: localStorage.getItem('user_name')
})
const userSwitchVal = ref(false)
</script>

<template>
  <CardBox>
    <BaseLevel type="justify-around lg:justify-center">
      <UserAvatarCurrentUser class="lg:mx-12" />
      <div class="space-y-3 text-center md:text-left lg:mx-12">
        <div class="flex justify-center md:block">
          <FormCheckRadio
            v-model="userSwitchVal"
            name="notifications-switch"
            type="switch"
            label="Notifications"
            :input-value="true"
          />
        </div>
        <h1 class="text-2xl">
          Hello, <b>{{ userName.name }}</b
          >!
        </h1>
        <div class="flex justify-center md:block">
          <PillTag label="Verified" color="info" :icon="mdiCheckDecagram" />
        </div>
      </div>
    </BaseLevel>
  </CardBox>
</template>
