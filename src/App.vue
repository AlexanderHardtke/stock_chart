<script setup lang="ts">
import { ref, onMounted } from "vue";
import ChartCard from './components/Chart-card.vue';
import PieChartCard from './components/Pie-chart-card.vue';
import RevenueGrowth from './components/Revenue-growth.vue';
import NetIncomeChart from './components/Net-Income-chart.vue';
import GrossMargin from './components/Gross-margin.vue';
import Overview from "./components/overview.vue";
import { stockService } from './services/stockService';

const { stockData, isLoading, error, fetchStockData } = stockService;

onMounted(() => {
  fetchStockData('$AAPL');
  console.log(stockData);
});
</script>

<template>

  <wrapper>
    <h1>
      <hr>The Magnificent Seven Companies
    </h1>
  </wrapper>

  <div v-if="isLoading">Loading data...</div>
  <div v-if="error">{{ error }}</div>
  <div v-if="!isLoading && !error">

    <wrapper>
      <Overview></Overview>
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
  </div>

</template>

<style scoped>
wrapper {
  display: flex;
  justify-content: space-between;
  width: 1240px;
  gap: 32px;
  margin-top: 32px;
}

h1 {
  margin-left: 24px;
  display: flex;
  align-items: center;
}

hr {
  position: absolute;
  left: -28px;
  width: 100px;
  height: 0px;
  border: 12px solid #38dbff;
  width: calc(50vw - 620px);
  border-radius: 16px;
}
</style>
