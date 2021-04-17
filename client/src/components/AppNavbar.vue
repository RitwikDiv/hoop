<template>
  <div class="mx-auto p-8 sm:flex-grow md:flex sm:overflow items-center">
    <div class="sm:w-1/2 md:w-1/4 flex-auto text-xl">
      <h1 class="text-indigo-dark title">Hoop</h1>
    </div>
    <div class="sm:w-1/2 md:w-1/4 flex-auto mt-4">
      <router-link class="font-bold no-underline mr-5" to="/">
        <button
          class="font-bold py-1 px-2 hover:bg-grey-darkest hover:text-white rounded-lg transform motion-safe:hover:scale-110"
        >
          <font-awesome-icon :icon="['fas', 'globe-asia']" class="mr-2" />
          Memories
        </button></router-link
      >
      <router-link class="font-bold no-underline ml-5 mr-1" to="/notes"
        ><button
          class="font-bold py-1 px-2 hover:bg-grey-darkest hover:text-white rounded-lg transform motion-safe:hover:scale-110"
        >
          <font-awesome-icon :icon="['fas', 'quote-right']" class="mr-2" />
          Notes
        </button></router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "AppNavbar",
  data() {
    return {};
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Lobster&display=swap");
.title {
  font-family: "Lobster", cursive;
}
</style>