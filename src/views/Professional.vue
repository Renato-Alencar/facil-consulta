<template>
  <div id="professional">
    <Card class="professional__container">
      <Title msg="sobre o profissional" />

      <section class="professional__layout">
        <form id="form" @submit.prevent="getFirstData()">
          <h2 class="fw-bolder fs-4 mb-2">Dados do Profissional</h2>

          <CInput
            label="Nome Completo*"
            placeholder="Digite o nome completo"
            v-model="outputTravel['Nome Completo']"
          />

          <CInput
            label="CPF*"
            placeholder="Digite um CPF"
            v-model="outputTravel['CPF']"
          />

          <CInput
            label="Número de celular*"
            placeholder="(00) 0 0000-0000"
            v-model="outputTravel['Número de telefone ou celular']"
          />

          <div class="location">
            <label>
              Estado*
              <select
                class="form-select"
                aria-label="Floating label select example"
                v-model="outputTravel['Estado']"
              >
                <option selected value="">Selected</option>
                <option
                  v-for="(name, index) in dataForm"
                  :key="index"
                  :value="name"
                >
                  {{ name.state }}
                </option>
              </select>
            </label>

            <label
              >Cidades*
              <select
                class="form-select"
                aria-label="Floating label select example"
                v-model="outputTravel['Cidade']"
              >
                <option selected value="">Selected</option>
                <option
                  v-for="(name, index) in outputTravel['Estado'].cities"
                  :key="index"
                  :value="name"
                >
                  {{ name }}
                </option>
              </select>
            </label>
          </div>
          <Purplebar :styleWidth="{ width: '50%' }" msg="1 de 2" />
          <Button type="submit" />
        </form>
        <Images :imgSrc="{ backgroundImage: `url(${img})` }" />
      </section>
    </Card>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";
import Title from "@/components/Title.vue";
import CInput from "@/components/CInput.vue";
import Button from "@/components/Button.vue";
import Images from "@/components/Images.vue";
import Purplebar from "@/components/Purplebar.vue";

export default {
  name: "Home",
  components: {
    Card,
    Title,
    Button,
    CInput,
    Images,
    Purplebar,
  },
  data() {
    return {
      img: require("@/assets/images/desktop-pagina-1.png"),

      dataForm: [
        { state: "Paraná", cities: ["Londrina", "Maringá"] },
        { state: "Rio Grande de Sul", cities: ["Pelotas", "Porto Alegre"] },
        { state: "Santa Catarina", cities: ["Florianópolis", "Joinville"] },
      ],

      outputTravel: {
        "Nome Completo": "",
        CPF: "",
        "Número de telefone ou celular": "",
        Estado: "",
        Cidade: "",
      },
    };
  },
  methods: {
    getFirstData() {
      this.$store.commit("setData", this.outputTravel);

      this.$router.push({ name: "Attendance" });
    },
  },
};
</script>

<style scoped>
.professional__container {
  padding-left: 5vw;
  padding-bottom: 10vh;
}

.professional__layout {
  width: max-content;
  height: max-content;

  display: flex;
  justify-content: space-between;
}

h2 {
  width: max-content;
}

.location {
  display: flex;
  flex-direction: row;
  gap: 0.5vw;

  width: max-content;
  height: min-content;
}

form {
  width: 40vw;
  height: 30vh;

  text-align: start;
}

input {
  width: max-content;
}

label {
  margin-right: 2vw;
}

label,
input,
option {
  font-family: Comfortaa;
  font-size: 0.8rem;
}
</style>
