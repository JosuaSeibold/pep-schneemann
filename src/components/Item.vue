<template>
    <div ref="el" :style="[style, { zIndex: 999 }]"
        :class="[isOnCanvas ? 'absolute cursor-move group' : '', 'flex flex-col justify-center items-center select-none']"
        @mousedown="onMouseDown" @touchstart="onTouchStart">
        <div class="flex flex-col justify-center items-center relative">
            <img :src="image" :alt="name" class="size-20" draggable="false" />
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
import { computed, onMounted, ref, watch } from 'vue';

const props = defineProps({
    image: String,
    name: String,
    id: Number,
    isOnCanvas: Boolean,
    x: Number,
    y: Number,
});

const emits = defineEmits(['add-to-canvas', 'remove-from-canvas', 'update-position']);

const el = ref(null);

const { x: dragX, y: dragY, style } = useDraggable(el, {
    initialValue: { x: props.x || 0, y: props.y || 0 },
    disabled: computed(() => !props.isOnCanvas),
    onMove: (position) => {
        if (!snowmanElement || !canvasElement) return;

        // Constrain the position
        position.x = Math.max(minX, Math.min(position.x, maxX));
        position.y = Math.max(minY, Math.min(position.y, maxY));
    },
});

let snowmanElement = null;
let canvasElement = null;
let minX = 0;
let maxX = 0;
let minY = 0;
let maxY = 0;

onMounted(() => {
    snowmanElement = document.querySelector('.snowman-container');
    canvasElement = document.querySelector('.canvas-container');

    if (snowmanElement && canvasElement && el.value) {
        const snowmanRect = snowmanElement.getBoundingClientRect();
        const canvasRect = canvasElement.getBoundingClientRect();

        // Calculate boundaries relative to the Canvas
        minX = snowmanRect.left - canvasRect.left;
        maxX = minX + snowmanRect.width - el.value.offsetWidth;
        minY = snowmanRect.top - canvasRect.top;
        maxY = minY + snowmanRect.height - el.value.offsetHeight;
    }
});

if (props.isOnCanvas) {
    watch(
        () => ({ x: dragX.value, y: dragY.value }),
        (newPosition) => {
            emits('update-position', { id: props.id, ...newPosition });
        }
    );
}

const removeItem = () => {
    emits('remove-from-canvas', props.id);
};

const onMouseDown = () => {
    if (!props.isOnCanvas) {
        emits('add-to-canvas', props.id);
    }
};

const onTouchStart = () => {
    if (!props.isOnCanvas) {
        emits('add-to-canvas', props.id);
    }
};
</script>