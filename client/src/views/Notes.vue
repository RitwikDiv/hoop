<template>
	<div class="h-screen flex">
		<AppNavbar />
		<div class="md:w-2/5 flex flex-col justify-center">
			<img
				:src="images.notes"
				class="ml-20 w-3/5 h-3/5"
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
			<form class="flex flex-col mb-3 mt-5" v-if="create_note">
				<p class="font-bold text-md text-left mb-5 text-xl">
					Create a note
				</p>
				<textarea
					class="p-2 mb-3 font-bold text-md border-2 rounded-lg"
					placeholder="Save compliments, messages and other love notes you have gotten over time!"
					rows="3"
					required
					v-model="this.note_desc"
				/>
				<button
					class="p-2 border-2 text-indigo-darkest border-indigo-darkest hover:text-grey-lightest hover:bg-indigo-darkest rounded-lg font-bold"
					@click="handleSubmitNote()"
				>
					Save
				</button>
				<div
					v-html="postAlert"
					v-if="this.post_status != null"
					class="mb-2 mt-2 w-full"
				></div>
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
	methods: {
		async handleSubmitNote() {
			var formValidation = this.checkFormData();
			if (!formValidation) return;
			else {
				this.note_desc = '';
				this.post_status = true;
			}
		},
		checkFormData() {
			console.log('Check form data invoked');
			if (this.note_desc === '') {
				this.post_status = false;
				return false;
			} else return true;
		},
	},
	computed: {
		postAlert() {
			if (this.post_status === null) return ``;
			else if (this.post_status === true) {
				return `
                <div class="p-2 bg-green-lighter font-bold text-center rounded-lg mb-3">
                    <font-awesome-icon :icon="['fas', 'check-circle']" class="text-md" />
                    <span class="ml-4">Thank you for sharing your lovely note!</span>
                </div>`;
			} else
				return `
            <div class="p-2 bg-red-lighter text-indigo-darkest font-bold text-center rounded-lg mb-3">
                <font-awesome-icon :icon="['fas', 'times-circle']" class="text-md" />
                <span class="ml-4">We weren't able to save your note. Please check your input!</span>
		    </div>
            `;
		},
	},
	data() {
		return {
			note_desc: '',
			create_note: false,
			post_status: null,
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
