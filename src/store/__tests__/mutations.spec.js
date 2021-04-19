import { createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import { mutations } from '../'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('Clients getters', () => {
  let store;

  beforeEach(() => {
    store = new Vuex.Store({
      mutations,
    })
  });

  it('mutations setClients', () => {

  });
});
