const initialState = {
  clients: [],
};

export default {
  state: initialState,
  getters: {
    getClients(state) {
      return state.clients;
    },
  },
  mutations: {
    setClients(state, data) {
      state.clients = data;
    },
  },
  actions: {
    async fetchClients({commit}) {
      const url = 'http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}';

      const response = await fetch(url);
      console.log(response)
      commit('setClients', await response.json());
    },
  },
}
