<script setup lang="ts">
const props = defineProps<{ headers?: string[], columnsizes: string }>();
</script>

<template>
    <tr class="table-row" :style="{ 'grid-template-columns': props.columnsizes}">
        <slot></slot>
    </tr>
</template>

<style scoped>
.table-row {
    display: grid;
    box-sizing: border-box;
    height: auto;
    width: 100%;
}
.table-row:nth-child(2n+1){
    background-color: rgba(245, 247, 249, 1);
}
</style>