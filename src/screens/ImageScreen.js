import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import ImageDetail from '../components/ImageDetail';

const ImageScreen = () => {
  const images = [
    { title: 'tree', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Ash_Tree_-_geograph.org.uk_-_590710.jpg/220px-Ash_Tree_-_geograph.org.uk_-_590710.jpg', score: 9},
    { title: 'flower', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Liliumbulbiferumflowertop.jpg/220px-Liliumbulbiferumflowertop.jpg', score: 10},
    { title: 'ocean', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Clouds_over_the_Atlantic_Ocean.jpg/220px-Clouds_over_the_Atlantic_Ocean.jpg', score: 8}
  ];
  return (
    <FlatList
      keyExtractor={(image) => image.title}
      data={images}
      renderItem={({ item }) => {
        return <ImageDetail title={item.title} image={item.image} score={item.score} />
      }}
    />
  );
};

const styles = StyleSheet.create({

});

export default ImageScreen;