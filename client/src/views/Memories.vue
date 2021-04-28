<template>
	<div class="h-screen flex">
		<AppNavbar />
		<div class="md:w-2/5 h-0.95 mt-5 mb-5 mr-5 " id="map"></div>
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
					loc: [-87.629, 41.878],
					desc:
						'We went on a lovely date to Maggianos Little Italy and got some delicious pasta. The waitress sat us next to the kitchen which was a bit annoying but you got to sit in a spot where you could see a little baby playing!',
				},
				{
					id: 1,
					title: "Valentine's Day 🍝",
					date_string: '02/14/2020',
					place_name: "Maggiano's Little Italy",
					loc: [-87.629, 41.878],
					desc:
						'We went on a lovely date to Maggianos Little Italy and got some delicious pasta. The waitress sat us next to the kitchen which was a bit annoying but you got to sit in a spot where you could see a little baby playing!',
				},
				{
					id: 1,
					title: "Valentine's Day 🍝",
					date_string: '02/14/2020',
					place_name: "Maggiano's Little Italy",
					loc: [-87.629, 41.878],
					desc:
						'We went on a lovely date to Maggianos Little Italy and got some delicious pasta. The waitress sat us next to the kitchen which was a bit annoying but you got to sit in a spot where you could see a little baby playing!',
				},
				{
					id: 1,
					title: "Valentine's Day 🍝",
					date_string: '02/14/2020',
					place_name: "Maggiano's Little Italy",
					loc: [-87.629, 41.878],
					desc:
						'We went on a lovely date to Maggianos Little Italy and got some delicious pasta. The waitress sat us next to the kitchen which was a bit annoying but you got to sit in a spot where you could see a little baby playing!',
				},
				{
					id: 1,
					title: "Valentine's Day 🍝",
					date_string: '02/14/2020',
					place_name: "Maggiano's Little Italy",
					loc: [-87.629, 41.878],
					desc:
						'We went on a lovely date to Maggianos Little Italy and got some delicious pasta. The waitress sat us next to the kitchen which was a bit annoying but you got to sit in a spot where you could see a little baby playing!',
				},
			],
		};
	},
	mounted() {
		this.createMap();
		this.addMarkers();
	},
	methods: {
		async createMap() {
			mapboxgl.accessToken = this.apiKey;
			this.map = new mapboxgl.Map({
				container: 'map',
				style: 'mapbox://styles/ritwikdiv/ckmttqrnh4chg17s44d08w26q',
				minzoom: 1.3,
				center: [-87.629, 41.878], // Manhattan
				zoom: 12,
			});
		},
		addMarkers() {
			for (var memory of this.memories) {
				var el = document.createElement('a');
				el.href = `#${memory.id}`;
				el.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#355070" class="bi bi-geo-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999zm2.493 8.574a.5.5 0 0 1-.411.575c-.712.118-1.28.295-1.655.493a1.319 1.319 0 0 0-.37.265.301.301 0 0 0-.057.09V14l.002.008a.147.147 0 0 0 .016.033.617.617 0 0 0 .145.15c.165.13.435.27.813.395.751.25 1.82.414 3.024.414s2.273-.163 3.024-.414c.378-.126.648-.265.813-.395a.619.619 0 0 0 .146-.15.148.148 0 0 0 .015-.033L12 14v-.004a.301.301 0 0 0-.057-.09 1.318 1.318 0 0 0-.37-.264c-.376-.198-.943-.375-1.655-.493a.5.5 0 1 1 .164-.986c.77.127 1.452.328 1.957.594C12.5 13 13 13.4 13 14c0 .426-.26.752-.544.977-.29.228-.68.413-1.116.558-.878.293-2.059.465-3.34.465-1.281 0-2.462-.172-3.34-.465-.436-.145-.826-.33-1.116-.558C3.26 14.752 3 14.426 3 14c0-.599.5-1 .961-1.243.505-.266 1.187-.467 1.957-.594a.5.5 0 0 1 .575.411z"/>
</svg>`;
				new mapboxgl.Marker(el).setLngLat(memory.loc).addTo(this.map);
			}
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
#map {
	top: 0;
	bottom: 0;
}
</style>
