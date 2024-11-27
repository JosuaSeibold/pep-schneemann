<template>
    <div class="flex flex-col p-4">
        <h3 class="text-green-700">Toolbox</h3>
        <div v-for="(items, category) in sortedItems" :key="category" class="mb-6">
            <h4 class="text-red-600">
                {{ getCategoryTitle(category) }}
            </h4>
            <div class="flex flex-wrap gap-2">
                <Item v-for="item in items" :key="item.id" :id="item.id" :image="item.link" :name="item.name"
                    :is-on-canvas="false" @click="addToCanvas(item.id)" class="cursor-pointer"/>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import Item from './Item.vue';

const props = defineProps({
    toolboxItems: {
        type: Array,
        required: true,
    },
});

const emits = defineEmits(['add-to-canvas']);

const sortedItems = computed(() => {
    return props.toolboxItems.reduce((acc, item) => {
        if (!acc[item.category]) {
            acc[item.category] = [];
        }
        acc[item.category].push(item);
        return acc;
    }, {});
});

const addToCanvas = (itemId) => {
    emits('add-to-canvas', itemId);
};

const categoryTitles = {
    hat: 'Hüte',
    nose: 'Nasen',
};

const getCategoryTitle = (category) => {
    return categoryTitles[category] || category.charAt(0).toUpperCase() + category.slice(1);
};
</script>