<template>
  <div class="container">
    <div>
      nuxt-ts-gottani-template
    </div>
    <div>
      <SampleComponent :prop="123" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import SampleComponent from '~/components/SampleComponent.vue'

export default Vue.extend({
  components: {
    SampleComponent
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
