import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
  const friends = [
    { name: 'friend 1', age: 35},
    { name: 'friend 2', age: 31},
    { name: 'friend 3', age: 32},
    { name: 'friend 4', age: 37},
    { name: 'friend 5', age: 39},
    { name: 'friend 6', age: 42},
    { name: 'friend 7', age: 29},
    { name: 'friend 8', age: 27}
  ];
  return (
    <FlatList
      keyExtractor={(friend) => friend.name}
      data={friends}
      renderItem={({ item }) => {
        return <Text style={styles.text}>{item.name} - {item.age}</Text>;
      }}
    />
  );
}

const styles = StyleSheet.create({
  text: {
    marginHorizontal: 10
  }
});

export default ListScreen;