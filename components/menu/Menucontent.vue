<template>
  <div class="py-15 relative overflow-y-auto aside">
    <div
      class="flex align-center justify-between rounded-tl rounded-tr px-6 py-1 border-b"
    >
      <h4 class="font-semibold size-14">Shop by category</h4>
    </div>
    <div class="w180e border-b py-15">
      <a class="dropdown-item px-6 clickable flex align-center justify-between">
        <span class="size-13 font-medium color-363636f">All categories</span>
      </a>
      <a
        v-for="(item, i) in lang"
        :key="i"
        class="dropdown-item px-6 clickable flex align-center justify-between"
      >
        <span class="size-13 font-medium color-363636f">{{ item }}</span>
        <svg
          class="w-4 h-4 color-363636f relative top-01x"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </a>
      <a class="dropdown-item px-6 clickable flex align-center justify-between">
        <span class="size-13 font-medium color-363636f">Other categories</span>
      </a>
    </div>
    <a class="dropdown-items w-fit select-none px-6 pt-2">
      <span class="size-12 font-semibold block color-363636ff"
        >Language setting</span
      ></a
    >
    <div class="h-full"><Languagemenu /></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      oldwidth: 9999,
      width: 9999,
      lan: [
        'Computers & Electronics',
        'Phones & Accessories',
        'Fashions & Jewellery',
        'Beauty & Health',
        'Gaming',
        'Baby, Kids & Toys',
        'Office & Books',
        'Sports',
        'Food & Grocery',
        'Home, Garden & Kitchen',
        'Automotive',
        'DIY',
      ],
    }
  },
  computed: {
    lang() {
      return this.lan
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
  },
  methods: {
    large() {
      this.oldwidth = this.width
      //   this.width = window.innerWidth
      //   const el = document.getElementById('listcateg')
      //   const elwidth = el.getBoundingClientRect().width
      //   if (this.width < 1500 && this.width > 1160) {
      //     if (this.oldwidth < this.width) {
      //       el.style.width =
      //         (elwidth + (this.width - this.oldwidth)).toString() + 'px'
      //     } else if (this.oldwidth > this.width) {
      //       el.style.width =
      //         (elwidth - (this.oldwidth - this.width)).toString() + 'px'
      //     }
      //   } else if (this.width <= 1160) {
      //     el.style.width = 847.84 + 'px'
      //   }
      //   console.log(el.getBoundingClientRect().width)
    },
    inlisting() {
      this.$store.commit('SET_LIST_MOD', true)
    },
    sleep(milliseconds) {
      const date = Date.now()
      let currentDate = null
      do {
        currentDate = Date.now()
      } while (currentDate - date < milliseconds)
    },
    outlisting() {
      this.$store.commit('SET_LIST_MOD', false)
    },
  },
}
</script>

<style scoped>
#listcateg {
  width: 847px;
}
</style>
