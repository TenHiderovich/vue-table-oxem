import { createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import initStore from '../'
import clientsFixture from './__fixtures__/clients';
import flushPromises from 'flush-promises';

const localVue = createLocalVue();

localVue.use(Vuex)

describe('Clients actions', () => {
  let store;

  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(clientsFixture),
    })
  );

  beforeEach(() => {
    store = new Vuex.Store(initStore);
    fetch.mockClear();
  });

  it('action fetchClients', async (done) => {
    await store.dispatch("fetchClients");
    await flushPromises();
    expect(store.state.clients.length).toBe(2);
    done();
  });
});
