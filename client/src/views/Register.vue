<template>
	<div class="flex flex-col items-center justify-center h-screen m-auto -mt-10">
		<h1
			class="text-5xl font-extrabold text-center mb-10 title text-green-darker flex flex-row"
		>
			Hoop
		</h1>
		<form class="flex flex-col sm:w-1/3">
			<div class="text-md mb-3">
				<input
					type="text"
					name="name"
					id="name"
					placeholder="Enter your name"
					class="w-full px-4 py-4 rounded-lg border-2"
					autocomplete="off"
				/>
			</div>
			<div class="text-md mb-3">
				<input
					type="text"
					name="username"
					id="username"
					placeholder="Enter your email"
					class="w-full px-4 py-4 rounded-lg border-2"
					autocomplete="off"
				/>
			</div>
			<div class="text-md mb-3">
				<input
					type="password1"
					name="password1"
					id="password1"
					placeholder="Enter a password"
					class="w-full px-4 py-4 rounded-lg border-2"
					autocomplete="off"
				/>
			</div>
			<div class="text-md mb-3">
				<input
					type="password2"
					name="password2"
					id="password2"
					placeholder="Confirm your password"
					class="w-full px-4 py-4 rounded-lg border-2"
					autocomplete="off"
				/>
			</div>
			<button
				class="mt-5 px-4 py-2 text-center rounded-lg hover:bg-green-darker hover:text-white bg-white text-green-darker border-2 border-green-darkest"
			>
				<span class="font-bold">
					Create an account
				</span>
			</button>
		</form>
		<p class="mt-5 text-md text-center font-semibold text-green-darker">
			Have an account?
			<router-link to="/login" class="underline">Login</router-link>
		</p>
	</div>
</template>

<script>
export default {
	name: 'Login',
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
