import {createStore as _createStore} from 'vuex';

export function createStore(){
  let store = _createStore({
    state: {
      
    },
    //for changing state, sync
    mutations: {

    },
    //for api, async
    actions:{

    },
    //for multiple states
    modules: {

    }
  });

  return store; 
}