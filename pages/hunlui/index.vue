<script
    setup
    lang='ts'
>
import List from '@/components/hunlui/list.vue'

const route = useRoute();

let routePageId = route.params.id


</script>
<template>
    <List :routePageId="routePageId"></List>
</template>
<style scoped></style>~/components/index/Title.vue