<template>
    <div class="absolute inset-0 pointer-events-none overflow-hidden">
        <div v-for="flake in flakes" :key="flake.id" :style="flake.style"
            class="bg-white rounded-full absolute animate-fall"></div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';

const flakes = ref([]);

function createFlake() {
    const id = Math.random().toString(36).substr(2, 9);
    const size = Math.random() * 2 + 1; // 1 to 3 pixels
    const left = Math.random() * 100; // 0% to 100%
    const duration = Math.random() * 5 + 5; // 5 to 10 seconds

    const flake = {
        id,
        style: {
            width: `${size}px`,
            height: `${size}px`,
            left: `${left}%`,
            '--duration': `${duration}s`,
        },
    };

    flakes.value.push(flake);

    // Remove the flake after its animation duration
    setTimeout(() => {
        flakes.value = flakes.value.filter((f) => f.id !== id);
    }, duration * 1000);
}

onMounted(() => {
    setInterval(() => {
        createFlake();
    }, 50);
});
</script>

<style>
@keyframes fall {
    0% {
        top: -10%;
        opacity: 1;
    }

    100% {
        top: 110%;
        opacity: 0;
    }
}

.animate-fall {
    animation: fall var(--duration) linear infinite;
}
</style>