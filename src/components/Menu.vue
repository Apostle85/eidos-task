<script setup lang="ts">
import NavigationRef from './NavigationRef.vue';
import Header from './Header.vue';
import Footer from './Footer.vue';
import { navigationElements } from '../utils/constants';
import { ref } from 'vue';
const isDeactive = ref(false);
const clickWrapper = () => isDeactive.value = !isDeactive.value;
</script>

<template>
    <div :class="`menu ${isDeactive ? 'menu_deactive' : ''}`">
        <button @click="clickWrapper" class="menu__wrapper"></button>
        <Header class="menu__header" />
        <nav class="menu__nav">
            <NavigationRef v-for="element in navigationElements" :key="element.name" :navigation-ref="element" />
        </nav>
        <Footer />
    </div>
</template>

<style>
.menu {
    display: flex;
    position: relative;
    flex-direction: column;
    background-color: #fff;
    padding: 19px 12px;
    min-width: 274px;
    box-sizing: border-box;
    transition: visibility .4s ease-in, transform .4s ease-in;
    visibility: 1;
    transform: translateX(0);
}

.menu__header {
    margin: 0 auto 43px;
}

.menu__nav {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
}

.menu__wrapper {
    cursor: pointer;
    position: absolute;
    border-radius: 50%;
    background-image: url('/src/assets/arrow.svg');
    background-position: center;
    background-color: #2F3144;
    background-repeat: no-repeat;
    height: 24px;
    width: 24px;
    border: none;
    right: -12px;
    top: 30px;
    transition: opacity .3s ease-in;
}

.menu__wrapper:hover {
    opacity: 0.6;

}

.menu_deactive {
    visibility: hidden;
    position: absolute;
    transform: translateX(-100%);
    /* overflow: hidden; */
}

.menu_deactive .menu__wrapper{
    visibility: visible;
    transform: translateX(70%);
    background-image: url('/src/assets/arrow-right.svg');
}
</style>