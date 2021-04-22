<template>
	<div class="h-screen flex">
		<AppNavbar />
		<div
			class="md:w-2/5 flex flex-col justify-start md:m-5 rounded-lg sm:hidden md:block"
			id="map"
		></div>
		<div class="flex-1 ml-5 flex m-5 mr-5">
			<div class="flex-1 text-left m-3 overflow-hidden overflow-y-scroll">
				<h1 class="title text-4xl text-blue mb-10">Memories</h1>
				<MemoryCard
					title="Valentine's Day 2020 🍝"
					place_name="Maggiano's Little Italy"
					date_string="February 5, 2020"
					desc="We went on a lovely date to Maggianos Little Italy and got some delicious pasta. The waitress sat us next to the kitchen which was a bit annoying but you got to sit in a spot where you could see a little baby playing!"
				/>
				<MemoryCard
					title="Valentine's Day 2020 🍝"
					place_name="Maggiano's Little Italy"
					date_string="February 5, 2020"
					desc="We went on a lovely date to Maggianos Little Italy and got some delicious pasta. The waitress sat us next to the kitchen which was a bit annoying but you got to sit in a spot where you could see a little baby playing!"
				/>
				<MemoryCard
					title="Valentine's Day 2020 🍝"
					place_name="Maggiano's Little Italy"
					date_string="February 5, 2020"
					desc="We went on a lovely date to Maggianos Little Italy and got some delicious pasta. The waitress sat us next to the kitchen which was a bit annoying but you got to sit in a spot where you could see a little baby playing!"
				/>
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

// Mapbox Config
var mapboxgl = require('mapbox-gl');
// var MapboxGeocoder = require('mapbox-gl-geocoder');
import 'mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';

export default {
	name: 'Memories',
	components: {
		AppNavbar,
		MemoryCard,
	},
	data() {
		return {
			map: null,
			apiKey: process.env.VUE_APP_MAPBOX_API_KEY,
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
