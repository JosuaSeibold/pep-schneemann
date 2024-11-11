<template>
    <div ref="el" :style="[style]" class="absolute flex flex-col justify-center items-center cursor-move select-none">
        <div class="flex flex-col justify-center items-center">
            <!-- <span class="text-zinc-700 text-sm subpixel-antialiased">{{ name }}</span> -->
            <img :src="image" alt="Item Image" class="size-[90px]" draggable="false" />
        </div>
    </div>
</template>

<script setup>
import { ref, inject } from 'vue'
import { useDraggable } from '@vueuse/core'

const props = defineProps({
    image: String,
    name: String,
})

const el = ref(null)

const container = inject('container', null)

const { x, y, style } = useDraggable(el, {
    initialValue: { x: 0, y: 0 },
    containerElement: container,
})
</script>