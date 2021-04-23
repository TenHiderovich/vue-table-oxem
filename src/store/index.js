const initialState = {
  clients: [],
  processedClients: [],
  currentClient: {},
  hasResponseError: false,
  responseError: null,
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
    getHasResponseError(state) {
      return state.hasResponseError;
    },
    getresponseError(state) {
      return state.responseError;
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
    },
    setHasResponseError(state, data) {
      state.hasResponseError = data;
    },
    setResponseError(state, data) {
      state.responseError = data;
    },
  },
  actions: {
    async fetchClientData({commit}, fetchName) {
      const url = new URL('http://www.filltext.com');
      const urlParams = [
        {key: 'id', value: '{number|1000000}'},
        {key: 'firstName', value: '{firstName}'},
        {key: 'lastName', value: '{lastName}'},
        {key: 'email', value: '{email}'},
        {key: 'phone', value: '{phone|(xxx)xxx-xx-xx}'},
        {key: 'address', value: '{addressObject}'},
        {key: 'description', value: '{lorem|32}'},
      ]

      if (fetchName === 'small') {
        urlParams.push({key: 'rows', value: 32});
      }

      if (fetchName === 'large') {
        urlParams.push({key: 'rows', value: 1000});
        urlParams.push({key: 'delay', value: 3});
      }

      for (const { key, value } of urlParams) {
        url.searchParams.set(key, value);
      }
      try {
        const response = await fetch(url);
        const data = await response.json();
        commit('setProcessedClients', data);
        commit('setClients', data);

        return data;
      } catch (e) {
        commit('setHasResponseError', true);
        commit('setResponseError', e);
      }
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
