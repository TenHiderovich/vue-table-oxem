import store from '../';
import clientsFixture from './__fixtures__/clients';

describe('Clients getters', () => {
  it('getters getClients', () => {
    const state = {
      clients: clientsFixture,
    };
    const clients = store.getters.getClients(state);
    expect(clients.length).toBe(2);
  });
});
