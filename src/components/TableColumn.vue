<script setup lang="ts">
</script>
        
<template>
    <tr class="table-column">
        <slot>
        </slot>
    </tr>
</template>

<style scoped>
.table-column {
    line-height: 1.6;
    font-weight: 500;
    font-size: 15px;
    display: flex;
    margin: 10px 16px;
    align-items: center;
}
</style>