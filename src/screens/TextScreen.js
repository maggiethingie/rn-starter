import React, { useState } from 'react';
import { Text, View, Button, StyleSheet, TextInput } from 'react-native';

const TextScreen = () => {
  const [password, setPassword] = useState('');

  return (
    <View>
      <Text>Enter password</Text>
      <TextInput
        style={styles.textInput}
        autoCapitalize="none"
        autoCorrect={false}
        // this line appears unnecessary, hm...
        // value={password}
        onChangeText={(newInput) => setPassword(newInput)}
      />
      { password.length < 5 ? <Text>Password must be at least five characters!</Text> : null }
    </View>
  )
};

const styles = StyleSheet.create({
  textInput: {
    borderColor: 'black',
    borderBottomWidth: 1,
    margin: 15,
    outline: 'none'
  }
});

export default TextScreen;