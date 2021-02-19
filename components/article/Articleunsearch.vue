<template>
  <a class="clickable h-full w180 hover:shadow-lg"
    ><figure class="image is-240x200 relative h-full w-full">
      <img class="h-full w-full" src="/b.jpg" alt="Placeholder image" />
      <div class="w-fit py-08 absolute right-0 top-0">
        <span
          class="px-2 py-08 block rounded btn-004e66s color-004e66 font-semibold size-13"
          >-72%</span
        >
      </div>
    </figure>
    <div class="flex flex-col px-4 mt-1">
      <div>
        <button
          class="bg-white px-3 py-01 rounded-full border flex align-center space-x-1 no-outlines outline-none"
        >
          <span class="size-12 font-semibold color-363636f">Jumia</span>
        </button>
      </div>
      <span class="size-13 logo-color font-semibold twoline"
        >Samsung Galaxy S20+ (2020 Edition + 5G) with galaxy airpods in
        bonus</span
      >
      <div class="mt-1 relative">
        <p class="flex align-center space-x-2">
          <span class="font-bold size-13 color-004e66">$ 365,475.4</span>
          <span class="line-through font-semibold size-13 color-363636"
            >$ 499,987.9</span
          >
        </p>
      </div>

      <div class="flex align-center space-x-2 relative top-01x">
        <span class="size-11">
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star color-6d6d6d"></span>
          <span class="fa fa-star color-6d6d6d"></span>
        </span>
        <span class="color-004e66 size-125 font-semibold">(87)</span>
      </div>
      <div class="flex align-center justify-between relative top-02x">
        <div>
          <span class="block size-13 font-semibold color-363636f">Size</span>
          <select
            class="block size-13 no-outlines bg-e6e6e6 rounded border font-semibold"
            name="taille"
          >
            <option value="1">S</option>
            <option value="1">M</option>
            <option value="1">L</option>
            <option value="1">XL</option>
            <option value="1">XXL</option>
          </select>
        </div>
        <span class="size-13 color-363636f underline font-semibold twoline"
          >87 in stock</span
        >
      </div>
    </div>
    <span class="block w-fit m-0-auto relative top-1x"
      ><button
        class="btn-004e66 flex align-center space-x-2 px-5 py-1 rounded text-white size-14"
      >
        <span>Ajouter au panier</span>
        <svg
          class="w-5 h-5 text-white"
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
        </svg></button></span
  ></a>
</template>

<script>
export default {}
</script>

<style scoped></style>
