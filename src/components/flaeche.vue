<template>
	<div>
		<Schneemann />
		<slot></slot>
	</div>
</template>

<script>
import Schneemann from './schneemann.vue';

export default {
	name: 'Flaeche',
	components: {
		Schneemann
	}
};
</script>

<style scoped>
/* Add your styles here */
</style>