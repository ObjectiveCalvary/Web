

import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {ImageBackground, StyleSheet, Text, View, TouchableOpacity, Linking, FlatList, Image} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const IMAGES = [
    { id: '1', source: require('./assets/Gallery/1.jpg') },
    { id: '2', source: require('./assets/Gallery/2.jpg') },
    { id: '3', source: require('./assets/Gallery/3.jpg') },
    { id: '4', source: require('./assets/Gallery/4.jpg') },
    { id: '5', source: require('./assets/Gallery/5.jpg') },
    { id: '6', source: require('./assets/Gallery/6.jpg') },
    { id: '7', source: require('./assets/Gallery/7.jpg') },
    { id: '8', source: require('./assets/Gallery/8.jpg') },
    { id: '9', source: require('./assets/Gallery/9.jpg') },
  ];

const Gallery = ({navigation}) => (
  
  <View style={styles.container}>
    
    <ImageBackground source={require("./assets/2.jpg")} resizeMode="cover" style={styles.image}>

  
    <View style={{flexDirection: "row",  Top: 10, margin: 10, marginLeft: 3, padding: 10,  elevation: 5, }}>
      <Text style = {{marginLeft: 10, marginTop: 4, fontSize: 15, fontWeight: 'bold', color: "#fff", }}>Objective Calvary</Text>
      <View style={{flexDirection: "row", marginLeft: 15, justifyContent: "center", backgroundColor: "#fff", borderRadius: 20, padding: 5}}>
      <TouchableOpacity onPress={() => navigation.navigate("Home") } >
          <Text style={styles.txt}>Home</Text>
      </TouchableOpacity>
      
        <TouchableOpacity onPress={() => navigation.navigate("About") } >
        <Text style={styles.txt}>About</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Gallery") } >
        <Text style={styles.txt}>Gallery</Text>
        </TouchableOpacity>
      </View>
    </View>
    
    <Text style={{color: "#fff", fontWeight: "bold", fontSize: 50, margin: 15}}>Gallery</Text>

    <FlatList
        data={IMAGES}
        keyExtractor={(item) => item.id}
        numColumns={3}
        renderItem={({ item }) => (
        <ScrollView>
          <View style={styles.imageContainer}>
            <Image style={styles.image} source={item.source} />
          </View>
        </ScrollView>
        )}
      />
 </ImageBackground>
  </View>
  
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1f1f1f"
  },
  image: {
    flex: 1,
  },
  imageContainer: {
    flex: 1,
    margin: 5,
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    flex: 1,
    aspectRatio: 16/9,
    borderRadius: 10,
    margin: 10,
  },

  bt: {
    borderRadius: 5,
    paddingHorizontal: 80,
    paddingVertical: 10,
    backgroundColor: "#03a155",
    shadowColor: "#000",
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    flexDirection: "row",
  },
  view: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  view2: {
    position: "absolute",
    right: 25,
    flex: "flex-end",
  },
  view3: {
    
    flexDirection: "row"
  },
  txt: {
    fontSize: 14,
    fontWeight: "500",
    marginHorizontal: 10
  }
  
});

export default Gallery;