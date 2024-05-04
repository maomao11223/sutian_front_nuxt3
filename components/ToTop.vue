<script
    setup
    lang='ts'
>
//https://nuxt.com/modules/icon
const scrollTop = () => {
    window.scrollTo(0, 0)
}
</script>
<template>
    <button
        type="button"
        class="btn btn-danger text-white"
        @click="scrollTop"
    >
        <Icon name="ic:outline-keyboard-arrow-up" />
        回頂端
    </button>
</template>
<style scoped></style>