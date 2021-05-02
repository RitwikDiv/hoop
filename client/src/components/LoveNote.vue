<template>
	<button :class="getRandomColor()">
		<p class="text-center font-medium p-2">
			{{ content }}
		</p>
	</button>
</template>

<script>
export default {
	name: 'LoveNote',
	props: ['content'],
	data() {
		return {
			baseBackgroundClass: 'rounded-lg h-48 w-0.3 m-5 p-2 ',
			colorSelection: [
				'bg-green-lightest',
				'bg-yellow-lightest',
				'bg-red-lightest',
				'bg-blue-lightest',
				'bg-pink-lightest',
			],
		};
	},
	methods: {
		getRandomColor() {
			const randomElement = this.colorSelection[
				Math.floor(Math.random() * this.colorSelection.length)
			];
			console.log(this.getRandomColor);
			return this.baseBackgroundClass + randomElement;
		},
	},
};
</script>

<style scoped></style>
