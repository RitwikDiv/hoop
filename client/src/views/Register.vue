<template>
	<div class="flex flex-col items-center justify-center h-screen m-auto -mt-10">
		<h1
			class="text-5xl font-extrabold text-center mb-10 title text-grey-darkest flex flex-row"
		>
			Hoop
		</h1>
		<form class="flex flex-col sm:w-1/3 md:w-1/4">
			<div class="text-md mb-3">
				<input
					type="text"
					name="name"
					id="name"
					placeholder="Enter your name"
					class="w-full px-4 py-4 rounded border-2"
					autocomplete="off"
					v-model="info.name"
					disabled
				/>
			</div>
			<div class="text-md mb-3">
				<input
					type="text"
					name="username"
					id="username"
					placeholder="Enter your email"
					class="w-full px-4 py-4 rounded border-2"
					autocomplete="off"
					v-model="info.email"
					disabled
				/>
			</div>
			<div class="text-md mb-3">
				<input
					type="password"
					name="password1"
					id="password1"
					placeholder="Enter a password"
					class="w-full px-4 py-4 rounded border-2"
					autocomplete="off"
					v-model="info.password"
					disabled
				/>
			</div>
			<div class="text-md mb-3">
				<input
					type="password"
					name="password2"
					id="password2"
					placeholder="Confirm your password"
					class="w-full px-4 py-4 rounded border-2"
					autocomplete="off"
					v-model="info.confirmPassword"
					disabled
				/>
			</div>
			<div class="mt-2 mb-3" v-if="invalid">
				<p class="font-semibold text-red">
					Please check your input!
				</p>
			</div>
			<div class="p-3 bg-grey-darker rounded">
				<p class="font-semibold text-white">
					Currently in alpha! You can create an account only through an invite.
				</p>
			</div>
			<button
				disabled
				@click.prevent="loginSuccess()"
				class="mt-3 px-4 py-2 text-center rounded hover:bg-grey-darkest hover:text-white bg-white text-grey-darkest border-2 border-grey-darkest"
			>
				<span class="font-bold">
					Create an account
				</span>
			</button>
		</form>
		<p class="mt-5 text-md text-center font-semibold text-grey-darkest">
			Have an account?
			<router-link to="/login" class="ml-2 underline">Login</router-link>
		</p>
	</div>
</template>

<script>
const axios = require('axios');
export default {
	name: 'Register',
	data() {
		return {
			invalid: null,
			info: {
				name: '',
				email: '',
				password: '',
				confirmPassword: '',
			},
		};
	},
	methods: {
		loginSuccess() {
			if (this.info.password != this.info.confirmPassword) {
				this.invalid = true;
				return;
			}
			let apiURL = 'api/users';
			axios
				.post(apiURL, this.info, {
					'content-type': 'text/json',
				})
				.then((res) => {
					this.$store.commit('set_jwt', res.data);
					this.$router.push('/home');
				})
				.catch(() => (this.invalid = true));
		},
	},
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');

.title {
	font-family: 'Lobster', cursive;
}
</style>
