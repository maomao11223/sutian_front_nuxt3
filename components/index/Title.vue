<script
    setup
    lang="ts"
>
const props = defineProps({
    title: String,
    bgColor: {
        default: '#198754'
    },
    fontColor: {
        default: '#fff'
    }, 
})
</script>

<template>
    <div
        class="rounded py-2 ps-2 fw-bold" 
        :style="{ 'background-color': bgColor, 'color': fontColor }"
    >
        {{ title }}
    </div>
</template>

<style
    lang="scss"
    scoped
></style>