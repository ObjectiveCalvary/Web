// import { StatusBar } from 'expo-status-bar';
// import React, { useState, useCallback, } from "react";
// import { StyleSheet, Text, View, Dimensions, ScrollView, Image, TouchableOpacity, Linking } from 'react-native';
// import { ImageBackground } from 'react-native-web';


// const windowWidth = Dimensions.get('window').width;

// export default function App() {

  
//   return (




//     <View style={styles.container}>
//     <ImageBackground source={require("./assets/High Priest.jpg")} resizeMode="cover" style={styles.image}>


// {/* <View style={{justifyContent: "flex-end", backgroundColor: "#fff", width: "100%", height:250,  borderTopLeftRadius: 6, paddingLeft: 30, paddingBottom: 30, borderTopRightRadius: 6}}>
//   <Image source={require("./assets/Icon.png")} style={{width:150, height:150, right: 10, position: "absolute"}}/>

// <View style={{flex: 1, justifyContent: "flex-start", paddingTop: 30, marginBottom: 20,}}>

//   <TouchableOpacity onPress={() => Linking.openURL('https://www.instagram.com/objectivecalvary/')} style={{paddingVertical: 5, marginBottom: 20, flexDirection: "row", paddingLeft: 20, shadowColor: "#000", width: 320, shadowOffset: {width: 0, height: 8,},shadowOpacity: 0.44,shadowRadius: 10.32,elevation: 16, borderRadius: 5}}>
//   <Image source={require("./assets/Insta.png")} style={{width:28, height:28, }}/>
//     <Text style={{fontSize: 17,  marginLeft: 10}}>Follow Us On Instagram</Text>
//   </TouchableOpacity>

//   <TouchableOpacity onPress={() => Linking.openURL('https://za.pinterest.com/Objective_Calvary/')} style={{paddingVertical: 5, borderRadius: 5, marginBottom: 20, flexDirection: "row", paddingLeft: 20, marginTop: 2, shadowColor: "#000", width: 320, shadowOffset: {width: 0, height: 8,},shadowOpacity: 0.44,shadowRadius: 10.32,elevation: 16,}}>
//   <Image source={require("./assets/Pin.png")} resizeMode={"contain"} style={{width:28, height:28, }}/>
//     <Text style={{fontSize: 17,  marginLeft: 10}}>Follow Us On Pinterest</Text>
//     </TouchableOpacity>

//   <TouchableOpacity  style={{paddingVertical: 5, marginBottom: 30, borderRadius: 5, marginBottom: 20, flexDirection: "row", paddingLeft: 20, shadowColor: "#000", width: 400, shadowOffset: {width: 0, height: 8,},shadowOpacity: 0.44,shadowRadius: 10.32,elevation: 16,}}>
//   <Image source={require("./assets/Gmail.png")} resizeMode={"contain"} style={{width:28, height:28, marginTop: 2}}/>
//     <Text style={{fontSize: 17,  marginLeft: 10}}>Email Us At ObjectiveCalvary@gmail.com</Text>
//     </TouchableOpacity>
//     <Text style={{fontSize: 17,   paddingLeft: 10, fontWeight: "bold", marginBottom: 20, }}>Copyright: Objective Calvary's content is free to download and use in any medium that will spread the gospel of Jesus Christ.</Text>


//     </View>

// </View> */}

// </ImageBackground>
    
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
    
//   },
//   image: {
//     flex: 1,
//     justifyContent: 'center',
//   },
//   container2: {
//     paddingTop: 30,
//   },
//   container3: {
//     shadowColor: "#000", width: 320, shadowOffset: {width: 0, height: 8,},shadowOpacity: 0.44,shadowRadius: 10.32,elevation: 16, marginBottom: 10, marginRight: 5, borderRadius: 5
//   },
  
//   VideoView: {
//     width: 1900,
//     height: 1900,
//     borderWidth: 10,
//     marginTop:80,
//     borderColor: "#000"
//   },
//   title:{
//     color: "#fff", fontSize: 20, fontWeight: "bold", paddingLeft: 30,  marginBottom:3, 
//   },
//   scrollView: {
//     flex: 1, flexGrow: 1, width: windowWidth, paddingLeft: 30
//   },
//   video: {
//     width: 320, height: 160, backgroundColor: "#fff", borderRadius: 5, margin: 5, marginRight: 10, marginLeft:0, 
//   },
//   image:{
//     marginTop: 30, marginBottom: 10, color: "#141414", width: 320,  padding: 10, 
//   }

// });


import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {ImageBackground, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Counter from './Counter';


const Home = () => (
  
  <View style={styles.container}>
    <ImageBackground source={require("./assets/Computer_Background.jpg")} resizeMode="cover" style={styles.image}>

    {/* Hi */}
    <View style={{marginBottom: 100}}>
    <View style={styles.view}>
        <Text style={{color: "#fff", fontWeight: "bold", fontSize: 50, margin: 20}}>A Bible Context Tool</Text>
    </View>

    <View style={styles.view}>
      
      <Counter/>

    <View style={styles.view3}>
        <Text style={{color: "#fff", fontWeight: "bold", fontSize: 15, margin: 10}}>Windows</Text>
        <Text style={{color: "#fff", fontWeight: "bold", fontSize: 15, margin: 10}}>|</Text>
        <Text style={{color: "#fff", fontSize: 15, margin: 10}}>Installer</Text>
        <Text style={{color: "#fff", fontWeight: "bold", fontSize: 15, margin: 10}}>|</Text>
        <Text style={{color: "#fff", fontSize: 15, margin: 10}}>174MB</Text>
    </View>

      </View>
      </View>
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',

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
    marginBottom: 22,
    flexDirection: "row"
  }
  
});

export default Home;