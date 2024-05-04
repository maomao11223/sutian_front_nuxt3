<script
    setup
    lang='ts'
>
import BaseBreadCrumb from '@/components/breadcrumb/BaseBreadCrumb.vue';

const route = useRoute();

const isHomePage = computed(() => {
    const path = route.fullPath
    if (path == '/') {
        return true
    } else {
        return false
    }
})

</script>
<template>
    <div
        class="d-flex flex-column"
        style="height: 100vh;"
    >

        <AppHeader>

        </AppHeader>
        <section class="border-bottom" v-if="!isHomePage">
            <div class="container pt-3">
                <BaseBreadCrumb></BaseBreadCrumb>
            </div>
        </section>

        <section class="container pt-4">
            <slot></slot>
        </section>
        <AppFooter class="mt-auto"></AppFooter>
    </div>
    <ToTop class="toTop"></ToTop>
</template>
<style scoped>
.toTop {
    position: fixed;
    bottom: 10px;
    right: 10px;
}
</style>