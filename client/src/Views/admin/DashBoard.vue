<script setup>
import { computed, ref, onMounted } from 'vue'
import { useMainStore } from '@/stores/main'
import {
  mdiAccountMultiple,
  mdiCartOutline,
  mdiChartTimelineVariant,
  mdiMonitorCellphone,
  mdiReload,
  mdiGithub,
  mdiChartPie
} from '@mdi/js'
import * as chartConfig from '@/components/Charts/chart.config.js'
import LineChart from '@/components/Charts/LineChart.vue'
import SectionMain from '@/components/admin/SectionMain.vue'
import CardBoxWidget from '@/components/admin/CardBoxWidget.vue'
import CardBox from '@/components/admin/CardBox.vue'
import TableSampleClients from '@/components/admin/TableSampleClients.vue'
import NotificationBar from '@/components/admin/NotificationBar.vue'
import BaseButton from '@/components/admin/BaseButton.vue'
import CardBoxTransaction from '@/components/admin/CardBoxTransaction.vue'
import CardBoxClient from '@/components/admin/CardBoxClient.vue'
import LayoutAuthenticated from '@/layouts/LayoutAuthenticated.vue'
import SectionTitleLineWithButton from '@/components/admin/SectionTitleLineWithButton.vue'
import SectionBannerStarOnGitHub from '@/components/admin/SectionBannerStarOnGitHub.vue'
import axios from 'axios'
import { reactive } from 'vue'

const chartData = ref(null)

const overviewData = reactive({
  client: 0,
  admin: 0,
  court: 0,
})

const fillChartData = () => {
  chartData.value = chartConfig.sampleChartData()
}

const countData = async() => {
  const response = await axios.post('http://localhost:5000/overView/count')
    overviewData.client = response.data.client
    overviewData.admin = response.data.admin
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
          trend="12%"
          trend-type="down"
          color="text-blue-500"
          :icon="mdiCartOutline"
          :number="overviewData.admin"
          label="Admins"
        />
        <CardBoxWidget
          trend="Overflow"
          trend-type="alert"
          color="text-red-500"
          :icon="mdiChartTimelineVariant"
          :number="overviewData.court"  
          label="Courts"
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
        <b>Notification.</b> Collapses on mobile
      </NotificationBar>

      <CardBox has-table>
        <TableSampleClients />
      </CardBox>
    </SectionMain>
  </LayoutAuthenticated>
</template>
