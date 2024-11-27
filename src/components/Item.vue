<template>
    <div ref="el" :style="[style, { zIndex: 999 }]"
        :class="[isOnCanvas ? 'cursor-move group fixed touch-none' : 'flex flex-col justify-center items-center select-none', '']">
        <div class="flex flex-col justify-center items-center relative">
            <img :src="image" :alt="name" class="size-20" draggable="false" :style="'scale:' + scale" />
            <button v-if="isOnCanvas"
                class="absolute top-0 right-0 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center hover:bg-red-700 group-hover:flex hidden"
                @click.stop="removeItem">
                ×
            </button>
        </div>
    </div>
</template>

<script setup>
import { useDraggable } from '@vueuse/core';
import { ref } from 'vue';

const props = defineProps({
    image: String,
    name: String,
    id: Number,
    isOnCanvas: Boolean,
    x: Number,
    y: Number,
    scale: {
        type: Number,
        default: 1
    }
});

const emits = defineEmits(['add-to-canvas', 'remove-from-canvas']);

const el = ref(null);

const { x, y, style } = useDraggable(el, {
    initialValue: { x: props.x || 0, y: props.y || 0 }
});

const removeItem = () => {
    emits('remove-from-canvas', props.id);
};
</script>