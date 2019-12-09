import React from 'react';
import { inject, observer } from 'mobx-react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import { SquareItem } from '../components/SquareItem';

function SquaredScreenContainer({ data, active, save }) {
  return (
    <ScrollView style={styles.container}>
      {data.map((item, i) => {
        return (<SquareItem key={i} active={active} save={save} {...item} />)
      })}
    </ScrollView>
  );
}

class SquaredScreen extends React.Component {
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
        viewStore: {
          view,
        },
        squaredStore: {
          squared,
          saveSquared,
          squareActive
        }
      },
    } = this.props;

    return <SquaredScreenContainer data={squared} save={saveSquared} active={squareActive} />;
  }
}

SquaredScreen.navigationOptions = {
  title: 'Squared',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});

export default inject("rootStore")(observer(SquaredScreen));
