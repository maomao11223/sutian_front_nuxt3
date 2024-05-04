<script
    setup
    lang='ts'
>
const route = useRoute();
console.log(route);


const pathArr = computed(() => {
    const matched = route.matched;
    const fullPath = route.fullPath;

    if (fullPath == '/') {
        return []
    }
    let formatPath = [];
    matched.forEach(item => {
        formatPath.push(item.name)

    })
    return formatPath;
})





</script>
<template>

    <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
            <li
                class="breadcrumb-item"
                v-for="p in pathArr"
                :key="p"
            >
                <NuxtLink :to="`/${p}}`">{{ p }}</NuxtLink>
            </li>
        </ol>
    </nav>
</template>
<style scoped></style>