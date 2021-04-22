<template>
	<div class="h-screen flex">
		<AppNavbar />
		<div
			class="md:w-2/5 bg-grey-darkest flex flex-col justify-center m-5 rounded-lg sm:invisible md:visible"
			id="map"
		/>
		<div class="flex-1 ml-5 flex overflow-hidden m-5 mr-10">
			<div class="flex-1 text-left overflow-y-scroll">
				<h1 class="title text-4xl text-blue mb-10">Memories</h1>
				<MemoryCard
					title="Valentine's Day 2020 🍝"
					place_name="Maggiano's Little Italy"
					date_string="February 5, 2020"
					desc="We went on a lovely date to Maggianos Little Italy and got some delicious pasta. The waitress sat us next to the kitchen which was a bit annoying but you got to sit in a spot where you could see a little baby playing!"
				/>
			</div>
		</div>
	</div>
</template>

<script>
import AppNavbar from '../components/AppNavbar.vue';
import MemoryCard from '../components/MemoryCard.vue';
export default {
	name: 'Memories',
	components: {
		AppNavbar,
		MemoryCard,
	},
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');
.title {
	font-family: 'Lobster', cursive;
}
</style>
