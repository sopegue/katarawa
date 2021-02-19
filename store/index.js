export const state = () => ({
  modalmenu: false,
  listing: false,
  computer: {
    computer: {
      name: 'Computers',
      content: {
        laptop: ['Notebooks', 'Notebooks', 'Ultrabooks', 'All-in-ones'],
        desktop: [
          'Computer desktop',
          'Monitors',
          'Computer components',
          'All-in-ones',
        ],
        accessories: [
          'Computer peripherals',
          'Bags, Cases, Cover & Sleeves',
          'Laptop & Desktop accessories',
          'Storages devices',
          'Printers & Scanners',
        ],
      },
    },
    electronic: {
      name: 'Electronics',
      content: {
        tv: {},
        household: {},
        accessories: {},
      },
    },
  },
})
export const mutations = {
  SET_MEN_MOD(state, value) {
    state.modalmenu = value
  },
  SET_LIST_MOD(state, value) {
    state.listing = value
  },
}
export const actions = {}
