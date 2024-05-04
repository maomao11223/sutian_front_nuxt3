<script
    setup
    lang='ts'
>

import IndexTitle from '@/components/index/Title.vue'

const router = useRouter();
const route = useRoute();

const props = defineProps({
    routePageId: {
        type: Number
    }
})

let routePageId;

const types = ref([
    {
        label: '天文、地理',
        id: 1,
        children: [
            {
                label: '天文', id: 24
            },

        ]
    },
    {
        label: '時間、空間',
        id: 2,
        children: [
            {
                label: '時間節令', id: 25
            },
            {
                label: '時間節令2', id: 26
            },

        ]
    },
])

const showTitle = computed(() => {
    console.log('hunlui', route)
    if (props.routePageId) {
        routePageId = props.routePageId;
        return false
    } else {
        return true
    }
})



const toPage = (inPath: string) => {
    console.log(router)
    router.push({ path: inPath })
}
</script>
<template>
    <h4
        class="text-center"
        v-if="showTitle"
    >分類索引</h4>
    <IndexTitle
        id="sohin"
        title="分類索引"
        class="mb-2"
    />
    <IndexTitle
        class="mb-2"
        title="快速跳去分類"
        fontColor="black"
        bgColor="#E9EAEA"
    />

    <div class="w-100">
        <div class="row row-cols-2">
            <div
                class="col my-2"
                v-for="t in types"
                :key="t.id"
            >
                <a
                    :href="`#${t.id}`"
                    class=""
                >{{ t.label }}</a>
            </div>
        </div>
    </div>
    <div
        v-for="t in types"
        :key="t.id"
        class="mb-3"
    >

        <IndexTitle
            :id="t.id"
            class="mb-2"
            :title="t.label"
            fontColor="black"
            bgColor="#DFEBEB"
        />
        <div class="container">
            <div class="row  align-items-center">
                <template
                    v-for="c in t.children"
                    :key="c.id"
                >
                    <template v-if="routePageId != c.id">
                        <button
                            type="button"
                            class="btn btn-outline-primary me-2 mb-1 col-auto"
                            @click="toPage(`/hunlui/${c.id}`)"
                        >{{ c.label }}</button>
                    </template>
                    <template v-else>
                        <b class="col-auto">{{ c.label }}(目前頁面)</b>
                    </template>
                </template>
                <a
                    href="#sohin"
                    class="col-auto"
                >重新選分類</a>
            </div>
        </div>

    </div>
</template>
<style scoped></style>