import React, { useState } from 'react';
import {StyleSheet, FlatList,TextInput, Button, Text, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import {addFilm} from '../store/film';

 function FilmView ()
{
    const [value, onChangeText] = React.useState('');
    const films = useSelector( (state => state.film.value) );
    const dispatch = useDispatch();

    const renderItem = ({ item }) => (
        <Text>{item}</Text>
      );
    return (
        <View>
             <TextInput
        style={styles.input}
       onChangeText={text => onChangeText(text)}
       value={value}
         /><Button
                onPress={() => {console.log('add : ' + value); dispatch( addFilm(value) )}} title="Add Film" />
        <FlatList
        data={films}
        renderItem={renderItem} 
      />

        </View>
    )
    
}

const styles = StyleSheet.create({
    input:{
      borderWidth : 4,
      borderColor:'blue',
      padding:20,
    }
  });

export {FilmView}