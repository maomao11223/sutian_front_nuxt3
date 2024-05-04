<script
    setup
    lang="ts"
>
import SearchArea from "@/components/searchArea/SearchArea.vue";


const notes = ref([
    {
        title: '辭典新增詞目300筆',
        id: 0,
        date: '2024-4-2'
    },
    {
        title: '轉址服務業於112年11月5日終止，尚儲存原網址之使用者，請更新相對應連結',
        id: 2,
        date: '2024-4-2'
    }
])


</script>

<template>
    <div>
        <h1 class="text-center">閩南語辭典</h1>
        <SearchArea></SearchArea>
    </div>
    <section class="border border-info rounded mt-4 p-3 mb-5">
        <h3>{{ $t('news') }}</h3>
        <div
            class="d-flex justify-content-between my-2"
            v-for="n in notes"
            :key="n.id"
        >
            <NuxtLink
                class="link-underline-primary"
                to="/"
            >{{ n.title }}</NuxtLink>
            <div>{{ n.date }}</div>
        </div>
    </section>
</template>

<style
    lang="scss"
    scoped
></style>