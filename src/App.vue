<template>
  <div class="flex h-screen">
    <div class="w-3/4 bg-sky-900 flex flex-col">
      <h1 class="p-4 absolute text-xl font-bold text-red-700">Canvas</h1>
      <Canvas :canvasItems="canvasItems" @remove-from-canvas="removeFromCanvas" @update-position="updateItemPosition" />
    </div>

    <div class="w-1/4 relative bg-red-200 flex flex-col">
      <Toolbox :toolboxItems="toolboxItems" @add-to-canvas="addToCanvas" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import items from './assets/items.json';
import Canvas from './components/Canvas.vue';
import Toolbox from './components/Toolbox.vue';

const allItems = items.map((item, index) => ({
  ...item,
  id: index,
}));

const toolboxItems = ref([...allItems]);
const canvasItems = ref([]);

const addToCanvas = (itemId) => {
  const itemIndex = toolboxItems.value.findIndex((item) => item.id === itemId);
  if (itemIndex !== -1) {
    const item = toolboxItems.value[itemIndex];
    toolboxItems.value.splice(itemIndex, 1);

    const canvasElement = document.querySelector('.canvas-container');
    const snowmanElement = document.querySelector('.snowman-container > div');

    if (canvasElement && snowmanElement) {
      const canvasRect = canvasElement.getBoundingClientRect();
      const snowmanRect = snowmanElement.getBoundingClientRect();

      // Calculate initial position to center the item on the snowman
      const x = snowmanRect.left - canvasRect.left + (snowmanRect.width / 2) - 45; // Adjust for half the item width (90px / 2)
      const y = snowmanRect.top - canvasRect.top + (snowmanRect.height / 2) - 45; // Adjust for half the item height (90px / 2)

      // Add item to Canvas with initial position
      canvasItems.value.push({
        ...item,
        x,
        y,
      });
    } else {
      // Fallback position if elements are not found
      canvasItems.value.push({
        ...item,
        x: 0,
        y: 0,
      });
    }
  }
};


const removeFromCanvas = (itemId) => {
  const itemIndex = canvasItems.value.findIndex((item) => item.id === itemId);
  if (itemIndex !== -1) {
    const item = canvasItems.value[itemIndex];
    canvasItems.value.splice(itemIndex, 1);

    // Return item to Toolbox
    toolboxItems.value.push(item);
  }
};

const updateItemPosition = ({ id, x, y }) => {
  const item = canvasItems.value.find((item) => item.id === id);
  if (item) {
    item.x = x;
    item.y = y;
  }
};
</script>
