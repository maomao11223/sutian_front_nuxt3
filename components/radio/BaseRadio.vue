<script
    setup
    lang='ts'
>
const props = defineProps({
    label: {
        type: String,
        default: ''
    },
    value: {
        default:false
    }
})

const { value } = toRefs(props);
</script>
<template>
    <div class="form-check">
        <input
            class="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
            v-model="value"
        >
        
        <label
            class="form-check-label"
            for="flexRadioDefault1"
        >
            {{ label }}
        </label>
    </div>
</template>
<style scoped></style>