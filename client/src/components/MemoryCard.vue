<template>
	<div
		class="p-3 bg-grey-lightest rounded-lg mb-4 mt-2 shadow"
		v-bind:id="id"
		v-if="!deleted"
	>
		<p class="p-2 text-xl font-extrabold">
			{{ title }}
		</p>
		<p class="p-2 text-md font-medium tracking-normal leading-loose">
			{{ desc }}
		</p>
		<div class="ml-2 flex flex-row flex-wrap align-middle justify-between">
			<div class="meta align-middle">
				<p class="text-sm font-bold p-2">
					<span class="date">{{ new Date(date_string).toDateString() }}</span>
					●
					<span class="ml-1 location">{{ place_name }}</span>
				</p>
			</div>
			<div class="options align-middle">
				<button
					@click="deleteCard()"
					class="mr-3 focus:outline-none p-2 rounded-lg hover:bg-indigo-darkest hover:text-grey-lightest"
				>
					<font-awesome-icon :icon="['fas', 'trash']" class="text-md" />
				</button>
			</div>
		</div>
	</div>
</template>

<script>
const axios = require('axios');
export default {
	name: 'MemoryCard',
	props: ['id', 'title', 'desc', 'place_name', 'date_string'],
	data() {
		return {
			deleted: false,
			editing: false,
			cardInfo: {
				title: this.title,
				desc: this.desc,
				place_name: this.place_name,
				date_string: this.date_string,
				id: this.id,
			},
		};
	},
	methods: {
		deleteCard() {
			if (confirm('Do you really want to delete?')) {
				let apiURL = `api/memories/${this.id}`;
				axios
					.delete(apiURL, {
						headers: {
							'Content-Type': 'application/json',
							'x-auth-token': localStorage.jwtToken,
						},
					})
					.then(() => {
						this.deleted = true;
					})
					.catch((err) => {
						console.log(err);
					});
			}
		},
	},
};
</script>

<style scoped></style>
