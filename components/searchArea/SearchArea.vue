<script
    setup
    lang='ts'
>

import BaseRadio from "@/components/radio/BaseRadio.vue";
const types = ref([
    {
        label: '用臺灣閩南語查詞目',
        value: true
    },
    {
        label: '用臺灣閩南語查用例',
        value: false
    },
    {
        label: '用華語查用例',
        value: false
    },
    {
        label: '用華語查全文',
        value: false
    },
])
</script>
<template>
    <p>類型</p>
    <div class="d-flex">
        <BaseRadio
            v-for="t in types"
            :key="t.label"
            :label="t.label"
            :value="t.value"
        ></BaseRadio>
    </div>
    <p class="mt-2">搜尋</p>
    <input
        type="text"
        class="form-control"
        :placeholder="$t('placeholder.searchText')"
        aria-label="Recipient's username"
        aria-describedby="basic-addon2"
    >
    <button
        type="button"
        class="btn btn-primary w-100 mt-3"
    >{{ $t('searchBtn') }}</button>
</template>
<style scoped></style>