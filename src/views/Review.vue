<template>
  <div id="review">
    <Button text="<" @click="getBtnReturn()" />
    <Card class="review__container">
      <Title msg="revisão do cadastro" />
      <section class="review__layout">
        <form @submit.prevent="getBtnRoute('Completed')">
          <label v-for="(value, prop, index) in setDataInfo" :key="index">
            {{ prop }}
            <p v-if="prop === 'Estado' ? (value = value.state) : value">
              {{ value }}
            </p>
          </label>

          <Button
            text="cadastrar profissional"
            :styleButton="btnNext"
            type="button"
            @click="getBtnRoute('Completed')"
          />
          <Button
            text="editar cadastro"
            :styleButton="btnEdit"
            type="button"
            @click="getBtnRoute('Professional')"
          />
        </form>
        <Images class="image" :imgSrc="{ backgroundImage: `url(${img})` }" />
      </section>
    </Card>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";
import Title from "@/components/Title.vue";
import Button from "@/components/Button.vue";
import Images from "@/components/Images.vue";

export default {
  components: {
    Card,
    Title,
    Button,
    Images,
  },
  data() {
    return {
      img: require("@/assets/images/desktop-pagina-3.png"),

      btnNext: {
        backgroundColor: "var(--cta0)",
        width: "max-content",
        padding: "1vh 2vw",
        fontWeight: "bold",
      },
      btnEdit: {
        color: "var(--primary0)",
        backgroundColor: "var(--transparent)",
        textTransform: "capitalize",
      },
    };
  },
  computed: {
    setDataInfo() {
      return this.$store.state.dataInfo;
    },
  },
  methods: {
    getBtnRoute(route) {
      this.$router.push({ name: route });
    },
    getBtnReturn() {
      this.$router.back();
    },
  },
};
</script>

<style scoped>
.review__container {
  padding-left: 5vw;
  padding-bottom: 5vw;
}

h2 {
  width: max-content;
}

.review__layout {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;

  width: 55vw;
  height: 75vh;
}

.imgs {
  position: fixed;
}

form {
  width: 40vw;
  height: 60vh;

  display: flex;
  flex-direction: column;
  justify-content: space-around;

  text-align: start;
}

label {
  font-weight: 600;
  margin-right: 2vw;
}

label,
span {
  font-family: Comfortaa;
  font-size: 0.8rem;
}
</style>
