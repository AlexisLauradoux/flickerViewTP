import React, { useRef, useEffect } from 'react';
import {  StyleSheet, View,Image, Text, Animated, TextInput } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import store from './store/store'
import { Provider } from 'react-redux'
import {List} from './component/flicker'
import {FilmView} from './component/film'

export default function App ()
{
  const [value, onChangeText] = React.useState('');
  return (
    <Provider store={store}>
    <ScrollView>
      <TextInput
      style={styles.input}
     onChangeText={text => onChangeText(text)}
     value={value}
    />
     <List search={value}></List>
    
     <FilmView></FilmView>
     </ScrollView>
  </Provider>
  );
}

const styles = StyleSheet.create({
  input:{
    borderWidth : 4,
    borderColor:'blue',
    padding:20,
  }
});
