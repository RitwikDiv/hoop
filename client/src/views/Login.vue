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
					name="email"
					id="email"
					placeholder="Enter your email"
					class="w-full px-4 py-4 rounded-lg border-2"
					autocomplete="off"
					v-model="info.email"
				/>
			</div>
			<div class="text-md">
				<input
					type="password"
					name="password"
					id="password"
					placeholder="Enter your password"
					class="w-full px-4 py-4 rounded-lg border-2"
					autocomplete="off"
					v-model="info.password"
				/>
				<!-- <div class="flex justify-end text-sm mt-3">
					<a
						href="#"
						class="no-underline font-semibold hidden text-grey-darkest"
						>Forgot Password?</a
					>
				</div> -->
			</div>
			<div class="mt-5" v-if="invalid">
				<p class="text-red font-bold">
					Invalid credentials provided!
				</p>
			</div>
			<button
				@click.prevent="loginSuccess()"
				class="mt-5 px-4 py-2 text-center rounded-lg hover:bg-grey-darkest hover:text-white bg-white text-grey-darkest border-2 border-grey-darkest"
			>
				<span class="font-bold">
					Sign in
				</span>
			</button>
		</form>
		<p class="mt-5 text-md text-center font-semibold text-grey-darkest">
			Don't have an account?
			<router-link to="/register" class="ml-2 underline">Sign up</router-link>
		</p>
		<br />
	</div>
</template>

<script>
const axios = require('axios');
export default {
	name: 'Login',
	data() {
		return {
			invalid: null,
			info: {
				email: '',
				password: '',
			},
		};
	},
	methods: {
		loginSuccess() {
			let apiURL = 'api/auth';
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
