<template>
  <main id="card" class="card group">
    <slot></slot>
  </main>
</template>

<script>
export default {
  name: "Card",
};
</script>

<style scoped>
main {
  width: 60vw;
  height: 75vh;

  background-color: var(--secondary-1);

  margin: auto;

  border: none;
  border-radius: 2vw;
}
</style>
