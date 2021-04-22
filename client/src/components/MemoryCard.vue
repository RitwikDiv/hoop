<template>
	<div
		class="shadow-sm bg-grey-lightest p-3 rounded-lg mb-2 mt-2"
		v-bind:id="id"
	>
		<p class="mt-2 text-xl font-extrabold">
			{{ title }}
		</p>
		<p class="mt-4 text-md font-medium tracking-normal leading-loose">
			{{ desc }}
		</p>
		<div class="mt-4 mb-2 flex flex-row flex-wrap align-middle justify-between">
			<div class="meta">
				<p class="text-sm font-bold align-middle">
					<span class="date mr-1">{{ date_string }}</span> ●
					<span class="ml-1 location">{{ place_name }}</span>
				</p>
			</div>
			<div class="options align-middle">
				<button
					@click="toggleEditing()"
					class="mr-3 focus:outline-none p-1 rounded-lg hover:bg-indigo-darkest hover:text-grey-lightest"
				>
					<font-awesome-icon :icon="['fas', 'pen']" class="text-md" />
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
		editMemory() {},
	},
};
</script>

<style scoped></style>
