import { types } from 'mobx-state-tree';
import viewStore, { ViewStore } from './ViewStore';
import squaredStore, { SquaredStore } from './SquaredStore';

export const RootStore = types
  .model('RootStore', {
    viewStore: types.optional(ViewStore, () => viewStore),
    squaredStore: types.optional(SquaredStore, () => squaredStore),
  });
