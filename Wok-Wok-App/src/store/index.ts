import {createStore as _createStore} from 'vuex';
import fs from 'fs';

export function createStore(){
  let store = _createStore({
    state: {
      appetizerMenu : [

      ]
      
    },
    //for changing state, sync
    mutations: {
      SET_APPETIZER_MENU(appetizerMenu){
        let menu = JSON.parse(require('fs').readFileSync('assets/Appetizer.json', 'utf8'));

        appetizerMenu.push(menu);
      }

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