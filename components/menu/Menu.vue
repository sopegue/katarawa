<template>
  <div class="flex h-full w-full fixed">
    <div class="w180ss relative h-full bg-white">
      <div class="h-12 w-full bg-004e66">
        <Logosmen class="vertical-center m-0-auto" />
      </div>
      <Menucontent class="h-full" />
      <div class="absolute top-0 right-0 -mr-10 mt-2">
        <button class="bg-transparent no-outlines outline-none" @click="close">
          <svg
            class="w-8 h-8 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
        </button>
      </div>
    </div>
    <div class="w-full h-full bg-black-tr" @click="close"></div>
  </div>
</template>

<script>
export default {
  methods: {
    close() {
      this.$store.commit('SET_MEN_MOD', false)
      document.body.style.overflow = 'visible'
    },
  },
}
</script>

<style scoped></style>
