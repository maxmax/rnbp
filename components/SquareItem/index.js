import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styleSheet';

export function SquareItem({ id, title, image, save, active }) {
  return (
    <View style={[styles.slide, active === id && styles.slideActive]}>
      <TouchableOpacity onPress={() => save(id)}>
        <Image source={{uri: image}} style={styles.image} />
        <Text style={styles.title}>{ title }</Text>
      </TouchableOpacity>
    </View>
  );
}
