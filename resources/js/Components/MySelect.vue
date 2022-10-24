<template>
    <div>
        <select :class="contentClasses"  v-model="selectItem" @change="actionSelectItem">

            <option v-if="!Object.keys(defValue).length" :value="{}" selected >
                {{ placeholder }}
            </option>
            <option v-else :value="defValue" selected ></option>
            <option
                v-for="item in items"
                :key="item.id"
                :value="item"
                :selected = "item.id === selectItem.id ? 'true' : '' "
            >
                {{ item.name}}
            </option>
        </select>
    </div>

</template>

<script>
    import {isProxy, toRaw} from 'vue'

    export default {
        name: "MySelect",
        props: {
            items: Array,
            contentClasses: {
                type: Array,
                default: () => ['px-4', 'py-3', 'rounded-full', 'text-gray-900']
            },
            placeholder: {
                type: String,
                default: () => ''
            },
            defValue: {}
        },
        data() {
            return {
                selectItem: {}
            }
        },

        mounted() {

            if (isProxy(this.defValue)){
                this.selectItem = toRaw(this.defValue)
            }

            console.log('ssss',this.selectItem)

        },
        methods: {
            actionSelectItem() {
                this.$emit('updateSelect', this.selectItem);
            }
        }
    }
</script>

<style scoped>

</style>
