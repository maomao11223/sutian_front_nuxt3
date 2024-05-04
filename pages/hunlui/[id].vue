<script
    setup
    lang="ts"
>
import List from '@/components/hunlui/list.vue'

import BaseTable from '@/components/table/base/BaseTable.vue'


const route = useRoute();

let routePageId = route.params.id


const table = ref({
    thead: [

        {
            label: '詞目',
            value: 'word'
        },
        {
            label: '音讀',
            value: 'voice'
        },
        {
            label: '釋義',
            value: 'translation'
        },
    ],
    tbody: [
        {
            word: '暗暝',
            voice: 'àm-mê/àm-mî',
            translation: '夜晚。',
            id: 1
        }
    ],
    counts: 230,
    page: {
        currentPage: 1,
        total: 20
    }
})



</script>

<template>
    <h3 class="text-center">時間節令</h3>
    <p class="text-secondary">有{{ table.counts }}筆，第{{ table.page.currentPage }}頁</p>
    <BaseTable
        :thead="table.thead"
        :tbody="table.tbody"
        :pagination="table.page"
        @changePage="(val) => { table.page.currentPage = val }"
    ></BaseTable>
    <List :routePageId="routePageId"></List>
</template>

<style
    lang="scss"
    scoped
></style>