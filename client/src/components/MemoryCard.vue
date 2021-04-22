<template>
	<div class="bg-grey-lightest p-3 rounded-lg mb-2 mt-2" v-bind:id="id">
		<p class="mt-2 text-xl font-extrabold">
			{{ title }}
		</p>
		<p class="mt-4 text-md font-medium tracking-normal leading-loose">
			{{ desc }}
		</p>
		<div class="mt-4 mb-2 flex flex-row align-middle justify-between">
			<div class="meta">
				<p class="text-sm font-bold align-middle">
					<span class="date mr-3">{{ date_string }}</span> ●
					<span class="ml-3 location">{{ place_name }}</span>
				</p>
			</div>
			<div class="options align-middle">
				<button
					class="mr-3 focus:outline-none p-1 rounded-lg hover:bg-indigo-darkest hover:text-grey-lightest"
				>
					<font-awesome-icon :icon="['fas', 'pen']" class="text-md" />
				</button>
				<button
					class="ml-3 mr-2 p-1 rounded-lg hover:bg-indigo-darkest hover:text-grey-lightest"
				>
					<font-awesome-icon :icon="['fas', 'trash-alt']" class="text-md" />
				</button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'MemoryCard',
	props: ['id', 'title', 'desc', 'place_name', 'date_string'],
};
</script>

<style lang="scss" scoped></style>
