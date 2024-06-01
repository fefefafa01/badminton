<script setup>
import { computed, reactive, watch } from 'vue'
import {
  mdiClose,
  mdiAccount,
  mdiMail,
  mdiBadminton,
  mdiMapMarkerOutline,
  mdiCellphone,
  mdiAccountTie
} from '@mdi/js'
import axios from 'axios'
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
  tableType: {
    type: String,
    required: true
  },
  hasCancel: Boolean,
  hasForm: Boolean,
  modelValue: {
    type: [String, Number, Boolean],
    default: null
  },
  data: {
    type: Object
  }
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

let FormChange

if (props.tableType === 'customer') {
  if (props.hasForm === true) {
    FormChange = reactive({
      curEmail: props.data.email,
      name: props.data.name,
      email: props.data.email
    })

    //lấy data từ từng cột
    watch(
      () => props.data,
      (newData) => {
        FormChange.name = newData.name
        FormChange.email = newData.email
        FormChange.curEmail = newData.email
      },
      { immediate: true }
    )
  } else {
    FormChange = reactive({
      email: props.data.email,
      name: props.data.name
    })
    console.log(FormChange)
    watch(
      () => props.data,
      (newData) => {
        FormChange.email = newData.email
        FormChange.name = newData.name
        console.log(FormChange)
      },
      { immediate: true }
    )
  }
} else if (props.tableType === 'court') {
  if (props.hasForm) {
    FormChange = reactive({
      id: props.data.yard_id,
      name: props.data.name,
      address: props.data.address,
      phone: props.data.phone_num
      // owner: props.data.owner_name,
    })

    watch(
      () => props.data,
      (newData) => {
        FormChange.id = newData.id
        FormChange.name = newData.name
        FormChange.address = newData.address
        FormChange.phone = newData.phone_num
      },
      { immediate: true }
    )
  }
}

const confirm = async () => {
  if (props.hasForm) {
    console.log(FormChange)
    await axios.post('http://localhost:5000/overView/changeUser', {
      email: FormChange.curEmail,
      nameChanged: FormChange.name,
      emailChanged: FormChange.email
    })
  } else {
    console.log(FormChange)
    await axios.post('http://localhost:5000/overView/deleteUser', {
      email: FormChange.email
    })
  }
  window.location.reload()
}

const cancel = () => confirmCancel('cancel')

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
      class="shadow-lg w-11/12 md:w-3/5 lg:w-2/5 xl:w-4/12 z-50"
      :class="tableType === 'customer' ? 'max-h-modal' : 'max-h-modal1'"
      is-modal
      @submit.prevent="confirm"
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

      <div v-if="tableType === 'customer'">
        <div v-if="hasForm" class="space-y-3">
          <FormField label="Tên khách hàng" help="Required. Your name">
            <FormControl
              v-model="FormChange.name"
              :icon="mdiAccount"
              name="username"
              required
              autocomplete="username"
              style="padding-left: 2.5rem !important"
            />
          </FormField>
          <FormField label="Email khách hàng" help="Required. Your email">
            <FormControl
              v-model="FormChange.email"
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
          <p>
            Xác nhận xóa <b>{{ FormChange.name }}</b
            >?
          </p>
        </div>
      </div>

      <div v-else-if="tableType === 'court'">
        <div v-if="hasForm" class="space-y-3">
          <FormField label="Tên Sân" help="Required. Your court name">
            <FormControl
              v-model="FormChange.name"
              :icon="mdiBadminton"
              name="name"
              required
              autocomplete="name"
              style="padding-left: 2.5rem !important"
            />
          </FormField>
          <FormField label="Địa chỉ" help="Required. Your address">
            <FormControl
              v-model="FormChange.address"
              :icon="mdiMapMarkerOutline"
              type="text"
              name="address"
              required
              autocomplete="address"
              style="padding-left: 2.5rem !important"
            />
          </FormField>
          <FormField label="Số điện thoại" help="Required. Your phone">
            <FormControl
              v-model="FormChange.phone"
              :icon="mdiCellphone"
              type="text"
              name="phone"
              required
              autocomplete="phone"
              style="padding-left: 2.5rem !important"
            />
          </FormField>
        </div>
        <div class="space-y-3" v-else>
          <p>Xác nhận xóa <b></b>?</p>
        </div>
      </div>

      <template #footer>
        <BaseButtons>
          <BaseButton :label="buttonLabel" :color="button" @click="confirm" />
          <BaseButton v-if="hasCancel" label="Cancel" :color="button" outline @click="cancel" />
        </BaseButtons>
      </template>
    </CardBox>
  </OverlayLayer>
</template>
