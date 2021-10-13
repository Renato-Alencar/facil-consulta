<template>
  <div class="purplebar">
    <div class="purplebar__container">
      <div :style="styleWidth"></div>
    </div>
    <span>{{ msg }}</span>
  </div>
</template>

<script>
export default {
  props: {
    styleWidth: {
      type: Object,
      default: () => {},
    },
    msg: {
      type: String,
      default: "",
    },
  },
};
</script>

<style scoped>
.purplebar {
  width: 30vw;
  height: 4vh;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin-top: 2vh;
}

.purplebar__container {
  width: 20vw;
  height: 4vh;
}

.purplebar__container div {
  width: 50%;
  height: 4vh;

  background-color: var(--primary0);
}

.purplebar span {
  width: 20%;
  height: 4vh;

  padding-top: 1vh;

  color: var(--primary0);

  font-weight: 600;
  font-family: Comfortaa;
}
</style>
