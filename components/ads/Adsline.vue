<template>
  <div class="bg-white rounded">
    <div
      class="flex align-center bg-004e66 justify-between rounded-tl rounded-tr px-4 py-3"
    >
      <h4 class="font-semibold text-white size-15">
        Nos Meilleurs recommandations
      </h4>
    </div>
    <div class="adlines h640 relative flex align-center justify-between">
      <div class="h-full bg-transparent w-16 leftag z-10 px-2">
        <button
          class="button bg-transparent shadow-sm h-11 w-11 rounded-full no-outlines outline-none vertical-centers z-10 gotop hvme border-2 border-transparent"
        >
          <svg
            class="w-6 h-6 transform rotate-90 color-white me-white"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
      <div
        class="h-full w-full flex align-center space-x-2 absolute overflow-x-auto xxx scrollnone pt-1 pb-1"
      >
        <Articleunsearch v-for="i in 8" :key="i" />
      </div>
      <div class="h-full bg-transparent w-16 rightag z-10 relative">
        <button
          class="button bg-transparent shadow-sm h-11 w-11 rounded-full no-outlines outline-none vertical-centers ml-2 z-10 gotop hvme border-2 border-transparent"
        >
          <svg
            class="w-6 h-6 transform -rotate-90 color-white relative me-white"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
/* .hvme {
  background-color: #004e66;
  animation: 0.2s appearZ;
} */
.hvme {
  /* display: block !important; */
  animation: 0.2s appearZ !important;
  background-color: #44813e;
  /* border-color: white; */
}
.adlines {
  height: 400px;
}
::-webkit-scrollbar {
  width: 0;
  background: transparent; /* make scrollbar transparent */
}
.leftag:hover .hvme,
.rightag:hover .hvme {
  display: block !important;
}
</style>
