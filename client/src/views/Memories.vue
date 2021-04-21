<template>
	<div>
		<AppNavbar />
		<h1>Memories Page</h1>
	</div>
</template>

<script>
import AppNavbar from '../components/AppNavbar.vue';
export default {
	name: 'Memories',
	components: {
		AppNavbar,
	},
};
</script>

<style>
#map {
	height: 650px;
	width: 500px;
	border-radius: 5px;
}
</style>
