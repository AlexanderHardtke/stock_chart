<script>
export default {
    name: "GrossMargin",
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
    min-width: 200px;
    width: 24.9%;
    height: 248px;
}
</style>