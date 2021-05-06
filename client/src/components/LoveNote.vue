<template>
	<button :class="getRandomColor">
		<div class="w-0.9">
			<p class="text-md font-medium tracking-normal leading-loose text-center">
				{{ content }}
			</p>
		</div>
		<div class="w-0.1">
			<button
				@click="toggleEditing()"
				class="focus:outline-none p-2 rounded-lg hover:bg-indigo-darkest hover:text-grey-lightest"
			>
				<font-awesome-icon :icon="['fas', 'trash']" class="text-md" />
			</button>
		</div>
	</button>
</template>

<script>
export default {
	name: 'LoveNote',
	props: ['content', 'date_string'],
	data() {
		return {
			colorSelection: [
				'bg-green-lightest',
				'bg-yellow-lightest',
				'bg-red-lightest',
				'bg-blue-lightest',
				'bg-pink-lightest',
			],
		};
	},
	methods: {
		async handleSubmitMemory() {
			var formValidation = this.checkFormData();
			if (!formValidation) return;
			else {
				this.memory = {
					title: '',
					desc: '',
					place_name: '',
					date: '',
				};
				this.post_status = true;
			}
		},
		checkFormData() {
			console.log('Check form data invoked');
			if (
				this.memory.title.length === 0 ||
				this.memory.desc.length === 0 ||
				this.memory.date.length === 0 ||
				this.memory.place_name.length === 0
			) {
				this.post_status = false;
				return false;
			} else return true;
		},
	},
	computed: {
		getRandomColor: function() {
			const randomElement = this.colorSelection[
				Math.floor(Math.random() * this.colorSelection.length)
			];
			console.log(this.getRandomColor);
			return (
				'p-3 w-full bg-grey-lightest rounded-lg mb-5 shadow flex flex-row focus:outline-none ' +
				randomElement
			);
		},
	},
};
</script>

<style scoped></style>
