<template>
	<div class="p-3 bg-grey-lightest rounded-lg mb-4 mt-2 shadow" v-bind:id="id">
		<p class="mt-2 text-xl font-extrabold">
			{{ title }}
		</p>
		<p class="mt-4 text-md font-medium tracking-normal leading-loose">
			{{ desc }}
		</p>
		<div class="mt-4 mb-2 flex flex-row flex-wrap align-middle justify-between">
			<div class="meta">
				<p class="text-sm font-bold align-middle">
					<span class="date mr-1">{{
						new Date(date_string).toDateString()
					}}</span>
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
export default {
	name: 'MemoryCard',
	props: ['id', 'title', 'desc', 'place_name', 'date_string'],
	data() {
		return {
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
		deleteCard() {},
	},
};
</script>

<style scoped></style>
