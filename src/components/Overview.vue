<script>
export default {
    name: "Overview",
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
    background-color: #023A6233;
    border-radius: 16px;
    padding: 24px;
    gap: 24px;
    min-width: 300px;
    width: 100%;
    height: 20%;
    min-height: 100px;
}
</style>