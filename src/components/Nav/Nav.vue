<template>
    <Burger v-if="navMod" @click="toggleMobileMenu" :class="isMenuOpen ? 'active' : ''" />
    <nav class="nav" :class="navMod">
        <ul class="nav__list" :class="isMenuOpen ? 'active' : ''">
            <li v-for="appRoute in AppRouteList" class="nav__list-item">
                <router-link @click="toggleMobileMenu" class="nav__link" :to=appRoute.link>
                    <span>{{appRoute.name}}</span>
                </router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
import { AppRouteList } from '@/consts';
import Burger from '../Burger/Burger.vue';

export default {
    components: {
        Burger,
    },
    props: {
        navMod: String,
    },
    data() {
        return {
            isMenuOpen: false,
            AppRouteList,
        }
    },
    methods: {
        toggleMobileMenu() {
            this.isMenuOpen = !this.isMenuOpen;
            const body = document.querySelector('body');
            this.isMenuOpen ? body.style.overflow = 'hidden' : body.style.overflow = 'visible';
        }
    },
}
</script>

<style src="./Nav.css" scoped/>
