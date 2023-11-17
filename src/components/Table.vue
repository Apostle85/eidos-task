<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps<{
    headers: string[], columnsizes: string, elements: { date: string, status: string, title: string, type: string, rooms: string, group: string }[]
}>();
const emit = defineEmits(['onContentSort']);
const arrayContent = ref(props.elements);
const isActive = ref(false);
// pagination

// const paginationElement = document.querySelector('.table-pagination') as HTMLElement;
// const currentIndex = ref(0);
// const arrayElements = Array.from(document.querySelectorAll('.table__element')) as HTMLElement[];
// const arrayDividedElements = ref([]);

// window.onresize = () => {
//     getViewPort();

//     while()
//     arrayDividedElements = 
// }
// const getElementsPerPage = () => arrayElements.filter((el) => isInViewport(el));
// const getElementsLength = () => getElementsPerPage().reduce((sum, el) => sum + el.offsetHeight, 0);

// // create computed
// const total = computed(() => array.value.length);
// const currentPageNumber = computed(() => currentIndex.value + 1);
// const numPages = computed(() => Math.ceil(total.value / viewportHeight.value));
// const range = computed(() =>
//     array.value.slice(
//         currentIndex.value * getElementsPerPage(),
//         (currentIndex.value + 1) * viewportHeight.value
//     )
// );

// create methods
// const gotoNext = () => {
//     currentIndex.value = Math.min(currentIndex.value + 1, numPages.value - 1);
// };
// const gotoPrev = () => {
//     currentIndex.value = Math.max(0, currentIndex.value - 1);
// };
// const gotoFirst = () => {
//     currentIndex.value = 0;
// };
// const gotoLast = () => {
//     currentIndex.value = numPages.value - 1;
// };
const clickSortingButton = () => {
    arrayContent.value = [...arrayContent.value].sort((a, b) => !isActive.value? a.date > b.date ? 1 : -1 : a.date <= b.date? 1: -1);
    isActive.value = !isActive.value;
    console.log(arrayContent.value, isActive.value);
    emit('onContentSort', arrayContent.value);
}
</script>
    
<template>
    <table class="table">
        <tr class="table__header" :style="{ 'grid-template-columns': props.columnsizes }">
            <td class="table__element table__element_type_header">
                <div class="table__name">{{ props.headers[0] }}</div>
                <div @click="clickSortingButton" class="table__button"></div>
            </td>
            <td v-for="(header, i) of props.headers.filter((_, i) => i != 0)" :key="i"
                class="table__element table__element_type_header">
                {{ header }}
            </td>
        </tr>
        <slot></slot>
        <div class="table-pagination">
            <button class="table-pagination__button table-pagination__button_type_left"></button>
            <button v-for='i in 4' :key="i" class="table-pagination__button">{{ i }}</button>
            <button class="table-pagination__button table-pagination__button_type_right"></button>
        </div>
    </table>
</template>


<style>
.table {
    border-radius: 12px;
    overflow: hidden;
    border-spacing: 0;
    border: 1px solid rgba(232, 234, 236, 1);
}

.table__header {
    display: grid;
    box-sizing: border-box;
    background-color: rgba(245, 247, 249, 1);
}

.table__element {
    line-height: 1.6;
    font-weight: 800;
    font-size: 17px;
    display: flex;
    margin: 10px 0 10px 16px;
    align-items: center;
}

.table__name {
    width: max-content;
}

.table__button {
    cursor: pointer;
    background-image: url('../assets/arrow-down.svg');
    width: 16px;
    height: 16px;
    margin: 18px 0 18px 18px;
    background-size: contain;
    background-repeat: no-repeat;
    transition: opacity .3s ease-in;
}

.table__button:hover {
    opacity: .6;
}

.table-pagination {
    display: flex;
    padding: 11px 16px;
    background-color: rgba(245, 247, 249, 1);
}

.table-pagination__button {
    font-size: 15px;
    line-height: 1.5;
    font-weight: 500;
    width: 30px;
    height: 30px;
    padding: 6px;
    border-radius: 8px;
    background-color: #fff;
    box-sizing: border-box;
    background-size: 8px;
    background-position: center;
    margin: 0 8px 0 0;
    border: none;
    background-repeat: no-repeat;
    transition: background-color .3s ease-in;
}

.table-pagination__button:hover {
    background-color: rgba(224, 224, 224, 1);

}

.table-pagination__button:focus {
    background-color: #fff;
    box-sizing: border-box;
    border: 1px solid rgba(55, 97, 243, 1);
    color: rgba(55, 97, 243, 1);
    text-align: center;
}

.table-pagination__button_type_left {
    background-image: url('../assets/arrow-left.svg');
}

.table-pagination__button_type_right {
    background-image: url('../assets/arrow-right.svg');
}
</style>