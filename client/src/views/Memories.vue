<template>
  <div>
    <AppNavbar />
    <div class="flex">
      <div
        class="sm:invisible md:visible position-fixed md:ml-10 md:mr-6 md:p-4 md:bg-purple-lighter"
        id="map"
      ></div>
      <div
        class="mx-auto flex-grow md:w-3/5 md:mr-10 md:ml-6 md:p-4 sm:-ml-3 text-left overflow"
      >
        <div class="flex flex-wrap -ml-12">
          <div class="xl:w-1/2 md:w-1/2 p-4">
            <div class="border border-gray-200 p-6 rounded-lg">
              <div
                class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4"
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <h2 class="text-lg text-gray-900 font-bold title-font mb-2">
                Shooting Stars
              </h2>
              <p class="leading-relaxed text-base">
                Fingerstache flexitarian street art 8-bit waist co, subway tile
                poke farm.
              </p>
            </div>
          </div>
          <div class="xl:w-1/2 md:w-1/2 p-4">
            <div class="border border-gray-200 p-6 rounded-lg">
              <div
                class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4"
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <h2 class="text-lg text-gray-900 font-medium title-font mb-2">
                Shooting Stars
              </h2>
              <p class="leading-relaxed text-base">
                Fingerstache flexitarian street art 8-bit waist co, subway tile
                poke farm.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppNavbar from "../components/AppNavbar.vue";
export default {
  name: "Memories",
  components: {
    AppNavbar,
  },
};
</script>

<style>
#map {
  height: 650px;
  width: 500px;
  border-radius: 5px;
}
</style>