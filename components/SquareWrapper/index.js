import React from 'react';
import { inject, observer } from 'mobx-react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { SquareItem } from '../../components/SquareItem';
import { SQUARED } from '../../static/entries';
import styles from './styleSheet';

function SquareWrapperComponent({ data, save, active }) {

  const _renderItem = (data) => {
    return (
      <SquareItem
        active={active}
        save={save}
        {...data.item} />
    );
  }

  return (
    <Carousel
      data={data}
      renderItem={(item, index) => _renderItem(item)}
      sliderWidth={300}
      itemWidth={300} />
  );
}

class SquareWrapper extends React.Component {
  componentDidMount() {
    const {
      rootStore: {
        squaredStore: {
          getSquared
        }
      },
    } = this.props;
    getSquared();
  }

  render() {
    const {
      rootStore: {
        squaredStore: {
          squared,
          saveSquared,
          squareActive,
          state
        }
      },
    } = this.props;

    return (
      <View style={styles.container}>
        {state === 'pending' && <View><Text>Loading...</Text></View>}
        {state === 'error' && <View><Text>Squared Error!</Text></View>}
        {state === 'empty' && <View><Text>Squared Empty!</Text></View>}
        {squared && state === 'done' && saveSquared && squareActive && <SquareWrapperComponent data={squared} save={saveSquared} active={squareActive} />}
      </View>
    );
  }
}

export default inject("rootStore")(observer(SquareWrapper));
