<template>
  <div>
    <div>SampleCounter</div>
    count: {{ count }}
    <button @click="incrementCount">
      increment
    </button>
    <button @click="decrementCount">
      increment
    </button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import counterStore from '~/store/counter'

export default Vue.extend({
  computed: {
    count () {
      return counterStore.count
    }
  },
  methods: {
    incrementCount: () => counterStore.increment(),
    decrementCount: () => counterStore.decrement()
  }
})
</script>
