<template>
    <header class='header'>
        <div class='container header__container'>
            <Nav navMod='nav--mobile'></Nav>
            <InputElement @keyup.enter="filterPictures" v-model="inputValue" type='text' placeHolder='Поиск по названию картины'>Поиск по
                названию картины</InputElement>
            <Btn @click="filterPictures">Найти</Btn>
        </div>
    </header>
    <router-view />
</template>

<script>
import { AppRouteList } from '@/consts';
import InputElement from '../Input/Input.vue';
import Nav from '../Nav/Nav.vue';

export default {
    components: {
        InputElement, 
        Nav,
    },
    data() {
        return {
            isMenuOpen: false,
            AppRouteList,
            inputValue: ''
        }
    },
    methods: {
        toggleMobileMenu() {
            this.isMenuOpen = !this.isMenuOpen;
        },
        filterPictures() {
            this.$store.commit('setQueryString', this.inputValue.trim().toLowerCase());
        },
    }
}
</script>

<style src='./Header.css'/>
