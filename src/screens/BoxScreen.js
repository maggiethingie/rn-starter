import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <View style={styles.viewOneStyle}></View>
      <View style={styles.viewTwoStyle}></View>
      <View style={styles.viewThreeStyle}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    borderColor: 'black',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 200
  },
  viewOneStyle: {
    backgroundColor: 'red',
    height: 50,
    width: 50
    // position: 'absolute',
    // ignores default alignItems value of 'stretch' but
    // adheres to deliberately set alignItems rule
  },
  viewTwoStyle: {
    backgroundColor: 'green',
    height: 50,
    marginTop: 50,
    width: 50
  },
  viewThreeStyle: {
    backgroundColor: 'purple',
    height: 50,
    width: 50
    //...StyleSheet.absoluteFillObject
    // equivalent to:
    // position: 'absolute',
    // top: 0, bottom: 0, left: 0, right: 0
  }
});

export default BoxScreen;