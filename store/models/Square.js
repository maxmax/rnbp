// import AsyncStorage from '@react-native-community/async-storage';
// import Geolocation from '@react-native-community/geolocation';
import { AsyncStorage } from 'react-native';
import { types, getRoot } from 'mobx-state-tree';
import { persist } from 'mst-persist';

export const Square = types.model({
  id: types.number,
  title: types.string,
  image: types.string,
});
