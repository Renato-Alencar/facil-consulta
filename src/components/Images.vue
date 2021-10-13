<template>
  <div id="images" :style="imgSrc"></div>
</template>

<script>
export default {
  props: {
    imgSrc: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style scoped>
#images {
  width: 22vw;
  height: clamp(22vh, 2vw, 35vh);

  position: relative;
  bottom: -20vh;
  right: 9vw;

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
