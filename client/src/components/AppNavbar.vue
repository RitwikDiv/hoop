<template>
	<div class="bg-grey-lightest md:w-36 flex flex-col justify-center">
		<router-link to="/user" class="px-3">
			<button
				class="text-indigo-darker text-md px-4 py-2 hover:bg-indigo-darkest hover:text-grey-lightest rounded-lg"
			>
				<font-awesome-icon
					:icon="['fas', 'user']"
					class="text-xl hover:text-white"
				/>
			</button>
		</router-link>
		<router-link to="/create" class="mt-10 px-3">
			<button
				class="text-green-dark text-md px-4 py-2 hover:bg-indigo-darkest hover:text-grey-lightest rounded-lg"
			>
				<font-awesome-icon :icon="['fas', 'plus-square']" class="text-xl" />
			</button>
		</router-link>
		<router-link to="/notes" class="mt-10 px-3">
			<button
				class="text-orange text-md px-4 py-2 hover:bg-indigo-darkest hover:text-grey-lightest rounded-lg"
			>
				<font-awesome-icon :icon="['fas', 'layer-group']" class="text-xl" />
			</button>
		</router-link>
		<router-link to="/memories" class="mt-10 px-3">
			<button
				class="text-blue text-md px-4 py-2 hover:bg-indigo-darkest hover:text-grey-lightest rounded-lg"
			>
				<font-awesome-icon :icon="['fas', 'globe-asia']" class="text-xl" />
			</button>
		</router-link>
		<router-link to="/login" class="mt-10 px-3">
			<button
				class="text-indigo-darker text-md px-4 py-2 hover:bg-indigo-darkest hover:text-grey-lightest rounded-lg"
			>
				<font-awesome-icon :icon="['fas', 'sign-out-alt']" class="text-xl" />
			</button>
		</router-link>
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
</style>
