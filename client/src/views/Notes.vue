<template>
	<div class="h-screen flex">
		<AppNavbar />
		<div
			class="w-3/5 flex-1 text-left m-3 mr-10 mt-10 overflow-y-auto overflow-x-hidden"
		>
			<button @click="create_note = true" v-if="!create_note" class="mb-3">
				<font-awesome-icon :icon="['fas', 'plus']" class="text-lg" />
			</button>
			<button @click="create_note = false" v-if="create_note" class="mb-3">
				<font-awesome-icon :icon="['fas', 'minus']" class="text-lg" />
			</button>
			<div class="flex flex-row justify-around">
				<form class="w-1/2 flex flex-col mr-10 mb-4" v-if="create_note">
					<p class="font-bold text-left mb-3 text-2xl">
						Create a note
					</p>
					<textarea
						class="p-2 mb-3 text-md border-2 rounded-lg"
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
			</div>
			<div class="h-px bg-grey-light mb-4"></div>
			<div
				class="missing w-full flex flex-row justify-between bg-grey-lightest text-center mb-4"
				v-if="notes.length === 0"
			>
				<img
					:src="images.intro"
					class="m-auto h-1/6 w-1/6"
					alt="Creating memory"
				/>
				<p class="m-auto text-lg font-bold leading-loose">
					You have {{ notes.length }} notes to view. Create new notes by
					clicking the
					<span class="ml-2 mr-2 text-center"
						><font-awesome-icon :icon="['fas', 'plus']" class="text-lg"
					/></span>
					button above!
				</p>
			</div>
			<div class="h-px bg-grey-light mb-4" v-if="notes.length === 0"></div>
			<div class="ml-10 flex flex-row flex-wrap">
				<LoveNote
					v-for="note in notes"
					:key="note._id"
					:id="note._id"
					:content="note.desc"
					:date_string="note.date_string"
				/>
			</div>
		</div>
	</div>
</template>

<script>
import AppNavbar from '../components/AppNavbar.vue';
import LoveNote from '../components/LoveNote.vue';

const axios = require('axios');

export default {
	name: 'Notes',
	components: { AppNavbar, LoveNote },
	methods: {
		handleSubmitNote() {
			var formValidation = this.checkFormData();
			if (!formValidation) return;
			else {
				let apiURL = 'api/notes';
				var data = {
					desc: this.note_desc,
				};
				axios
					.post(apiURL, data, {
						headers: {
							'Content-Type': 'application/json',
							'x-auth-token': localStorage.jwtToken,
						},
					})
					.then(() => {
						this.note_desc = '';
						this.post_status = true;
					})
					.catch((err) => {
						this.post_status = false;
						console.log(err);
					});
			}
		},
		checkFormData() {
			if (this.note_desc === '') {
				this.post_status = false;
				return false;
			} else return true;
		},
	},
	created() {
		if (localStorage.jwtToken === undefined) this.$router.push('/login');
		let apiURL = 'api/notes';
		axios
			.get(apiURL, { headers: { 'x-auth-token': localStorage.jwtToken } })
			.then((res) => {
				this.notes = res.data;
			})
			.catch((err) => console.log(err.message));
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
			notes: [],
			images: {
				intro: require('../assets/img/happy.png'),
			},
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
