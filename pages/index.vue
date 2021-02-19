<template>
  <div class="h-full max1260 m-0-auto relative waloo d-spec scroll-1400">
    <figure class="image relative h-12 w-full">
      <img class="h-12 w-full" src="/computer.jpg" alt="Placeholder image" />
    </figure>
    <Menu v-show="modaled" class="z-40 appearxh" />
    <Header
      class="sticky top-0 px-8 z-30"
      :class="{ 'as-b0': size <= 940, 'my-shadow': scroll > 37 }"
    />
    <Afterheader class="d-spec px-8" :class="{ 'as-b0': size <= 940 }" />
    <div class="p-1">
      <div>
        <div class="mx-10 mt-1" :class="{ 'ax-b0': size <= 940 }">
          <div class="w-full flex flex-col space-y-5">
            <div class="h449 w-full flex align-center">
              <div class="h-full relative">
                <welcomemenu class="bg-e6e6e6"
                  ><div
                    class="p-2 size-13 mb-3 text-white rounded-tl rounded-tr top-0 left-0 z-10 bg-004e66"
                  >
                    <span>Top categorie</span>
                  </div>
                  <div class="bg-004e66">
                    <div>
                      <span
                        class="size-13 block px-2 py-1 text-white font-semibold"
                        >Categorie sac</span
                      >
                      <figure class="image is-240xauto relative h-full w-full">
                        <img
                          class="h-full w-full"
                          src="/b.jpg"
                          alt="Placeholder image"
                        />
                      </figure>
                    </div>
                    <div class="rounded-br rounded-bl">
                      <span
                        class="size-13 block px-2 py-1 text-white font-semibold"
                        >Categorie Chaussure</span
                      >
                      <figure
                        class="image is-240xauto relative h-full w-full rounded-br rounded-bl"
                      >
                        <img
                          class="h-full w-full rounded-br rounded-bl"
                          src="/b.jpg"
                          alt="Placeholder image"
                        />
                      </figure>
                    </div>
                  </div>
                </welcomemenu>
              </div>
              <div class="w-full h-full relative mx-3">
                <div class="w-full h-full relative"><Bigads /></div>
              </div>
              <div class="h-full relative">
                <welcomemenu
                  ><div
                    class="p-2 absolute size-12 text-white rounded top-0 left-0 z-10 bg-004e66 border"
                  >
                    <span>Meilleur du mois</span>
                  </div>
                  <Articleunsearch
                /></welcomemenu>
              </div>
            </div>
            <div>
              <Adsline />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      v-show="scroll > 280"
      class="fixed appearyh bottom-0 h-fit w-fit z-10 right-0 pr-8 pb-12"
    >
      <button
        class="button bg-white shadow h-11 w-11 rounded-full no-outlines outline-none gotop"
        @click="scrolltop"
      >
        <svg
          class="w-6 h-6 transform rotate-180 color-004e66 relative"
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
</template>

<script>
import Welcomemenu from '~/components/menu/Welcomemenu.vue'
export default {
  components: { Welcomemenu },
  data() {
    return {
      width: 99999,
      scrollsize: 0,
    }
  },
  computed: {
    modaled() {
      return this.$store.state.modalmenu === true
    },
    listing() {
      return this.$store.state.listing === true
    },
    size() {
      return this.width
    },
    scroll() {
      return this.scrollsize
    },
  },
  beforeMount() {
    window.addEventListener('scroll', this.handleScroll)
    window.addEventListener('resize', this.large)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
    window.removeEventListener('resize', this.large)
  },
  mounted() {
    this.large()
    this.handleScroll()
  },
  methods: {
    scrolltop() {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth',
      })
    },
    large() {
      this.width = window.innerWidth
    },
    outlisting() {
      this.$store.commit('SET_LIST_MOD', false)
    },
    handleScroll() {
      this.scrollsize = window.scrollY
    },
  },
}
</script>

<style scoped></style>
