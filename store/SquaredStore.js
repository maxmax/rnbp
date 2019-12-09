import { AsyncStorage } from 'react-native';
import { types, getRoot, flow } from 'mobx-state-tree';
import { persist } from 'mst-persist';
import request from '../services/request';
import { Square } from './models/Square';

export const SquaredStore = types
  .model('SquaredStore', {
    squareActive: types.optional(types.number, 1),
    squared: types.optional(types.array(Square), []),
    state: types.optional(types.string, ''),
  })
  .views((self) => ({
    // get squareStore() {
    //  return self.view;
    // },
  }))
  .actions((self) => {
    function saveSquared(id) {
      self.squareActive = id;
    }

    const getSquared = flow(function* getSquared(payload) {
      self.state = 'pending';
      const requestURL = '/squared/';
      try {
        const response = yield request(requestURL, {
          method: 'GET',
        });
        console.log('getSquared______response!', response);
        if (response.length < 1) {
          self.squared = response;
          self.state = 'empty';
        } else {
          self.squared = response;
          self.state = 'done';
        }
        //self.squared = response;
        //self.state = 'done';
      } catch (err) {
        console.log('getSquared______ERROR!');
        self.state = 'error';
      }
    });

    return {
      saveSquared,
      getSquared,
      afterCreate() {
        // getSquared()
      }
    };
  });


const squaredStore = SquaredStore.create({});

persist('SquaredStore', squaredStore, {
  storage: AsyncStorage,
  jsonify: true,
  // whitelist: ['squared']
});

export default squaredStore;
