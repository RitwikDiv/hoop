<template>
	<div class="h-screen flex">
		<AppNavbar />
		<div class="flex-1 flex flex-row flex-wrap justify-start overflow-auto">
			<div class="w-full m-5 flex flex-row rounded-lg ">
				<div class="w-1/2 mt-10 mb-10">
					<h1 class="p-3 text-indigo-darkest">
						Treasure your notes
					</h1>
				</div>
				<div class="w-1/2 mt-10 mb-10">
					<form class="flex flex-row">
						<textarea
							class="w-3/4 p-3 font-bold text-md border-2 mr-5 rounded-lg "
							placeholder="Enter the memory description"
							required
						/>
						<button
							class="p-2 border-2 text-indigo-darkest border-indigo-darkest hover:text-grey-lightest hover:bg-indigo-darkest rounded-lg font-bold"
						>
							Save
						</button>
					</form>
				</div>
			</div>
			<LoveNote
				content="Thank you for always making time for me and reassuring me when I am insecure."
			/>
			<LoveNote
				content="Thank you for always making time for me and reassuring me when I am insecure."
			/>
			<LoveNote
				content="Thank you for always making time for me and reassuring me when I am insecure."
			/>
			<LoveNote
				content="Thank you for always making time for me and reassuring me when I am insecure."
			/>
			<LoveNote
				content="Thank you for always making time for me and reassuring me when I am insecure."
			/>
			<LoveNote
				content="Thank you for always making time for me and reassuring me when I am insecure."
			/>
			<LoveNote
				content="Thank you for always making time for me and reassuring me when I am insecure."
			/>
			<LoveNote
				content="Thank you for always making time for me and reassuring me when I am insecure."
			/>
			<LoveNote
				content="Thank you for always making time for me and reassuring me when I am insecure."
			/>
			<LoveNote
				content="Thank you for always making time for me and reassuring me when I am insecure."
			/>
			<LoveNote
				content="Thank you for always making time for me and reassuring me when I am insecure."
			/>
			<LoveNote
				content="Thank you for always making time for me and reassuring me when I am insecure."
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
};
</script>

<style></style>
