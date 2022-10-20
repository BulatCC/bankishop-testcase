<template>
    <div class="modal" v-if="show" :value="modelValue" @click.stop="closeModal">
        <div class="modal__content" @click.stop>
            <swiper :slides-per-view="1" :space-between="5" >
                <swiper-slide v-for="picture in pictureData[modelValue.id].detailsImg">
                    <img :src="picture" :alt="pictureData[modelValue.id].title">
                </swiper-slide>
            </swiper>
            <h2 class="modal__title">{{pictureData[modelValue.id].title}}</h2>
            <span class="modal__price">{{pictureData[modelValue.id].price}}</span>
        </div>
    </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { mapState } from 'vuex';

export default {
    props: {
        show: Boolean,
        modelValue: {
            showModal: Boolean,
            id: Number,
        },
    },
    components: {
        Swiper,
        SwiperSlide,
    },
    data() {
        return {
            detailsImgs: this.pictureData,
        }
    },
    setup() {

    },
    methods: {
        closeModal() {
            this.$emit('update:modelValue', {
                showModal: false,
                id: null,
            });
            document.querySelector('body').style.overflow = 'visible';
        },
    },
    computed: {
        ...mapState({
            pictureData: state => state.pictureData,
        }),
    }
}
</script>
  
<style src='./Modal.css' scoped/>
  