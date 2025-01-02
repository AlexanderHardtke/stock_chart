<script>
export default {
    name: "PieChartCard",
};
</script>

<template>
    <div class="chart-card">
        <!-- Platz für deinen Chart oder Inhalt -->
        <slot></slot>
    </div>
</template>

<style scoped>
.chart-card {
    display: block;
    background-color: #011F35;
    border-radius: 16px;
    padding: 24px 32px;
    min-width: 300px;
    width: 40%;
    height: 304px;
}
</style>