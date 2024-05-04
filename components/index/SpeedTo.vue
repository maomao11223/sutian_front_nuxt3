<script setup lang="ts">
const props = defineProps({
    title:String
})
</script>

<template>
    <div class="text-white bg-primary rounded py-2 ps-2">
        {{ title }}
    </div>
</template>

<style lang="scss" scoped>

</style>