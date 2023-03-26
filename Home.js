

import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {ImageBackground, StyleSheet, Text, View, TouchableOpacity, Linking, Image} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';



const Home = ({navigation}) => (
  
  <View style={styles.container}>
    
    <ImageBackground source={require("./assets/1.jpg")} resizeMode="cover" style={styles.image}>

  
    <View style={{flexDirection: "row",  Top: 10, margin: 10, padding: 10,  elevation: 5, alignContent: "center", justifyContent: "center"}}>
      <Text style = {{marginLeft: 10, marginTop: 4, fontSize: 15, fontWeight: 'bold', color: "#fff", }}>Objective Calvary</Text>
      <View style={{flexDirection: "row", marginLeft: 15, justifyContent: "center", backgroundColor: "#fff", borderBottomLeftRadius: 0, borderTopLeftRadius: 0, borderRadius: 20, padding: 5}}>
 
      <TouchableOpacity onPress={() => navigation.navigate("Home") } >
          <Text style={styles.txt}>Home</Text>
      </TouchableOpacity>
      
        <TouchableOpacity onPress={() => navigation.navigate("About") } >
        <Text style={styles.txt}>About</Text>
        </TouchableOpacity>

      </View>
    </View>
    
    <View style={{flex: 1, alignItems: "center", justifyContent: "center", marginTop: 100}}>
    
    {/* Hi */}
    <View style={{marginBottom: 150, backgroundColor: "rgba(31, 31, 31, 0.2)", padding: 30, borderWidth: 0.5, borderColor: "#fff", borderRadius: 8}}>
    <View style={styles.view}>
        <Text style={{color: "#fff", fontWeight: "bold", fontSize: 50, margin: 20}}>A Bible Context Tool</Text>
    </View>

    <View style={styles.view}>
        <TouchableOpacity style={styles.bt} onPress={ ()=>{ Linking.openURL('https://rebrand.ly/i79nnv8')}}>
              <Text style={{color: "#fff", fontWeight: "bold", fontSize: 17}}>Download OC 1.2.3</Text>
              <View style={styles.view2}>
              <Icon name="chevron-down" color={"#fff"} size={20}/>
             </View>
       </TouchableOpacity>

    <View style={styles.view3}>
        <Text style={{color: "#fff", fontWeight: "bold", fontSize: 15, margin: 10}}>Windows</Text>
        <Text style={{color: "#fff", fontWeight: "bold", fontSize: 15, margin: 10}}>|</Text>
        <Text style={{color: "#fff", fontSize: 15, margin: 10}}>Installer</Text>
        <Text style={{color: "#fff", fontWeight: "bold", fontSize: 15, margin: 10}}>|</Text>
        <Text style={{color: "#fff", fontSize: 15, margin: 10}}>217MB</Text>
    </View>

   

      </View>

      <View style={{marginTop:6}}>
        <Text style={{color: "#fff", fontWeight: "bold", fontSize: 17}}>Installation:</Text>

        <Text style={{color: "#fff",  fontSize: 17, margin: 2}}>1. To download the OC software, simply tap the green button located above which will direct you to the Google Drive link.</Text>
        <Text style={{color: "#fff",  fontSize: 17, margin: 2}}>2. After downloading the software, please run the setup file to install it.</Text>
        <View style={{backgroundColor: "rgba(225, 225, 225, 0.5)", borderRadius: 1, padding:3}}>
        <Text style={{color: "#fff",  fontSize: 17, margin: 2}}>3. If you encounter a <Text style={{color: "#03a155", fontWeight: "bold"}}>Windows pop-up message</Text> that says <Text style={{color: "#03a155", fontWeight: "bold"}}>"unrecognized app"</Text>, simply click on <Text style={{color: "#03a155", fontWeight: "bold"}}>"More info"</Text> and then select {'\n'}<Text style={{color: "#03a155", fontWeight: "bold"}}>"Run anyway"</Text>. This pop-up may appear because the software is still in early access.</Text>
        </View>
        <Text style={{color: "#fff",  fontSize: 17, margin: 2}}>4. Launch the desktop application and enjoy studying God's word.</Text>
       
      </View>

      </View>
     
      </View>
      
      {/* <View style={{justifyContent: "center", alignContent: "center", justifyContent: "center", borderWidth: 5}}>
      <ScrollView>
        <Image source={require("./assets/Windowsprotected.jpg")} style={{width: 150, height: 150, }}/>
      </ScrollView>
      </View> */}


    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
  

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

export default Home;