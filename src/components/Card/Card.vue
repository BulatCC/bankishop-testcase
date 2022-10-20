<template>
    <article class="card" :class="cardData.sold ? 'card--sold' : ''">
        <div class="card__img-wrap">
            <img class="card__img" :value="modelValue" @click="showModal" :src="cardData.img" alt="" width="280" height="160">
        </div>
        <div class="card__description">
            <h2 :value="modelValue" @click="showModal" class="card__title">{{cardData.title}}</h2>
            <div v-if="!cardData.sold" class="card__container">
                <div class="card__price-wrap">
                    <span v-if="cardData.oldPrice" class="card__price card__price--old">{{cardData.oldPrice}}</span>
                    <span class="card__price">{{cardData.price}}</span>
                </div>
                <Btn v-if="cardData.inCart" iconPath="src/assets/img/icon-check.svg">В корзине</Btn>
                <Btn @click="addToCartClickHandler" v-if="!cardData.inCart && !pending">Купить</Btn>
                <Btn v-if="pending && !cardData.inCart" iconPath="src/assets/img/loader.gif"></Btn>
            </div>
            <span v-else class="card__price">{{cardData.soldReason}}</span>
        </div>
    </article>
</template>

<script>
import { mapState } from 'vuex';
import { getPicturesInCart } from '@/utils/utils';
import { LOCAL_STORAGE_NAME } from '@/consts';

export default {
    props: {
        cardData: {
            id: Number,
            title: String,
            img: String,
            altText: String,
            price: String,
            oldPrice: String,
            soldReason: String,
        },
        modelValue: {
            showModal: Boolean,
            id: Number,
        },
        index: Number,
    },
    data() {
        return {
            pending: false,
            isModalOpen: false,
        }
    },
    methods: {
        addToCartClickHandler() {
            this.pending = true;
            setTimeout(() => {
                this.pending = false;
                this.$store.commit('updateCartValue', this.index);
                localStorage.setItem(LOCAL_STORAGE_NAME, getPicturesInCart(this.pictureData));
            }, 2000);
        },
        showModal() {
            this.$emit('update:modelValue', {
                showModal: true,
                id: this.index,
            });
            document.querySelector('body').style.overflow = 'hidden';
        },
    },
    computed: {
        ...mapState({
            pictureData: state => state.pictureData,
        }),
    },
};
</script>

<style src="./Card.css" scoped/>
