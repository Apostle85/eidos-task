<script setup lang="ts">

</script>

<template>
    <div class="user-info">
        <div class="user-info__text-container">
            <span class="user-info__name">Барнаби Мармадюк</span>
            <span class="user-info__job">Преподаватель</span>
        </div>
        <div class="user-info__image">БМ</div>
    </div>
</template>


<style scoped>
.user-info {
    display: flex;
    align-items: center;
box-shadow: rgba(0, 0, 0, 0.12) 0 4px 24px 0;
border-radius: 16px;
padding: 12px;
}

.user-info__text-container {
    display: flex;
    flex-direction: column;
}

.user-info__name {
    font-weight: 800;
    line-height: 1.6;
    font-size: 15px;
}

.user-info__job {
    font-size: 13px;
    line-height: 1.54;
    color: rgba(47, 49, 68, 0.65);
}

.user-info__image {
    margin: 0 0 0 12px;
    display: flex;
    height: 48px;
    min-width: 48px;
    background-color: #2B4EC5;
    background-position: center;
    border-radius: 50%;
    color: #fff;
    align-items: center;
    justify-content: center;
}</style>