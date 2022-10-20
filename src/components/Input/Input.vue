<template>
    <input class='input' :type="type" :placeholder='placeHolder' :value="modelValue" @input="updateInput">
</template>

<script>
export default {
    name: 'InputElement',
    props: {
        placeHolder: String,
        type: String,
        modelValue: [String, Number]
    },
    methods: {
        updateInput(event) {
            this.$emit('update:modelValue', event.target.value)
        }
    }
};
</script>

<style src="./Input.css" scoped/>

