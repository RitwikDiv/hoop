<template>
	<button
		:class="getRandomColor"
		v-if="!deleted"
		v-on:dblclick="(counter += 1), handleDelete()"
	>
		<p class="p-2 font-medium tracking-normal leading-loose text-center">
			{{ content }}
		</p>
	</button>
</template>

<script>
const axios = require('axios');
export default {
	name: 'LoveNote',
	props: ['id', 'content', 'date_string'],
	data() {
		return {
			counter: 0,
			deleted: false,
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
		handleDelete() {
			if (confirm('Do you really want to delete?')) {
				let apiURL = `api/notes/${this.id}`;
				axios
					.delete(apiURL, {
						headers: {
							'Content-Type': 'application/json',
							'x-auth-token': localStorage.jwtToken,
						},
					})
					.then(() => (this.deleted = true))
					.catch((err) => {
						console.log(err);
					});
			}
		},
	},
	computed: {
		getRandomColor: function() {
			const randomElement = this.colorSelection[
				Math.floor(Math.random() * this.colorSelection.length)
			];
			console.log(this.getRandomColor);
			return 'p-2 w-0.3 rounded-lg m-2 ' + randomElement;
		},
	},
};
</script>

<style scoped></style>
