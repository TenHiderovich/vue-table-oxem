import { createLocalVue, mount } from '@vue/test-utils';
import Vuex from 'vuex';
import initStore from '../';
import clientsFixture from './__fixtures__/clients';
import flushPromises from 'flush-promises';
import Table from "../../components/Table.vue";

const localVue = createLocalVue();

localVue.use(Vuex)

describe('Clients actions with mount', () => {
  let store;
  let actions;

  beforeEach(() => {
    actions = {
      fetchClientData: jest.fn(),
    }
    store = new Vuex.Store({
      ...initStore,
      actions
    });
  });

  it('calls store action fetchClientData when button is clicked', () => {
    const wrapper = mount(Table, { store, localVue });
    wrapper.find('.btn-small-data').trigger('click');
    expect(actions.fetchClientData).toHaveBeenCalled();
  });
});

describe('Clients actions', () => {
  let store;

  beforeEach(() => {
    store = new Vuex.Store(initStore);
  });

  it('call fetchClientData with exeption', async (done) => {
    global.fetch = jest.fn(() => Promise.reject());

    await store.dispatch("fetchClientData", 'small');
    await flushPromises();
    const wrapper = mount(Table, { store, localVue });
    expect(wrapper.find('.alert-danger').exists()).toBe(true);
    done();
  });

  it('call fetchClientData', async (done) => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(clientsFixture),
      })
    );

    await store.dispatch("fetchClientData", 'small');
    await flushPromises();
    expect(store.state.processedClients.length).toBe(2);
    expect(store.state.clients.length).toBe(2);
    done();
  });
});
