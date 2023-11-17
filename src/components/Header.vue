<script setup lang="ts">
import logo from '../assets/logo.svg'
</script>

<template>
    <header class="header">
        <img :src="logo" alt="Логотип 'Сим Центр'" class="header__logo" />
        <h1 class="header__name">Сим Центр</h1>
    </header>
</template>

<style scoped>
.header {
    display: flex;
    align-items: center;
}
.header__name{
    font-weight: 800;
    font-size: 24px;
    line-height: 1.16;
    margin: 0 0 0 14px;

}
.header__logo{
    height: 46px;
    width: 46px;
}
</style>