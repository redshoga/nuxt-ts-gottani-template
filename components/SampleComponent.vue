<template>
  <div>
    value: {{ value }}
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    value: {
      type: Number,
      default: 0,
      required: true
    }
  }
})
</script>
