<script setup lang="ts">
import Table from "../components/Table.vue";
import TableRow from '../components/TableRow.vue';
import TableColumn from '../components/TableColumn.vue';
import { tableHeaderTitles, tableContentElements } from "../utils/constants";
import { ref } from "vue";

const displayedElements = ref(tableContentElements);
const inputText = ref('');
const changeDisplayedElements = (arr: any) => { displayedElements.value = arr };
const filterElements = () => {
    const testRegex = new RegExp(`${inputText.value}`, 'i');
    displayedElements.value = [...tableContentElements].filter(el => { 
        console.log(testRegex.test(el.title.toLowerCase()), el.title);
        
        return testRegex.test(el.title.toLowerCase());
    });
}
// const viewportHeight = ref(window.innerHeight);
// const getViewPort = () => viewportHeight.value = window.innerHeight;
// const isInViewport = (element: HTMLElement) => {
//     getViewPort();
//     const rect = element.getBoundingClientRect();
//     const position = rect.bottom / viewportHeight.value;
//     if (position >= 0 && position <= 1) {
//         console.log(true);
//         return true;
//     }
//     else {
//         console.log(false);
//         return false;
//     }
// }
</script>

<template>
    <main class="study-page">
        <div class="study-page__header">
            <h2 class="study-page__heading">Учебные сессии</h2>
            <div class="table-setup">
                <div class="table-setup__input-container">
                    <div class="table-setup__input-icon"></div>
                    <input type="text" v-model="inputText" class="table-setup__input" placeholder="Поиск">
                </div>
                <button @click="filterElements" class="table-setup__button table-setup__button_type_filter"></button>
                <button class="table-setup__button table-setup__button_type_setting"></button>
                <button class="table-setup__button table-setup__button_type_create">Создать</button>
            </div>
        </div>
        <Table @onContentSort="changeDisplayedElements" :headers="tableHeaderTitles" :elements="tableContentElements"
            columnsizes="15% 15% 30% 15% 15% 10%">
            <TableRow v-for="(content, i) of displayedElements" :key="i" columnsizes="15% 15% 30% 15% 15% 10%">
                <TableColumn>
                    {{ content.date }}
                </TableColumn>
                <TableColumn :statusType="content.status">
                    <div :class="
                        content.status === 'Запланировано' ?
                            'table-column__slot table-column__slot_color_purple' :
                            content.status === 'Завершено' ?
                                'table-column__slot table-column__slot_color_green' :
                                content.status === 'Идет' ?
                                    'table-column__slot table-column__slot_color_yellow' :
                                    ''
                    ">{{ content.status }}</div>
                </TableColumn>
                <TableColumn>
                    {{ content.title }}
                </TableColumn>
                <TableColumn>
                    {{ content.type }}
                </TableColumn>
                <TableColumn>
                    {{ content.rooms }}
                </TableColumn>
                <TableColumn>
                    {{ content.group }}
                </TableColumn>
            </TableRow>
        </Table>
    </main>
</template>

<style>
.study-page {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    padding: 24px;
    background-color: #fff;
    border-radius: 12px 12px 0 0;
}

.study-page__header {
    display: flex;
    justify-content: space-between;
    margin: 0 0 16px;
}

.study-page__heading {
    margin: 0;
    font-size: 24px;
    line-height: 1.16;
    font-weight: 800;
}

.table-setup {
    display: flex;
}

.table-setup__button {
    margin: 0 0 0 14px;
    border-radius: 12px;
    width: 44px;
    height: 44px;
    border: none;
    background-size: 24px;
    background-position: center;
    background-repeat: no-repeat;
    transition: opacity .3s ease-in;
    cursor: pointer;
}

.table-setup__button_type_filter {
    background-image: url('../assets/filter.svg');
}

.table-setup__button_type_setting {
    background-image: url('../assets/filter2.svg');
}

.table-setup__button_type_create {
    color: #fff;
    background-color: rgba(55, 97, 243, 1);
    width: unset;
    padding: 10px 24px;
    line-height: 1.6;
    font-size: 15px;
    font-weight: 800;
}

.table-setup__button:hover {
    opacity: .6;
}

.table-setup__input-container {
    width: 260px;
    height: 44px;
    display: flex;
}

.table-setup__input {
    color: rgba(47, 49, 68, 1);
    padding: 0 8px 0 48px;
    font-size: 13px;
    margin: 0;
    border-radius: 12px;
    border: solid 1px rgba(224, 224, 224, 1);
    flex-grow: 1;
    line-height: 1.54;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}

.table-setup__input::placeholder {
    color: rgba(47, 49, 68, 1);
}

.table-setup__input:focus {
    outline: none;
    box-shadow: rgba(0, 0, 0, .3) 0px 0px 5px 0px;
}

.table-setup__input-icon {
    width: 24px;
    height: 24px;
    margin: 10px 8px 10px 16px;
    background-image: url('/src/assets/search.svg');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    position: absolute;
}

.table-column__slot {
    border-radius: 43px;
    padding: 4px 12px;
}

.table-column__slot_color_purple {
    background-color: rgba(175, 191, 245, 1);
}

.table-column__slot_color_green {
    background-color: rgba(145, 200, 147, 1);
}

.table-column__slot_color_yellow {
    background-color: rgba(255, 218, 161, 1);
}
</style>