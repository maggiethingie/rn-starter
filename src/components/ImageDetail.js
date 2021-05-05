import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ImageDetail = ({ title, score, image }) => {
  return (
    <View>
      <Text>{title}</Text>
      <Text>{score}</Text>
      <Image source={{uri: image}} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  image : {
    height: 50,
    width: 50
  }
});

export default ImageDetail;