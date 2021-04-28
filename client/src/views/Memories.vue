<template>
	<div class="h-screen flex">
		<AppNavbar />
		<div
			class="md:w-2/5  h-0.95 flex flex-col justify-start mt-5 mb-5 mr-5 xs:hidden md:block overflow-hidden"
			id="map"
		></div>
		<div class="flex-1 ml-5 flex m-5 mr-5">
			<div class="flex-1 text-left m-3 overflow-hidden overflow-y-scroll">
				<button
					@click="create_memory = true"
					v-if="!create_memory"
					class="p-2 mb-2"
				>
					<font-awesome-icon :icon="['fas', 'plus']" class="text-lg" />
				</button>
				<button
					@click="create_memory = false"
					v-if="create_memory"
					class="p-2 mb-2"
				>
					<font-awesome-icon :icon="['fas', 'minus']" class="text-lg" />
				</button>
				<MemoryCreate v-if="create_memory" />
				<div class="h-px bg-grey-light mb-4"></div>
				<div v-for="memory in memories" :key="memory.id">
					<MemoryCard
						:id="memory.id"
						:title="memory.title"
						:place_name="memory.place_name"
						:date_string="memory.date_string"
						:desc="memory.desc"
					/>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import AppNavbar from '../components/AppNavbar.vue';
import MemoryCard from '../components/MemoryCard.vue';
import MemoryCreate from '../components/MemoryCreate.vue';

// Mapbox Config
var mapboxgl = require('mapbox-gl');
import 'mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';

export default {
	name: 'Memories',
	components: {
		AppNavbar,
		MemoryCard,
		MemoryCreate,
	},
	data() {
		return {
			map: null,
			apiKey: process.env.VUE_APP_MAPBOX_API_KEY,
			create_memory: false,
			memories: [
				{
					id: 1,
					title: "Valentine's Day 🍝",
					date_string: '02/14/2020',
					place_name: "Maggiano's Little Italy",
					desc:
						'We went on a lovely date to Maggianos Little Italy and got some delicious pasta. The waitress sat us next to the kitchen which was a bit annoying but you got to sit in a spot where you could see a little baby playing!',
				},
				{
					id: 1,
					title: "Valentine's Day 🍝",
					date_string: '02/14/2020',
					place_name: "Maggiano's Little Italy",
					desc:
						'We went on a lovely date to Maggianos Little Italy and got some delicious pasta. The waitress sat us next to the kitchen which was a bit annoying but you got to sit in a spot where you could see a little baby playing!',
				},
				{
					id: 1,
					title: "Valentine's Day 🍝",
					date_string: '02/14/2020',
					place_name: "Maggiano's Little Italy",
					desc:
						'We went on a lovely date to Maggianos Little Italy and got some delicious pasta. The waitress sat us next to the kitchen which was a bit annoying but you got to sit in a spot where you could see a little baby playing!',
				},
				{
					id: 1,
					title: "Valentine's Day 🍝",
					date_string: '02/14/2020',
					place_name: "Maggiano's Little Italy",
					desc:
						'We went on a lovely date to Maggianos Little Italy and got some delicious pasta. The waitress sat us next to the kitchen which was a bit annoying but you got to sit in a spot where you could see a little baby playing!',
				},
				{
					id: 1,
					title: "Valentine's Day 🍝",
					date_string: '02/14/2020',
					place_name: "Maggiano's Little Italy",
					desc:
						'We went on a lovely date to Maggianos Little Italy and got some delicious pasta. The waitress sat us next to the kitchen which was a bit annoying but you got to sit in a spot where you could see a little baby playing!',
				},
			],
		};
	},
	mounted() {
		this.createMap();
	},
	methods: {
		createMap() {
			mapboxgl.accessToken = this.apiKey;
			this.map = new mapboxgl.Map({
				container: 'map',
				style: 'mapbox://styles/ritwikdiv/ckmttqrnh4chg17s44d08w26q',
				minzoom: 1.3,
				center: [-87.629, 41.878], // Manhattan
				zoom: 12,
			});
		},
	},
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');
.title {
	font-family: 'Lobster', cursive;
}
::-webkit-scrollbar {
	width: 0;
	background: transparent;
}
</style>
