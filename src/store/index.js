import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    dataInfo: {},
  },
  mutations: {
    setData(state, payload) {
      state.dataInfo = Object.assign(state.dataInfo, payload);
    },
  },
});
