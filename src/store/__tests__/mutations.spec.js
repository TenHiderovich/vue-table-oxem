import store from '../';
import clientsFixture from './__fixtures__/clients';

describe('Clients getters', () => {
  it('mutations setClients', () => {
    const state = {
      clients: [],
    };
    store.mutations.setClients(state, clientsFixture);
    expect(state.clients.length).toBe(2);
  });
});
