<script setup>
import { computed, onMounted } from 'vue'
import { mdiClose, mdiAccount, mdiMail } from '@mdi/js'
import BaseButton from '@/components/admin/BaseButton.vue'
import BaseButtons from '@/components/admin/BaseButtons.vue'
import CardBox from '@/components/admin/CardBox.vue'
import OverlayLayer from '@/components/admin/OverlayLayer.vue'
import CardBoxComponentTitle from '@/components/admin/CardBoxComponentTitle.vue'
import FormField from '@/components/admin/FormField.vue'
import FormControl from '@/components/admin/FormControl.vue'


const props = defineProps({
  title: {
    type: String,
    required: true
  },
  button: {
    type: String,
    default: 'info'
  },
  buttonLabel: {
    type: String,
    default: 'Done'
  },
  buttonType: {
    type: String,
    required: true
  },
  hasCancel: Boolean,
  hasForm:Boolean,
  modelValue: {
    type: [String, Number, Boolean],
    default: null
  },
  submit: {
    type: String,
    required: true
  },
})

onMounted(() => {
  console.log(props.submit)
})

const emit = defineEmits(['update:modelValue', 'cancel', 'confirm'])

const value = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value)
})

const confirmCancel = (mode) => {
  value.value = false
  emit(mode)
}

const confirm = () => confirmCancel('confirm')

const cancel = () => confirmCancel('cancel')

const changeCustomer = async () => {
  console.log(changedName)
  console.log(changedEmail)
  // const response = await axios.post('http://localhost:5000/overView/changeUser', {
  //   email: userRowEmail.value,
  //   nameChanged: changedName.value,
  //   emailChanged: changedEmail.value
  // })
}

window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && value.value) {
    cancel()
  }
})
</script>

<template>
  <OverlayLayer v-show="value" @overlay-click="cancel">
    <CardBox
      v-show="value"
      class="shadow-lg max-h-modal w-11/12 md:w-3/5 lg:w-2/5 xl:w-4/12 z-50"
      is-modal

    >
      <CardBoxComponentTitle :title="title">
        <BaseButton
          v-if="hasCancel"
          :icon="mdiClose"
          color="whiteDark"
          small
          rounded-full
          @click.prevent="cancel"
        />
      </CardBoxComponentTitle>

      <div v-if="hasForm" class="space-y-3">
        <FormField label="Tên khách hàng" help="Required. Your name">
          <FormControl
              :v-model="changedName"
              :icon="mdiAccount"
              name="username"
              required
              autocomplete="username"
              style="padding-left: 2.5rem !important"
            />
        </FormField>
        <FormField label="Email khách hàng" help="Required. Your email">
          <FormControl
              :v-model="changedEmail"
              :icon="mdiMail"
              type="email"
              name="email"
              required
              autocomplete="email"
              style="padding-left: 2.5rem !important"
            />
        </FormField>
      </div>
      <div class="space-y-3" v-else>
        <slot/>
      </div>

      <template #footer>
        <BaseButtons>
          <BaseButton :label="buttonLabel" :color="button" @click="confirm" :type="buttonType" />
          <BaseButton v-if="hasCancel" label="Cancel" :color="button" outline @click="cancel" />
        </BaseButtons>
      </template>
    </CardBox>
  </OverlayLayer>
</template>
