<template>
	<div class="bg-grey-lighter md:w-48 flex flex-col">
		<h1
			class="sm:text-xl md:text-4xl font-extrabold text-center mt-5 title text-grey-darkest"
		>
			Hoop
		</h1>
		<router-link to="/notes" class="p-5">Notes</router-link>
		<router-link to="/memories">Memories</router-link>
		<router-link to="/login">Sign Out</router-link>
	</div>
</template>

<script>
export default {
	name: 'AppNavbar',
	data() {
		return {};
	},
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');
.title {
	font-family: 'Lobster', cursive;
}
hr {
	width: 30%;
}
</style>
