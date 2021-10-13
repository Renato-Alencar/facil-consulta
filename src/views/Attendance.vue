<template>
  <div id="attendance">
    <Button text="<" @click="getBtnReturn()" />
    <Card class="attendance__container">
      <Title msg="sobre o atendimento" />

      <section class="attendance__layout">
        <form id="form" @submit.prevent="getSecondData()">
          <h2 class="fw-bolder fs-4 mb-2">Detalhes do Atendimento</h2>
          <label :for="`floatingSelect1`"
            >Especialidade Principal*
            <select
              class="form-select fs-6"
              :id="`floatingSelect1`"
              aria-label="Floating label select example"
              v-model="outputPayments['Especialidade Principal']"
            >
              <option selected value="">Selecione a especialidade</option>
              <option
                v-for="(speciality, index) in specialities"
                :key="index"
                :value="speciality"
              >
                {{ speciality }}
              </option>
            </select>
          </label>

          <label for="consultaValue"
            >Informe o preço da consulta*
            <div class="input-group flex-nowrap" id="consultaValue">
              <span class="input-group-text" id="addon-wrapping">R$</span>
              <input
                type="text"
                class="form-control"
                placeholder="Valor"
                aria-label="Valor"
                aria-describedby="addon-wrapping"
                v-model="outputPayments['Preço da Consulta']"
              />
            </div>
          </label>

          <label>
            Tipos de Pagamento
            <div v-for="(payment, index) in paymentForms" :key="`c` + index">
              <input
                type="checkbox"
                v-model="payment.checked"
                @click="CheckUncheck(payment.checked)"
              />
              <span>{{ payment.title }}</span>
              <ul v-if="payment.checked">
                <template>{{ payment.childrenTitle }}</template>
                <li
                  v-for="(child, index) in payment.childrens"
                  :key="`a` + index"
                >
                  <input
                    type="radio"
                    :value="child.option"
                    v-model="outputPayments['Formas de Pagamento da Consulta']"
                  />
                  <span>{{ child.option }}</span>
                </li>
              </ul>
            </div>
          </label>
          <Purplebar :styleWidth="{ width: '100%' }" msg="2 de 2" />
          <Button />
        </form>
        <Images :imgSrc="{ backgroundImage: `url(${img})` }" />
      </section>
    </Card>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";
import Title from "@/components/Title.vue";
import Button from "@/components/Button.vue";
import Images from "@/components/Images.vue";
import Purplebar from "@/components/Purplebar.vue";

export default {
  name: "Attendance",
  components: {
    Card,
    Title,
    Button,
    Images,
    Purplebar,
  },
  data() {
    return {
      img: require("@/assets/images/desktop-pagina-2.png"),

      specialities: [
        "Cardiologia",
        "Dermatologia",
        "Neurologia",
        "Oftalmologia",
        "Psiquiatria",
        "Urologia",
      ],

      paymentForms: [
        {
          title: "Pix",
          checked: false,
        },
        {
          title: "Em dinheiro",
          checked: false,
        },
        {
          title: "Cartão de crédito",
          checked: false,
          childrenTitle: "Parcelamento em",
          childrens: [
            { option: "1x sem juros", checked: false },
            { option: "2x sem juros", checked: false },
            { option: "3x sem juros", checked: false },
          ],
        },
      ],
      outputPayments: {
        "Especialidade Principal": "",
        "Preço da Consulta": "",
        Pagamento: "",
        "Formas de Pagamento da consulta": "",
      },
    };
  },
  methods: {
    CheckUncheck(item) {
      var title = "";

      for (let i = 0; i < this.paymentForms.length; i++) {
        this.paymentForms[i].checked = this.paymentForms[i] === item;
        title = this.paymentForms[i].title;
      }
      this.outputPayments.Pagamento = title;
    },
    getSecondData() {
      this.$store.commit("setData", this.outputPayments);
      this.$router.push({ name: "Review" });
    },
    getBtnReturn() {
      this.$router.back();
    },
  },
};
</script>

<style scoped>
.attendance__container {
  padding-left: 5vw;
  padding-bottom: 5vh;
}

.attendance__layout {
  width: max-content;
  height: max-content;

  display: flex;
  justify-content: space-between;
}

h2 {
  width: max-content;
}

form {
  width: 40vw;
  height: 60vh;

  display: flex;
  flex-direction: column;
  justify-content: space-around;

  text-align: start;
}

input {
  max-width: 10vw;
  min-width: 5vw;
}

label,
select {
  max-width: 35vw;
  min-width: 15vw;
  margin-right: 2vw;
}

label,
input,
option {
  font-family: Comfortaa;
  font-size: 0.8rem;
}
</style>
