<script
    setup
    lang='ts'
>
import SearchArea from "@/components/searchArea/SearchArea.vue";
import IndexTitle from '@/components/index/Title.vue'

const title = ref('下港')
const pronounce = ref('ē-káng')
const voice = ref('')

enum typeCode {
    'adj' = '形容詞',
    'verb' = '動詞',
    'noun' = '名詞'
}


const translation = ref([
    {
        type: 'adj',
        explain: '愁眉苦臉。形容憂傷、愁苦的神色。',
        example: {
            sutian: '彼層代誌逐家都想欲共伊放予袂記得，你是閣餾彼欲死？',
            pinyin: 'Hit tsân tāi-tsì ta̍k-ke to siūnn-beh kā i pàng hōo bē-kì--tit, lí sī koh liū he beh-sí?',
            tw: '(那件事情大家都想要遺忘，你又重提是要幹什麼？)',
            voice: ''
        },
        antonym: [
            {
                id: 1,
                value: '快活 khuìnn-ua̍h'
            }
        ]
    },
    {
        type: 'verb',
        explain: '用於動詞後，表示程度極高。',
        example: {
            sutian: '阮老爸氣甲欲死。',
            pinyin: 'Guán lāu-pē khì kah beh-sí. ',
            tw: '(那件事情大家都想要遺忘，你又重提是要幹什麼？)',
            voice: ''
        },
        antonym: [
        ]
    },
])

const types = ref([
    {
        id: 1,
        value: '人及人體——反應、表情'
    },
    {
        id: 2,
        value: '形容用語——境況、狀態-擬人'
    },
    {
        id: 3,
        value: '語言、泛稱——一般動詞-靜態動詞'
    },
])

</script>
<template>
    <section class="container-fluid mb-5">
        <div class="row justify-content-center">
            <div class="col-12">
                <header>
                    <h1>{{ title }}</h1>
                    <div class="d-flex align-items-center">

                        <h5>{{ pronounce }}</h5>
                        <Icon
                            name="ic:baseline-volume-down"
                            color="red"
                            size="26"
                        ></Icon>
                    </div>
                </header>

                <table class="table table-borderless">
                    <tbody>
                        <tr>
                            <td class="text-nowrap fw-bold"><span class="bg-light p-2">釋義</span></td>
                            <td>
                                <ol>
                                    <li
                                        v-for="t in translation"
                                        :key="t"
                                        class="mb-3"
                                    >
                                        <div class="d-flex align-items-center">
                                            <div
                                                class="col-auto p-1 me-1"
                                                style="border: 2px solid #dee2e6;"
                                            >{{ typeCode[t.type] }}</div>
                                            <div class="fw-bold">{{ t.explain }}</div>
                                        </div>
                                        <template v-if="Object.keys(t.example).length > 0">
                                            <div class="text-secondary mt-2">
                                                用例：
                                            </div>
                                            <div
                                                class="py-3 px-3"
                                                style="border:1px solid #dee2e6 "
                                            >
                                                <p>
                                                    {{ t.example.sutian }}
                                                </p>
                                                <p>
                                                    {{ t.example.pinyin }} <Icon
                                                        name="ic:baseline-volume-down"
                                                        color="red"
                                                        size="26"
                                                    ></Icon>
                                                </p>
                                                <p class="text-secondary">
                                                    {{ t.example.tw }}
                                                </p>
                                            </div>
                                        </template>
                                        <template v-if="t.antonym.length > 0">
                                            <div class="text-secondary mt-2">
                                                反義：
                                            </div>
                                            <div
                                                v-for="(a, aIndex) in t.antonym"
                                                :key="a.id"
                                                class="d-flex mt-2"
                                            >
                                                <div class="numberCircle me-2">{{ aIndex + 1 }}</div>
                                                <NuxtLink class="link">
                                                    {{ a.value }}
                                                </NuxtLink>
                                            </div>

                                        </template>
                                    </li>
                                </ol>

                            </td>
                        </tr>
                        <tr>
                            <td class="text-nowrap fw-bold"><span class="bg-light p-2">分類</span></td>
                            <td>
                                <nuxt-link
                                    class="me-2 text-nowrap"
                                    :to="`hunlui/${t.id}`"
                                    v-for="t in types"
                                    :key="t.id"
                                >{{ t.value }}</nuxt-link>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <section class="col-12">
                <IndexTitle
                    bgColor="#E3EAEA"
                    title="搜尋辭典"
                    fontColor="black"
                    class="my-2"
                ></IndexTitle>
                <SearchArea></SearchArea>
            </section>
        </div>
    </section>
  
</template>
<style scoped>
.numberCircle {
    border-radius: 50%;
    width: 26px;
    height: 26px;
    border: 1px solid black;
    text-align: center;

}
</style>