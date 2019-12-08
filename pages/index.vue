<template>
  <div class="container">
    <div>
      nuxt-ts-gottani-template
    </div>
    <div>
      <b>SampleComponent</b>
      <SampleComponent :value="123" />
    </div>
    <div>
      <b>SampleCounter</b>
      <SampleCounter />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import SampleComponent from '~/components/SampleComponent.vue'
import SampleCounter from '~/components/SampleCounter.vue'

export default Vue.extend({
  components: {
    SampleComponent,
    SampleCounter
  }
})
</script>

<style lang="scss">
@import "~/assets/scss/variables";

html,
body {
  height: 100%;
}

body {
  background: $background-color;
}
</style>
