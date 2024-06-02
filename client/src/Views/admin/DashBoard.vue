<script setup>
import { computed, ref, onMounted } from 'vue'
import { useMainStore } from '@/stores/main'
import {
  mdiAccountMultiple,
  mdiCreditCardOutline,
  mdiBadminton,
  mdiMonitorCellphone,
  mdiReload,
  mdiGithub,
  mdiChartPie,
  mdiChartTimelineVariant
} from '@mdi/js'
import * as chartConfig from '@/components/Charts/chart.config.js'
import LineChart from '@/components/Charts/LineChart.vue'
import SectionMain from '@/components/admin/SectionMain.vue'
import CardBoxWidget from '@/components/admin/CardBoxWidget.vue'
import CardBox from '@/components/admin/CardBox.vue'
import TableSampleClients from '@/components/admin/TableSampleClients.vue'
import TableCourts from '@/components/admin/TableCourts.vue'
import TablePayments from '@/components/admin/TablePayments.vue'
import NotificationBar from '@/components/admin/NotificationBar.vue'
import BaseButton from '@/components/admin/BaseButton.vue'
import CardBoxTransaction from '@/components/admin/CardBoxTransaction.vue'
import CardBoxClient from '@/components/admin/CardBoxClient.vue'
import LayoutAuthenticated from '@/layouts/LayoutAuthenticated.vue'
import SectionTitleLineWithButton from '@/components/admin/SectionTitleLineWithButton.vue'
import SectionBannerStarOnGitHub from '@/components/admin/SectionBannerStarOnGitHub.vue'
import axios from 'axios'
import { backend } from '@/ENV/index'
import { reactive } from 'vue'

const chartData = ref(null)

const overviewData = reactive({
  client: 0,
  payment: 0,
  court: 0
})

const fillChartData = () => {
  chartData.value = chartConfig.sampleChartData()
}

const countData = async () => {
  const response = await axios.post(backend + 'overView/count')
  overviewData.client = response.data.client
  overviewData.payment = response.data.payment
  overviewData.court = response.data.court
}

onMounted(() => {
  fillChartData()
  countData()
})

const mainStore = useMainStore()

const clientBarItems = computed(() => mainStore.clients.slice(0, 4))

const transactionBarItems = computed(() => mainStore.history)
</script>

<template>
  <LayoutAuthenticated>
    <SectionMain>
      <SectionTitleLineWithButton :icon="mdiChartTimelineVariant" title="Overview" main>
        <BaseButton
          href="https://github.com/justboil/admin-one-vue-tailwind"
          target="_blank"
          :icon="mdiGithub"
          label="Star on GitHub"
          color="contrast"
          rounded-full
          small
        />
      </SectionTitleLineWithButton>

      <div class="grid grid-cols-1 gap-6 lg:grid-cols-3 mb-6">
        <CardBoxWidget
          trend="12%"
          trend-type="up"
          color="text-emerald-500"
          :icon="mdiAccountMultiple"
          :number="overviewData.client"
          label="Customers"
        />
        <CardBoxWidget
          trend="Overflow"
          trend-type="alert"
          color="text-red-500"
          :icon="mdiBadminton"
          :number="overviewData.court"
          label="Badminton Yards"
        />
        <CardBoxWidget
          trend="12%"
          trend-type="down"
          color="text-blue-500"
          :icon="mdiCreditCardOutline"
          :number="overviewData.payment"
          label="Payments"
        />
      </div>

      <!-- <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div class="flex flex-col justify-between">
          <CardBoxTransaction
            v-for="(transaction, index) in transactionBarItems"
            :key="index"
            :amount="transaction.amount"
            :date="transaction.date"
            :business="transaction.business"
            :type="transaction.type"
            :name="transaction.name"
            :account="transaction.account"
          />
        </div>
        <div class="flex flex-col justify-between">
          <CardBoxClient
            v-for="client in clientBarItems"
            :key="client.id"
            :name="client.name"
            :login="client.login"
            :date="client.created"
            :progress="client.progress"
          />
        </div>
      </div> -->

      <!-- <SectionTitleLineWithButton :icon="mdiChartPie" title="Trends overview">
        <BaseButton :icon="mdiReload" color="whiteDark" @click="fillChartData" />
      </SectionTitleLineWithButton>

      <CardBox class="mb-6">
        <div v-if="chartData">
          <line-chart :data="chartData" class="h-96" />
        </div>
      </CardBox> -->

      <SectionTitleLineWithButton :icon="mdiAccountMultiple" title="Customers" />

      <NotificationBar color="info" :icon="mdiMonitorCellphone">
        <b>Notification.</b>
      </NotificationBar>

      <CardBox has-table>
        <TableSampleClients />
      </CardBox>

      <SectionTitleLineWithButton :icon="mdiBadminton" title="Badminton Yards" />

      <CardBox has-table>
        <TableCourts />
      </CardBox>

      <SectionTitleLineWithButton :icon="mdiCreditCardOutline" title="Payments" />

      <CardBox has-table>
        <TablePayments />
      </CardBox>
    </SectionMain>
  </LayoutAuthenticated>
</template>
