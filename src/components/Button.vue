<template>
  <button
    :type="$attrs.type"
    :style="text === '<' ? styleBtnBack : styleButton"
    @click="$emit('click')"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  inheritAttrs: false,

  props: {
    text: {
      type: String,
      default: () => "próximo",
    },
    styleButton: {
      type: Object,
      default: () => {
        return {
          color: "var(--secondary-1)",
          backgroundColor: "var(--primary0)",
        };
      },
    },
    styleBtnBack: {
      type: Object,
      default: () => {
        return {
          color: "var(--primary0)",
          backgroundColor: "var(--transparent)",
          position: "relative",
          top: "-2vw",
          right: "28vw",
          fontWeight: "bold",
        };
      },
    },
  },
};
</script>

<style scoped>
button {
  width: 25vw;

  padding: 1vh 2vw;

  margin-top: 2vh;

  border: none;
  border-radius: 2vw;

  font-size: 0.9rem;
  font-family: Comfortaa;

  text-transform: uppercase;
}

button:hover {
  cursor: pointer;

  background-color: rgba(var(--primary0), 0.6);
}
</style>
