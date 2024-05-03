<script setup>
import { ref } from 'vue';

defineProps({
  height: { type: String, required: true },
  width: { type: String, required: true },
  borderRadius: { type: String, required: true },
});

const containerStyle = ref({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
})

const loaderStyle = ref({
  attribute: 'skeleton-loader',
  fontSize: 14,
  color: '#E7E7E7',
  fontWeight: 800,
  marginTop: 40,
})


</script>

<template>
  <section class="placeholder">
    &nbsp;
    <div :style="containerStyle">
      <div :style="loaderStyle"></div>
      <div :style="loaderStyle"></div>
      <div :style="loaderStyle"></div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import url('../../assets/scss/_loaders.scss');
.placeholder {
  height: v-bind(height);
  width: v-bind(width);
  border-radius: v-bind(borderRadius);
}
</style>