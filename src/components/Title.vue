<template>
  <div id="title">
    <h2>
      {{ msg }}
    </h2>
  </div>
</template>

<script>
export default {
  name: "Title",
  props: {
    msg: String,
  },
};
</script>

<style scoped>
h2 {
  width: max-content;
  height: min-content;

  padding: 5vh 0 2vh 0;

  color: var(--primary0);

  font-size: clamp(1.55rem, 1vw, 1.75rem);
  font-family: Comfortaa;
  font-weight: 600;

  text-align: start;
}

h2:first-letter {
  text-transform: capitalize;
}
</style>
