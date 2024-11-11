<template>
	<div class="circle"></div>
</template>

<script>
export default {
	name: 'Schneemann'
}
</script>

<style scoped>
.circle {
	width: 200px;
	height: 200px;
	background-color: blue;
	border-radius: 50%;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
}
</style>