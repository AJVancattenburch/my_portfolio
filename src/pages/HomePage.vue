<template>
  <SVGBackgroundWrapper>
    <div class="col-12 test-block"></div>
  </SVGBackgroundWrapper>
</template>

<script>
import SVGBackgroundWrapper from '../components/SVGBackgroundWrapper.vue'

export default {
  setup() {

  },
  components: { SVGBackgroundWrapper }
}
</script>

<style scoped lang="scss">
.test-block {
  height: 100vh;
  width: 100%;
}
</style>
