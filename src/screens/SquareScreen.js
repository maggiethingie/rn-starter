import React, { useReducer } from 'react';
import { Text, View, Button, StyleSheet, FlatList } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 20;

// arg1 = our entire state object
// arg2 = object that describes change we want to make ("action")
// ALWAYS return something from your reducer, that is your new state object!
const reducer = (state, action) => {
  // state === { red: number, green: number, blue: number };
  // action === { type: 'changeRed' || 'changeGreen' || 'changeBlue', payload: 20 || -20 }
  switch (action.type) {
    case 'changeRed':
      return state.red + action.payload > 255 || state.red + action.payload < 0 ? state : { ...state, red: state.red + action.payload };
    case 'changeGreen':
      return state.green + action.payload > 255 || state.green + action.payload < 0 ? state : { ...state, green: state.green + action.payload };
    case 'changeBlue':
      return state.blue + action.payload > 255 || state.blue + action.payload < 0 ? state : { ...state, blue: state.blue + action.payload };
    default:
      return state;
  }
};

const SquareScreen = () => {
  // dispatch = the thing that runs the reducer!
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
  // reducer = function we need to write
  // second argument here is what we want our initial state to be!
  const { red, green, blue } = state;
  return (
    <View>
      <ColorCounter
        color="Red"
        onIncrease={() => dispatch({ type: 'changeRed', payload: COLOR_INCREMENT })}
        onDecrease={() => dispatch({ type: 'changeRed', payload: -1 * COLOR_INCREMENT })}
      />
      <ColorCounter
        color="Green"
        onIncrease={() => dispatch({ type: 'changeGreen', payload: COLOR_INCREMENT })}
        onDecrease={() => dispatch({ type: 'changeGreen', payload: -1 * COLOR_INCREMENT })}
      />
      <ColorCounter
        color="Blue"
        onIncrease={() => dispatch({ type: 'changeBlue', payload: COLOR_INCREMENT })}
        onDecrease={() => dispatch({ type: 'changeBlue', payload: -1 * COLOR_INCREMENT })}
      />
      <View style={{ backgroundColor: `rgb(${red}, ${green}, ${blue})`, height: 50, width: 50 }}></View>
    </View>
  );
};

export default SquareScreen;