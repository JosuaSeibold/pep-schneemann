<template>
  <div class="flex h-screen">

    <!-- Canvas -->
    <div class="w-1/2 bg-zinc-50 flex flex-col">
      <h1 class="p-4">Canvas</h1>
    </div>

    <!-- Toolbox -->
    <div class="w-1/2 bg-zinc-100 flex flex-col p-4">
      <h1 class="mb-4">Toolbox</h1>

      <!-- Items -->
      <div class="flex flex-col flex-grow bg-slate-300 p-4">
        <h2 class="mb-4">Items</h2>

        <!-- Scrollable Items Container -->
        <div ref="container" class="relative flex-grow bg-slate-400 overflow-auto p-4">
          <Item v-for="item in items" :key="item.name" :image="item.link" :name="item.name" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import items from './assets/items.json';
import { ref, provide } from 'vue'
import Item from './components/Item.vue'

const container = ref(null)

provide('container', container)

items.forEach(item => {
  console.log(`Name: ${item.name}, Category: ${item.category}, Link: ${item.link}`);
});
</script>
