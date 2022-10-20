<template>
    <main class='catalog'>
        <div class='container'>
            <h1 class='catalog__title'>Картины эпохи Возрождения</h1>
            <ul v-if='filteCards().length' class='catalog__list'>
                <li v-for='(card, i) in filteCards()' class='catalog__list-item'>
                    <Card :cardData='card' :index='i' v-model='modal' />
                </li>
            </ul>
            <div v-else>
                <h2 >По вашему запросу ничего не найдено</h2>
            </div>
        </div>
    </main>
    <Modal :show='this.modal.showModal' v-model='modal'/>
</template>

<script >
import Card from '@/components/Card/Card.vue';
import Modal from '@/components/Modal/Modal.vue';
import { mapState, mapActions, mapGetters, mapMutations } from 'vuex';
import { LOCAL_STORAGE_NAME } from '@/consts';

export default {
    components: {
        Card, Modal
    },
    data() {
        return {
            modal: {
                showModal: false,
                id: null,
            },
        }
    },
    methods: {
        updateStoreFromLocalStorage () {
            const dataInLocalStorage = JSON.parse(localStorage.getItem(LOCAL_STORAGE_NAME));
            dataInLocalStorage && dataInLocalStorage.forEach(item => this.updateCartValue(item - 1));
        },
        ...mapActions([
            'getPictureData',
        ]),
        ...mapGetters({
            filteCards: 'filteCards',
        }),
        ...mapMutations({
            updateCartValue: 'updateCartValue'
        })
    },
    computed: {
        ...mapState({
            pictureData: state => state.pictureData,
        }),
    },
    mounted() {
        this.getPictureData();
        this.updateStoreFromLocalStorage();
    },
};
</script>

<style src='./Catalog.css' scoped/>
