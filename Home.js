

import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {ImageBackground, StyleSheet, Text, View, TouchableOpacity, Linking} from 'react-native';



const Home = () => (
  
  <View style={styles.container}>
    <ImageBackground source={require("./assets/Computer_Background.jpg")} resizeMode="cover" style={styles.image}>

    {/* Hi */}
    <View style={{marginBottom: 100}}>
    <View style={styles.view}>
        <Text style={{color: "#fff", fontWeight: "bold", fontSize: 50, margin: 20}}>A Bible Context Tool</Text>
    </View>

    <View style={styles.view}>
        <TouchableOpacity style={styles.bt} onPress={ ()=>{ Linking.openURL('https://rebrand.ly/i79nnv8')}}>
              <Text style={{color: "#fff", fontWeight: "bold", fontSize: 17}}>Download OC 1.0.0</Text>
              <View style={styles.view2}>
              <Icon name="chevron-down" color={"#fff"} size={20}/>
             </View>
       </TouchableOpacity>

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
    
    flexDirection: "row"
  }
  
});

export default Home;