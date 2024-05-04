<script
    setup
    lang='ts'
>
const props = defineProps({
    totalPage: { default: 12 },
    currentPage: {
        default: 12,
    },

})

const emits = defineEmits(['changePage'])

const toPage = (inPage: number) => {
    emits('changePage', inPage)
}

const start = computed(() => {
    // 設定條件：如果currentPage+5會小於總頁數，那就讓start =currentPage
    if (props.currentPage + 5 <= props.totalPage) {
        return props.currentPage
    }
    // 如果會大於總頁數的話，那就讓start = 總頁數-4(從後面往前算5頁)
    else if (props.currentPage + 5 > props.totalPage || props.currentPage === props.totalPage) {
        return props.totalPage - 4
    }
})
const end = computed(() => {
    // 設定條件：如果currentPage+5會小於總頁數，那就讓end =currentPage+4
    if (props.currentPage + 5 <= props.totalPage) {
        return props.currentPage + 4
    }
    // 如果會大於總頁數的話，那就讓end = 總頁數
    else if (props.currentPage + 5 > props.totalPage || props.currentPage === props.totalPage) {
        return props.totalPage
    }
})

</script>
<template>
    <nav aria-label="Page navigation example">
        <ul class="pagination">
            <li
                class="page-item"
                v-show="currentPage != 1"
            >
                <div
                    class="page-link"
                    @click="() => {
                    toPage(currentPage - 1)
                }
                    "
                >上一頁</div>
            </li>


            <li
                class="page-item"
                v-for="(c, cIndex) in totalPage"
                v-show="cIndex >= start - 2 && cIndex < end"
                :key="c"
                :class="{ active: currentPage == c }"
            >
                <a
                    @click="toPage(c)"
                    class="page-link"
                    href="#"
                >{{ c }}</a>

            </li>

            <li
                class="page-item"
                v-show="currentPage != totalPage"
            >
                <div
                    class="page-link"
                    @click="() => {
                    toPage(currentPage + 1)
                }
                    "
                >下一頁</div>
            </li>
        </ul>
    </nav>
</template>
<style scoped></style>