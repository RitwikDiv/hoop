<template>
	<div class="h-screen flex">
		<AppNavbar />
		<div class="md:w-2/5 flex flex-col justify-center">
			<img
				:src="images.notes"
				class="ml-16 w-3/4 h-3/4"
				alt="Couple sending messages to each other!"
			/>
		</div>
		<div
			class="w-3/5 flex-1 text-left m-3 mr-10 mt-10 overflow-y-auto overflow-x-hidden"
		>
			<button @click="create_note = true" v-if="!create_note" class="mb-2">
				<font-awesome-icon :icon="['fas', 'plus']" class="text-lg" />
			</button>
			<button @click="create_note = false" v-if="create_note" class="mb-2">
				<font-awesome-icon :icon="['fas', 'minus']" class="text-lg" />
			</button>
			<form class="flex flex-col mb-5 mt-5" v-if="create_note">
				<p class="font-bold text-md text-left mb-5 text-xl">
					Create a note
				</p>
				<textarea
					class="p-2 mb-3 font-bold text-md border-2 rounded-lg"
					placeholder="Save compliments, messages and other love notes you have gotten over time!"
					rows="3"
					required
				/>
				<button
					class="p-2 border-2 text-indigo-darkest border-indigo-darkest hover:text-grey-lightest hover:bg-indigo-darkest rounded-lg font-bold"
				>
					Save
				</button>
			</form>
			<div class="h-px bg-grey-light mb-4"></div>
			<LoveNote
				v-for="note in notes"
				:key="note.id"
				:content="note.desc"
				:date_string="note.date_string"
			/>
		</div>
	</div>
</template>

<script>
import AppNavbar from '../components/AppNavbar.vue';
import LoveNote from '../components/LoveNote.vue';
export default {
	name: 'Notes',
	components: { AppNavbar, LoveNote },
	data() {
		return {
			create_note: false,
			images: {
				notes: require('../assets/img/lovenotes.png'),
			},
			notes: [
				{
					id: 1,
					desc:
						'Thank you for always making time for me and reassuring me when I am insecure. Thank you for always making time for me and reassuring me when I am insecure.',
					date_string: 'Jan 19th, 2021',
				},
				{
					id: 2,
					desc:
						'Thank you for always making time for me and reassuring me when I am insecure.',
				},
				{
					id: 3,
					desc:
						'Thank you for always making time for me and reassuring me when I am insecure.',
				},
				{
					id: 4,
					desc:
						'Thank you for always making time for me and reassuring me when I am insecure.',
				},
				{
					id: 5,
					desc:
						'Thank you for always making time for me and reassuring me when I am insecure.',
				},
				{
					id: 3,
					desc:
						'Thank you for always making time for me and reassuring me when I am insecure.',
				},
				{
					id: 4,
					desc:
						'Thank you for always making time for me and reassuring me when I am insecure.',
				},
				{
					id: 5,
					desc:
						'Thank you for always making time for me and reassuring me when I am insecure.',
				},
				{
					id: 3,
					desc:
						'Thank you for always making time for me and reassuring me when I am insecure.',
				},
				{
					id: 4,
					desc:
						'Thank you for always making time for me and reassuring me when I am insecure.',
				},
				{
					id: 5,
					desc:
						'Thank you for always making time for me and reassuring me when I am insecure.',
				},
			],
		};
	},
};
</script>

<style>
::-webkit-scrollbar {
	width: 0;
	background: transparent;
}
</style>
