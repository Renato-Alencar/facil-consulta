<template>
  <div class="mb-3">
    <label class="form-label" v-text="label" />
    <input
      type="text"
      class="form-control"
      :placeholder="placeholder"
      :value="values"
      @input="$emit('input', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      default: "",
    },
    values: {
      type: String,
      default: "",
    },
  },
};
</script>

<style>
label {
  margin-right: 2vw;
}

input {
  max-width: 30vw;
  min-width: 25vw;
}

label,
input,
option {
  font-family: Comfortaa;
  font-size: 0.8rem;
}
</style>
