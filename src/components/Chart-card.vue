<script>
export default {
    name: "ChartCard",
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
    background-color: #011F35;
    border-radius: 16px;
    padding: 24px 32px;
    min-width: 300px;
    width: 60%;
    min-height: 225px;
    height: 27.5%;
}
</style>