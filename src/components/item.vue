<template>
	<div
		class="draggable"
		:style="{ top: position.y + 'px', left: position.x + 'px' }"
		@mousedown="startDrag"
	>
		Drag me!
	</div>
</template>

<script>
export default {
	name: 'Item',
	data() {
		return {
			position: { x: 0, y: 0 },
			dragging: false,
			offset: { x: 0, y: 0 }
		};
	},
	methods: {
		startDrag(event) {
			this.dragging = true;
			this.offset = {
				x: event.clientX - this.position.x,
				y: event.clientY - this.position.y
			};
			document.addEventListener('mousemove', this.onDrag);
			document.addEventListener('mouseup', this.stopDrag);
		},
		onDrag(event) {
			if (this.dragging) {
				this.position = {
					x: event.clientX - this.offset.x,
					y: event.clientY - this.offset.y
				};
			}
		},
		stopDrag() {
			this.dragging = false;
			document.removeEventListener('mousemove', this.onDrag);
			document.removeEventListener('mouseup', this.stopDrag);
		}
	}
};
</script>

<style scoped>
.draggable {
	z-index: 1000;
	position: absolute;
	width: 100px;
	height: 100px;
	background-color: lightblue;
	cursor: grab;
}
</style>