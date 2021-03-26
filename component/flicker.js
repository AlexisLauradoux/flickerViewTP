import React, { useRef, useEffect, useState } from 'react';
import {Alert, Modal, StyleSheet,  View,Image, Text, Animated,Pressable } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

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
         
          <View style={styles.container}>
          {
            filterPhoto().map( ( photo,index ) => { return (
              <Item key={index} name={photo.name} url={photo.url}/>
            ) })
          }     
          </View>
     
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
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <View>
       {/* <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
            <Text style={styles.center}>{name}</Text>
         <Image 
          resizeMode='contain' 
          resizeMethod='scale'
              style={styles.fullSize}
              source={{uri: url }} 
          />
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Hide Modal</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        </View> */}
    
        <FadeInView>
               <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => setModalVisible(true)}
        >
        <Text style={styles.center}>{name}</Text>
         <Image 
              style={styles.stretch}
              source={{uri: url }} 
          />
              </Pressable>
      </FadeInView>
      </View>
    )
  }

  const styles = StyleSheet.create({
    container: {
       display: 'flex',
       flexDirection:'row',
       flexWrap: 'wrap'
    },
    stretch: {
      width: 150,
      height: 150,
      margin: 15,
      resizeMode: 'stretch',
    },
    fullSize: {
        width: '100%',
        height: 'auto',
        margin: 15,
      },
    center :{
      textAlign:'center'
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
      modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
      },
      buttonOpen: {
        backgroundColor: "#F194FF",
      },
      buttonClose: {
        backgroundColor: "#2196F3",
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center"
      }
  });

  
export {List}
  