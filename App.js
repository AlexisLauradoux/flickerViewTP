import React, { useRef, useEffect } from 'react';
import {  StyleSheet, View,Image, Text, Animated, TextInput } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Carousel from 'react-native-snap-carousel';

import store from './store/store'
import { Provider } from 'react-redux'
const imgs = [
  {
      url :'https://live.staticflickr.com/65535/51066013861_1ac79b5774_b.jpg',
      name: 'Image 1'
  },
  {
      url :'https://live.staticflickr.com/65535/51066104007_9a977823cb_b.jpg',
      name: 'Image 2'
  },
  {
      url :'https://live.staticflickr.com/65535/51066007901_2aa917a41c_b.jpg',
      name: 'Image 3'
  },
  {
      url :'https://live.staticflickr.com/65535/51066005761_f54edd360e_c.jpg',
      name: 'Image 4'
  },
  {
      url :'https://live.staticflickr.com/65535/51066013861_1ac79b5774_b.jpg',
      name: 'Image 5'
  },
  {
      url :'https://live.staticflickr.com/65535/51066104007_9a977823cb_b.jpg',
      name: 'Image 6'
  },
  {
      url :'https://live.staticflickr.com/65535/51066007901_2aa917a41c_b.jpg',
      name: 'Image 7'
  },
  {
      url :'https://live.staticflickr.com/65535/51066005761_f54edd360e_c.jpg',
      name: 'Image 8'
  },
  {
      url :'https://live.staticflickr.com/65535/51066013861_1ac79b5774_b.jpg',
      name: 'Image 9'
  },
  {
      url :'https://live.staticflickr.com/65535/51066104007_9a977823cb_b.jpg',
      name: 'Image 10'
  },
  {
      url :'https://live.staticflickr.com/65535/51066007901_2aa917a41c_b.jpg',
      name: 'Image 11'
  },
  {
      url :'https://live.staticflickr.com/65535/51066005761_f54edd360e_c.jpg',
      name: 'Image 12'
  },
  {
      url :'https://live.staticflickr.com/65535/51066013861_1ac79b5774_b.jpg',
      name: 'Image 13'
  },
  {
      url :'https://live.staticflickr.com/65535/51066104007_9a977823cb_b.jpg',
      name: 'Image 14'
  },
  {
      url :'https://live.staticflickr.com/65535/51066007901_2aa917a41c_b.jpg',
      name: 'Image 15'
  },
  {
      url :'https://live.staticflickr.com/65535/51066005761_f54edd360e_c.jpg',
      name: 'Image 16'
  },
]

function List({search})
{
 
const filterPhoto = () => 
{
  if(search)
  {
    return imgs.filter(img => img.name.includes(search))
  }
  return imgs
}
  return (
        <ScrollView>
        <View style={styles.container}>
        {
          filterPhoto().map( ( photo,index ) => { return (
            <Item key={index} name={photo.name} url={photo.url}/>
          ) })
        }     
        </View>
        </ScrollView>
  )
}

const FadeInView = (props) =>
  {
  const fadeAnim = useRef( new Animated.Value( 0 ) ).current
    
    useEffect( () =>
    {
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        delay: Math.random()*1500,
        duration: 4000,
      }
    ).start();
  }, )
    
    return (
      <Animated.View               
        style={{
          ...props.style,
          opacity: fadeAnim,      
        }}
      >
        {props.children}
      </Animated.View>
    );
    
  }

function Item({name,url})
{
  return (
    <FadeInView>
      <Text style={styles.center}>{name}</Text>
       <Image 
            style={styles.stretch}
            source={{uri: url }} 
        />
    </FadeInView>
  )
}

export default function App ()
{
  const [value, onChangeText] = React.useState('');
  return (
    <View>
      <TextInput
      style={styles.input}
     onChangeText={text => onChangeText(text)}
     value={value}
    />
     <List search={value}></List>
     <Carousel
            style={styles.bidon}
             ref={(c) => { _carousel = c; }}
              data={filterPhoto(value)}
              renderItem={({item, index}) =>  <View key={index}><Text>{item.name}</Text></View>}
              sliderWidth={360}
              itemWidth={300}
              itemHeight={300}
              layout={"default"}
            />
     </View>
  );
}


const styles = StyleSheet.create({
  input:{
    borderWidth : 4,
    borderColor:'blue',
    padding:20,
  },
  container: {
     display: 'flex',
     flexDirection:'row',
     flexWrap: 'wrap'
  },
  bidon:{
    margin:0,
  },
  stretch: {
    width: 150,
    height: 150,
    margin: 15,
    resizeMode: 'stretch',
  },
  center :{
    textAlign:'center'
  }
});
