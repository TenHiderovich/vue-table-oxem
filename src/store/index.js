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
      const url = new URL('http://www.filltext.com');
      const urlParams = [
        {key: 'rows', value: 32},
        {key: 'id', value: '{number|1000000}'},
        {key: 'firstName', value: '{firstName}'},
        {key: 'lastName', value: '{lastName}'},
        {key: 'email', value: '{email}'},
        {key: 'phone', value: '{phone|(xxx)xxx-xx-xx}'},
        {key: 'address', value: '{addressObject}'},
        {key: 'description', value: '{lorem|32}'},
      ]
      for (const {key, value} of urlParams) {
        url.searchParams.set(key, value);
      }
      const response = await fetch(url);
      commit('setClients', await response.json());
    },
  },
}
