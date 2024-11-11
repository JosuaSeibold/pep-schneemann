<script setup>
import Item from './item.vue';
</script>

<template>
	<div class="tool-box">
		<!-- Add your toolbox content here -->
		<p>Toolbox Content</p>
		<Item />
		<slot></slot>
	</div>
</template>

<script>
export default {
	name: 'ToolBox'
}
</script>

<style scoped>
.tool-box {
	position: fixed;
	right: 0;
	top: 5%;
	height: 90%;
	width: 200px; /* Adjust the width as needed */
	background-color: #f0f0f0; /* Adjust the background color as needed */
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
	padding: 10px;
	overflow-y: auto;
}
</style>