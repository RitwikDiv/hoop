<template>
	<button :class="getRandomColor" v-if="!deleted">
		<div class="flex flex-col">
			<p
				class="text-md p-2 font-medium tracking-normal leading-loose text-center"
			>
				{{ content }}
			</p>
			<div class="text-right mb-1">
				<button
					@click.prevent="handleDelete()"
					class="focus:outline-none p-2 rounded-lg hover:bg-indigo-darkest hover:text-grey-lightest"
				>
					<font-awesome-icon :icon="['fas', 'trash']" class="text-md" />
				</button>
			</div>
		</div>
	</button>
</template>

<script>
const axios = require('axios');
export default {
	name: 'LoveNote',
	props: ['id', 'content', 'date_string'],
	data() {
		return {
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
			return (
				'p-1 w-0.3 bg-grey-lightest rounded-lg m-3 shadow ' + randomElement
			);
		},
	},
};
</script>

<style scoped></style>
