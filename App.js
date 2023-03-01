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

import React from "react";
import {Image, Text, View} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import Home from "./Home";


const Stack = createStackNavigator();
function LogoTitle() {
  return (
    <View style={{flexDirection: "row"}}>
    <Image
      style={{ width: 50, height: 50 }}
      source={require('./assets/icon.png')}
    />
    <View style={{marginLeft: 20, marginTop: 7}}>
    <Text style={{textAlign: "center", fontWeight: "700", color: "#fff", fontSize: 25, textAlignVertical: "center"}}>Objective Calvary</Text>
    </View>
    </View>
  );
}


export default function App({navigation}) {

  return (
    <NavigationContainer>
    <Stack.Navigator>
     <Stack.Screen name="Home" component={Home} options={{title: 'Objective Calvary', headerTitle: (props) => <LogoTitle {...props} />, 
     headerTintColor: '#000',
      headerStyle: {
        backgroundColor: '#6b6b6b',
        borderBottomColor: '#ffffff',
        borderBottomWidth: 0,
      },
      headerTitleStyle: {
        fontSize: 18,
        color: "#000"
      }
      }}/>
      
  </Stack.Navigator>
  </NavigationContainer>
  );
}