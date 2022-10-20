<template>
    <button class="btn">
        <img v-if="iconPath" :src="iconPath" alt="" width="18" height="18">
        <span>
            <slot></slot>
        </span>
    </button>
</template>

<script >
export default {
    name: 'Btn',
    props: {
        title: String,
        iconPath: String,
    }
};
</script>

<style src="./Btn.css"/>
