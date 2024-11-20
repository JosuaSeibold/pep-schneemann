<template>
    <div class="canvas-container w-full h-screen">
        <img :src="bg_image" class="absolute top-0 left-0 w-full h-full z-0" />
        <Snowfall class="z-10" />
        <Snowman class="z-20 md:pt-[790px] md:pl-96" />
        <Item class="z-30" v-for="item in canvasItems" :key="item.id" :id="item.id" :image="item.link" :name="item.name"
            :is-on-canvas="true" :x="item.x" :y="item.y" @remove-from-canvas="removeFromCanvas"
            @update-position="updateItemPosition" />
    </div>
</template>

<script setup>
import Item from './Item.vue';
import Snowfall from './Snowfall.vue';
import Snowman from './Snowman.vue';

const bg_image = 'https://i.postimg.cc/9F3PVnb5/Firefly-20241117183349.png';

const props = defineProps({
    canvasItems: {
        type: Array,
        required: true,
    },
});

const emits = defineEmits(['remove-from-canvas', 'update-position']);

const removeFromCanvas = (itemId) => {
    emits('remove-from-canvas', itemId);
};

const updateItemPosition = (data) => {
    emits('update-position', data);
};
</script>