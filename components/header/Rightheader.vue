<template>
  <div class="flex align-center space-x-1">
    <Refund />
    <button
      class="button is-lights p-2 h-10 w-10 rounded-full no-outlines outline-none"
    >
      <i class="far fa-heart color-363636f size-19"></i>
    </button>
    <Sign />
    <div>
      <button
        class="button relative right-5px is-lights p-2 h-12 w-12 rounded-full no-outlines outline-none"
      >
        <svg
          class="w-6 h-6 color-363636f"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
          ></path>
        </svg>
        <span
          class="block scale absolute size-12 font-bold btn-004e66 text-white h-6 w-6 rounded-full border-2 border-white top-0 right-0"
          >8</span
        >
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    size: {
      type: Number,
      default: 99999,
    },
  },
}
</script>

<style scoped></style>
