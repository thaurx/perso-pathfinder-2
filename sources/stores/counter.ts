import { defineStore } from 'pinia'

const delay = (t: number) => new Promise((r) => setTimeout(r, t))

export const useCounter = defineStore('counter', {
  state: () => ({
    n: 2,
    incrementedTimes: 0,
    decrementedTimes: 0,
    numbers: [] as number[],
  }),

  getters: {
    double: (state) => state.n * 2,
  },

  actions: {
    increment(amount = 1) {
      this.incrementedTimes++
      this.n += amount
    },

    async decrementToZero(interval: number = 300) {
      if (this.n <= 0) return

      while (this.n > 0) {
        this.$patch((state: any) => {
          state.n--
          state.decrementedTimes++
        })
        await delay(interval)
      }
    },
  },
})
