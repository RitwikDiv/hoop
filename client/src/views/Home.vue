<template>
	<div class="h-screen flex">
		<AppNavbar />
		<div class="p-2 ml-10 flex flex-col w-full m-auto">
			<div class="flex flex-row justify-center mt-10 mb-10">
				<div class="w-1/2 m-auto">
					<p class="text-left text-4xl font-extrabold font-serif">
						Welcome to Hoop Boop!
					</p>
					<p class="font-medium text-md leading-loose text-left mt-5">
						As life goes on and we make millions of memories, it is hard to lose
						track of the ones that matter. This project aims to helps recollect
						the most cherished moments and affirmations you have received
						through your lifetime. Go out there and make some wonderful
						memories!
					</p>
				</div>
				<div class="w-1/2">
					<img
						:src="images.intro"
						class="ml-20 h-1/2 w-1/2"
						alt="Living Life!"
					/>
				</div>
			</div>
			<div class="h-px bg-grey-light mr-20"></div>
			<div class="flex flex-row sm:flex-wrap justify-around mt-10">
				<div class="w-1/3 shadow p-2 bg-green-lightest rounded-lg">
					<div class="flex flex-row justify-start p-2 mt-5 ml-2">
						<font-awesome-icon
							:icon="['fas', 'globe-asia']"
							class="text-xl mr-10"
						/>
						<p class="font-bold text-lg">Cherish your memories!</p>
					</div>
					<div class="mt-3 ml-2">
						<p class="font-medium leading-loose text-left p-2">
							Click on the globe icon in the menu to save your precious memories
							and their locations on the map! Don't be afraid to reach out and
							ask people to hang out!
						</p>
					</div>
				</div>
				<div class="w-1/3 shadow p-2 bg-yellow-lightest rounded-lg">
					<div class="flex flex-row justify-start p-2 mt-5 ml-2">
						<font-awesome-icon
							:icon="['fas', 'layer-group']"
							class="text-xl mr-10"
						/>
						<p class="font-bold text-lg">Save your notes!</p>
					</div>
					<div class="mt-3 ml-2">
						<p class="font-medium leading-loose text-left p-2">
							Click on the notes icon in the menu to save all the wonderful
							messages, and compliments you have recieved! Don't forget to
							compliment wonderful people in your life!
						</p>
					</div>
				</div>
			</div>
			<div class="h-px bg-grey-light mr-20 mt-10"></div>
		</div>
	</div>
</template>

<script>
import AppNavbar from '../components/AppNavbar.vue';

export default {
	name: 'Home',
	components: {
		AppNavbar,
	},
	data() {
		return {
			images: {
				intro: require('../assets/img/intro.png'),
			},
		};
	},
};
</script>

<style lang="scss" scoped></style>
