import store from '../';
import clientsFixture from './__fixtures__/clients';
import clientFixture from './__fixtures__/client';

describe('Clients getters', () => {
  it('getters getClients', () => {
    const state = {
      clients: clientsFixture,
    };
    const clients = store.getters.getClients(state);
    expect(clients.length).toBe(2);
  });

  it('getters getProcessedClients', () => {
    const state = {
      processedClients: clientsFixture,
    };
    const processedClients = store.getters.getProcessedClients(state);
    expect(processedClients.length).toBe(2);
  });

  it('getters getCurrentClient', () => {
    const state = {
      currentClient: clientFixture,
    };
    const currentClient = store.getters.getCurrentClient(state);
    expect(currentClient).toBe(clientFixture);
  });
});
