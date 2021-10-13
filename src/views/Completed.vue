<template>
  <div class="completed">
    <Card class="completed__container">
      <div class="container__image">&#x2714;</div>
      <Title msg="profissional cadastrado com sucesso!" />
    </Card>
  </div>
</template>

<script>
import Title from "@/components/Title.vue";
import Card from "@/components/Card.vue";

export default {
  components: {
    Title,
    Card,
  },
};
</script>

<style scoped>
.completed,
.completed__container,
.container__image {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 70vh;
}

.completed__container {
  height: 50vh;
}

.container__image {
  width: 200px;
  height: 200px;

  font-size: 12rem;

  color: var(--secondary-1);
  background-color: var(--primary0);

  border-radius: 50%;
}
</style>
