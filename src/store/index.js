const initialState = {
  clients: [],
  processedClients: [],
  currentClient: {},
};

export default {
  state: initialState,
  getters: {
    getClients(state) {
      return state.clients;
    },
    getProcessedClients(state) {
      return state.processedClients;
    },
    getCurrentClient(state) {
      return state.currentClient;
    },
  },
  mutations: {
    setClients(state, data) {
      state.clients = data;
    },
    addClient(storeState, newClient) {
      storeState.clients.unshift(newClient);
    },
    setProcessedClients(state, data) {
      state.processedClients = data;
    },
    setCurrentClient(state, data) {
      state.currentClient = data;
    },
    sortClietntsBy(state, { sortType, sortingDirection }) {
      state.processedClients.sort((a, b) => {
        if (sortingDirection === 'up') {
          return a[sortType] > b[sortType] ? 1 : -1;
        }
        if (sortingDirection === 'down') {
          return a[sortType] < b[sortType] ? 1 : -1;
        }
      });
    }
  },
  actions: {
    async fetchSmallClientsColl({commit}) {
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
      for (const { key, value } of urlParams) {
        url.searchParams.set(key, value);
      }
      const response = await fetch(url);
      const data = await response.json();
      commit('setProcessedClients', data);
      commit('setClients', data);

      return data;
    },
    async fetchLargeClientsColl({commit}) {
      const url = new URL('http://www.filltext.com');
      const urlParams = [
        {key: 'rows', value: 1000},
        {key: 'id', value: '{number|1000000}'},
        {key: 'firstName', value: '{firstName}'},
        {key: 'lastName', value: '{lastName}'},
        {key: 'delay', value: 3},
        {key: 'email', value: '{email}'},
        {key: 'phone', value: '{phone|(xxx)xxx-xx-xx}'},
        {key: 'address', value: '{addressObject}'},
        {key: 'description', value: '{lorem|32}'},
      ]
      for (const { key, value } of urlParams) {
        url.searchParams.set(key, value);
      }
      const response = await fetch(url);
      const data = await response.json();
      commit('setProcessedClients', data);
      commit('setClients', data);

      return data;
    },
    addNewClient({ commit }, data) {
      const newClient = {
        id: Date.now(),
        ...data,
      };
      return new Promise((response) => {
        setTimeout(() => {
          commit('addClient', newClient);
          response();
        }, 1000);
      });
    }
  },
}
