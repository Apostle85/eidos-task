<script setup lang="ts">
import { ref } from 'vue';

type navigationRefType = { navigationRef: { name: string, logo: string, logoWhite: string }, isAccordion?: boolean };
const isClicked = ref(false);
const clickRef = () => { isClicked.value = !isClicked.value }

const props = defineProps<navigationRefType>();
</script>

<template>
    <a href="#" @click="clickRef" :class="`navigation-ref ${isClicked ? 'navigation-ref_active' : ''}`">
        <img :src="isClicked && props.navigationRef.logoWhite ? props.navigationRef.logoWhite : props.navigationRef.logo" :alt="props.navigationRef.name"
            class="navigation-ref__image">
        <p class="navigation-ref__name">{{ props.navigationRef.name }}</p>
        <div v-show="props.isAccordion" class="navigation-ref__button"></div>
    </a>
</template>


<style>
.navigation-ref {
    display: flex;
    text-decoration: none;
    align-items: center;
    border-radius: 16px;
    color: #2F3144;
    margin: 0 0 4px;
    transition: background-color .3s ease-in;
}

.navigation-ref:hover {
    background-color: #F4F4F4;
}

.navigation-ref_active {
    background-color: #3761F3;
    color: #fff;
}
.navigation-ref_active:hover{
    background-color: #3761F3;
}
.navigation-ref__name {
    font-weight: 800;
    font-size: 15px;
    line-height: 1.6;
    margin: 0;
}

.navigation-ref__image {
    height: 24px;
    width: 24px;
    margin: 12px;
}
.navigation-ref__button{
    cursor: pointer;
    background-image: url('../assets/arrow-down.svg');
    width: 16px;
    height: 16px;
    margin: 18px 0 18px 18px;
    background-size: contain;
    background-repeat: no-repeat;
    transition: opacity .3s ease-in;
}

.navigation-ref__button:hover{
    opacity:.6;
}
</style>