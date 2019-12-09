import { AsyncStorage } from 'react-native';
import { types, getRoot } from 'mobx-state-tree';
import { persist } from 'mst-persist';

export const ViewStore = types
  .model('ViewStore', {
    view: types.optional(types.number, 1),
  })
  .views((self) => ({
    get viewStore() {
      return self.view;
    },
  }))
  .actions((self) => ({
    setView(view) {
      self.view = view;
    },
    getView() {
      // self.square = square;
    },
  }));


const viewStore = ViewStore.create({});

persist('ViewStore', viewStore, {
  storage: AsyncStorage,
  jsonify: true,
  // whitelist: ['view']
});

export default viewStore;
