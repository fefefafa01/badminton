<script setup>
import { computed, ref, onMounted, reactive } from 'vue'
import { useMainStore } from '@/stores/main'
import { mdiCircleEditOutline, mdiTrashCan } from '@mdi/js'
import CardBoxModal from '@/components/admin/CardBoxModal.vue'
import TableCheckboxCell from '@/components/admin/TableCheckboxCell.vue'
import BaseLevel from '@/components/admin/BaseLevel.vue'
import BaseButtons from '@/components/admin/BaseButtons.vue'
import BaseButton from '@/components/admin/BaseButton.vue'
import UserAvatar from '@/components/admin/UserAvatar.vue'
import axios from 'axios'
import { backend } from '@/ENV/index'

defineProps({
  checkable: Boolean
})

const table = reactive({
  clientData: []
})

const tableClient = async () => {
  const response = await axios.post(backend + 'overView/tableYards')
  console.log(response.data.table)
  table.clientData = response.data.table
}
onMounted(() => {
  tableClient()
})

const mainStore = useMainStore()

const items = computed(() => table.clientData)

const isModalActive = ref(false)

const isModalDangerActive = ref(false)

const perPage = ref(5)

const currentPage = ref(0)

const checkedRows = ref([])

const selectedClient = ref({ id: '', name: '', address: '', phone: '', owner: '' })

const itemsPaginated = computed(() =>
  items.value.slice(perPage.value * currentPage.value, perPage.value * (currentPage.value + 1))
)

const numPages = computed(() => Math.ceil(items.value.length / perPage.value))

const currentPageHuman = computed(() => currentPage.value + 1)

const pagesList = computed(() => {
  const pagesList = []
  for (let i = 0; i < numPages.value; i++) {
    pagesList.push(i)
  }
  return pagesList
})

const remove = (arr, cb) => {
  const newArr = []
  arr.forEach((item) => {
    if (!cb(item)) {
      newArr.push(item)
    }
  })
  return newArr
}

const checked = (isChecked, client) => {
  if (isChecked) {
    checkedRows.value.push(client)
  } else {
    checkedRows.value = remove(checkedRows.value, (row) => row.id === client.id)
  }
}

const ActiveModal = (client) => {
  selectedClient.value = { ...client }
  isModalActive.value = true
}

const DangerActive = (client) => {
  selectedClient.value = { ...client }
  isModalDangerActive.value = true
}
</script>

<template>
  <CardBoxModal
    v-model="isModalActive"
    title="Thông tin sân"
    button-label="Submit"
    table-type="court"
    :data="selectedClient"
    has-cancel
    has-form
  />

  <CardBoxModal
    v-model="isModalDangerActive"
    title="Xác nhận"
    button-label="Delete"
    table-type="court"
    button="danger"
    :data="selectedClient"
    has-cancel
  />

  <table>
    <thead>
      <tr>
        <th v-if="checkable" />
        <th />
        <th>Name</th>
        <th>Address</th>
        <th>Phone</th>
        <th>Owner</th>
        <th />
      </tr>
    </thead>
    <tbody>
      <tr v-for="client in itemsPaginated" :key="client.id">
        <TableCheckboxCell v-if="checkable" @checked="checked($event, client)" />
        <td class="border-b-0 lg:w-6 before:hidden">
          <UserAvatar :username="client.name" class="w-24 h-24 mx-auto lg:w-6 lg:h-6" />
        </td>
        <td data-label="Name">
          {{ client.name }}
        </td>
        <td data-label="Address">
          {{ client.address }}
        </td>
        <td data-label="Phone">
          {{ client.phone_num }}
        </td>
        <td data-label="Owner">
          {{ client.yard_owner.owner_name }}
        </td>
        <td class="before:hidden lg:w-1 whitespace-nowrap">
          <BaseButtons type="justify-start lg:justify-end" no-wrap>
            <BaseButton
              color="info"
              :icon="mdiCircleEditOutline"
              small
              @click="ActiveModal(client)"
            />
            <BaseButton color="danger" :icon="mdiTrashCan" small @click="DangerActive(client)" />
          </BaseButtons>
        </td>
      </tr>
    </tbody>
  </table>
  <div class="p-3 lg:px-6 border-t border-gray-100 dark:border-slate-800">
    <BaseLevel>
      <BaseButtons>
        <BaseButton
          v-for="page in pagesList"
          :key="page"
          :active="page === currentPage"
          :label="page + 1"
          :color="page === currentPage ? 'lightDark' : 'whiteDark'"
          small
          @click="currentPage = page"
        />
      </BaseButtons>
      <small>Page {{ currentPageHuman }} of {{ numPages }}</small>
    </BaseLevel>
  </div>
</template>
