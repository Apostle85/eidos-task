<script setup lang="ts">
import logOutIcon from '../assets/log-out.svg';
import logOutIconWhite from '../assets/log-out white.svg';
import flag from '../assets/flag.svg';
import UserInfo from './UserInfo.vue';
import NavigationRef from './NavigationRef.vue';
</script>

<template>
    <footer class="menu__footer footer">
        <UserInfo />
        <nav class="footer__nav">
            <NavigationRef :navigation-ref="{ name: 'Выйти', logoWhtie: logOutIconWhite, logo: logOutIcon }" />
            <NavigationRef :navigation-ref="{ name: 'Русский', logo: flag }" :isAccordion="true" />
        </nav>
        <span class="footer__version">Версия 1.02</span>
    </footer>
</template>


<style scoped>
.footer {
    justify-content: end;
}

.footer__nav {
    margin: 18px 0;
}

.footer__version {
    color: rgba(47, 49, 68, 0.65);
    font-size: 13px;
    line-height: 1.54;
}
</style>