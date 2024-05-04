<script
    setup
    lang='ts'
>

const peopleCount = ref(0)

const { setLocale } = useI18n()


const currentLocale = useCookie('i18n_redirected')


</script>
<template>
    <div class=" bg-light w-100">
        <div class="container py-3">

            <header class="d-flex justify-content-center">
                <div
                    class="me-4"
                    @click="setLocale('tw')"
                    :class="{
                        'btn-link': currentLocale !== 'tw'
                    }"
                >首頁</div>
                <div
                    @click="setLocale('und-hani')"
                    :class="{
                        'btn-link': currentLocale !== 'und-hani'
                    }"
                >頭頁</div>
            </header>
            <a
                href=""
                class=""
            >部長信箱</a>
            <p class="mt-3">中華民國教育部 版權所有 © 2024 Ministry of Education, R.O.C. All rights reserved.®</p>
            <p>使用人次：{{ peopleCount }}</p>
        </div>
    </div>
</template>
<style scoped></style>