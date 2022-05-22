<style scoped></style>

<template>
  <v-row>
    <v-col cols="12">
      <p data-testid="counter-values">
        FIRST : Counter: {{ counter.n }}. Double: {{ counter.double }}
      </p>
      <v-btn
        @click="counter.increment()"
        data-testid="increment"
        >+1</v-btn
      >
      <v-btn @click="counter.increment(10)">+10</v-btn>
      <v-btn @click="counter.increment(100)">+100</v-btn>
      <v-btn @click="counter.decrementToZero()">0</v-btn>
    </v-col>
  </v-row>
</template>

<script
  lang="ts"
  setup
>
import { useCounter } from '~/stores/counter'
const counter = useCounter()
</script>
