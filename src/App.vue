<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import ChartCard from './components/Chart-card.vue'
import PieChartCard from './components/Pie-chart-card.vue'
import RevenueGrowth from './components/Revenue-growth.vue'
import NetIncomeChart from './components/Net-Income-chart.vue'
import GrossMargin from './components/Gross-margin.vue'
</script>

<template>
    
  <wrapper>
    <hr><h1>The Magnificent Seven Companies</h1>
  </wrapper>

    <wrapper> 
    <ChartCard />
    <PieChartCard />
  </wrapper>

  <wrapper> 
    <NetIncomeChart></NetIncomeChart>
    <GrossMargin></GrossMargin>
    <RevenueGrowth></RevenueGrowth>
  </wrapper>

</template>

<style scoped>
wrapper {
  display: flex;
  justify-content: space-between;
  width: 1240px;
  gap: 32px;
  margin-top: 32px;
}

hr {
  position: absolute;
  left: 0;
  width: 100px;
  height: 0px;
  border: 4px solid #38dbff;
}
</style>
