<template>
	<div id="memory_create p-2 mb-5">
		<form class="p-2 flex flex-col justify-between">
			<p class="font-bold mb-5 text-2xl">Create a memory</p>
			<input
				type="text"
				class="text-md p-3 mb-2 border-2 rounded-lg"
				id="memory-title"
				v-model="memory.title"
				placeholder="Enter the memory title"
				autocomplete="off"
				required
			/>
			<input
				type="date"
				class="text-md p-3 mb-2 border-2 rounded-lg"
				v-model="memory.date"
				id="memory-date"
				placeholder="mm/dd/yyyy"
				autocomplete="off"
				required
			/>
			<input
				type="text"
				class="text-md p-3 mb-2 border-2 rounded-lg"
				id="memory-location"
				v-model="memory.place_name"
				placeholder="Enter the memory location"
				autocomplete="off"
				required
			/>
			<textarea
				class="text-md p-3 mb-2 border-2 rounded-lg"
				id="memory-desc"
				rows="3"
				v-model="memory.desc"
				placeholder="Enter the memory description"
				autocomplete="off"
				required
			/>
			<button
				type="button"
				class="mt-2 p-3 rounded-lg text-indigo-darkest border-2 border-indigo-darkest hover:bg-indigo-darkest hover:text-grey-lightest"
				@click="handleSubmitMemory"
			>
				<strong>Share your memory</strong>
			</button>
		</form>
		<div v-html="postAlert" class="mb-2 p-2"></div>
	</div>
</template>

<script>
const axios = require('axios');
export default {
	name: 'MemoryCreate',
	data() {
		return {
			post_status: null,
			memory: {
				title: '',
				desc: '',
				place_name: '',
				date: '',
			},
		};
	},
	methods: {
		handleSubmitMemory() {
			var formValidation = this.checkFormData();
			if (!formValidation) return;
			else {
				let apiURL = 'api/memories';
				axios
					.post(apiURL, this.memory, {
						headers: {
							'Content-Type': 'application/json',
							'x-auth-token': localStorage.jwtToken,
						},
					})
					.then(() => {
						this.memory = {
							title: '',
							desc: '',
							place_name: '',
							date: '',
						};
						this.post_status = true;
					})
					.catch((err) => {
						this.post_status = false;
						console.log(err);
					});
			}
		},
		checkFormData() {
			if (
				this.memory.title.length === 0 ||
				this.memory.desc.length === 0 ||
				this.memory.date.length === 0 ||
				this.memory.place_name.length === 0
			) {
				this.post_status = false;
				console.log('Invalid Form');
				return false;
			} else return true;
		},
	},
	computed: {
		postAlert() {
			if (this.post_status === null) return ``;
			else if (this.post_status === true) {
				return `
                <div class="p-2 bg-green-lighter font-bold text-center rounded-lg mb-4">
                    <font-awesome-icon :icon="['fas', 'check-circle']" class="text-md" />
                    <span class="ml-4">Thank you for sharing your lovely memory!</span>
                </div>`;
			} else
				return `
            <div class="p-2 bg-red-lighter text-indigo-darkest font-bold text-center rounded-lg mb-4">
                <font-awesome-icon :icon="['fas', 'times-circle']" class="text-md" />
                <span class="ml-4">We weren't able to save your memory. Please check your input!</span>
		    </div>
            `;
		},
	},
};
</script>

<style scoped></style>
