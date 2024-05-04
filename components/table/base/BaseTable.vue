<script
    setup
    lang='ts'
>
import Pagination from '@/components/pagination/Pagination.vue'
const props = defineProps({
    thead: {},
    tbody: {},
    pagination: {}
})
const emits = defineEmits(['changePage'])
</script>
<template>
    <table class="table table-striped">
        <thead>
            <tr
                style="border-top: 2px solid black;border-bottom:2px solid black;"
                class="fw-bold"
            >
                <th>序號</th>
                <th
                    v-for="h in thead"
                    :key="h.value"
                >{{ h.label }}</th>
            </tr>
        </thead>
        <tbody>
            <tr
                v-for="(b, bIndex) in tbody"
                :key="b"
            >
                <td>{{ bIndex + 1 }}</td>

                <td
                    v-for="h in thead"
                    :key="h.value"
                >
                    <template v-if="h.value == 'word'">
                        <NuxtLink :to="`/su/${b.id}`">
                            {{ b[h.value] }}
                        </NuxtLink>
                    </template>
                    <template v-else>
                        {{ b[h.value] }}
                    </template>
                </td>
            </tr>
        </tbody>
    </table>
    <Pagination
        :currentPage="pagination.currentPage"
        :totalPage="pagination.total"
        @changePage="(val) => {
                        emits('changePage', val)
                    }"
    ></Pagination>
</template>
<style scoped></style>