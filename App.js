import { StatusBar } from 'expo-status-bar';
import React, { useState, useCallback, } from "react";
import { StyleSheet, Text, View, Dimensions, ScrollView, Image, TouchableOpacity, Linking } from 'react-native';
import { WebView } from 'react-native-webview';
import YoutubePlayer from "react-native-youtube-iframe";

import Info from './Components/model';
import ExodusDATA26 from './Data/Exodus';
import GenDATA from './Data/Genesis';
import PopularDATA from './Data/Popular';

const windowWidth = Dimensions.get('window').width;

export default function App() {
  const [playing, setPlaying] = useState(false);

  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
      Alert.alert("video has finished playing!");
    }
  }, []);

  const togglePlaying = useCallback(() => {
    setPlaying((prev) => !prev);
  }, []);
  
  return (




    <View style={styles.container}>
      
      <View style={{flexDirection: "column"}}>
          <Text style={{color: "#fff", fontSize: 30, marginBottom: 3, margin: 10, fontWeight: "600", marginLeft: 30}}>Objective Calvary</Text>
          <Text style={{color: "#fff", fontSize: 12, fontWeight: "600", marginLeft: 30}}>It's not about the views, It's about the message.</Text>
      </View>



{/*New Playlist*/}
<View style={styles.container2}>
<Text style={styles.title}>Popular</Text>


<View style={{flexDirection: "row", }}>
<ScrollView horizontal  contentContainerStyle={styles.scrollView}>

<View style={styles.container3}>
 

   {/*New Video*/}
   <View style={styles.video}>  
     <YoutubePlayer height={300} play={playing} videoId={"Vwtt54Go2LM"} onChangeState={onStateChange}/>
   </View>

    <View style={styles.image}>
    <Info Text={"Success"} DataB={PopularDATA} Title={"Brief 3D illumination of Jesus' life on earth"}/>
    </View>
  </View>
  {/*End of New Video*/}


  </ScrollView>
</View>


</View>
{/*End of New Playlist*/}





{/*New Playlist*/}
<View style={styles.container2}>
<Text style={styles.title}>Exodus</Text>


<View style={{flexDirection: "row", }}>
<ScrollView horizontal  contentContainerStyle={styles.scrollView}>

<View style={styles.container3}>
 
   {/*New Video*/}
   <View style={styles.video}>  
     <YoutubePlayer height={300} play={playing} videoId={"sV10n3B7S4I"} onChangeState={onStateChange}/>
   </View>

    <View style={styles.image}>
    <Info Text={"Success"} DataB={ExodusDATA26} Title={"The Tabernacle"}/>
    </View>
  </View>
  {/*End of New Video*/}
 

  </ScrollView>
</View>
</View>
{/*End of New Playlist*/}

{/*New Playlist*/}
<View style={styles.container2}>
<Text style={styles.title}>Timelines</Text>


<View style={{flexDirection: "row", }}>
<ScrollView horizontal  contentContainerStyle={styles.scrollView}>

<View style={styles.container3}>
 
   {/*New Video*/}
   <View style={styles.video}>  
     <YoutubePlayer height={300} play={playing} videoId={"sV10n3B7S4I"} onChangeState={onStateChange}/>
   </View>

    <View style={styles.image}>
    <Info Text={"Success"} DataB={GenDATA} Title={"Tabernacle"}/>
    </View>
  </View>
  {/*End of New Video*/}
 

  </ScrollView>
</View>


</View>
{/*End of New Playlist*/}


<View style={{justifyContent: "flex-end", backgroundColor: "#fff", width: "100%", height:200,  borderTopLeftRadius: 6, paddingLeft: 30, paddingBottom: 30, borderTopRightRadius: 6}}>
  <Image source={require("./assets/Icon.png")} style={{width:150, height:150, right: 10, position: "absolute"}}/>

<View style={{flex: 1, justifyContent: "flex-start", paddingTop: 30, marginBottom: 20,}}>

  <TouchableOpacity onPress={() => Linking.openURL('https://www.instagram.com/objectivecalvary/')} style={{paddingVertical: 5, marginBottom: 20, flexDirection: "row", paddingLeft: 20, shadowColor: "#000", width: 320, shadowOffset: {width: 0, height: 8,},shadowOpacity: 0.44,shadowRadius: 10.32,elevation: 16, borderRadius: 5}}>
  <Image source={require("./assets/Insta.png")} style={{width:28, height:28, }}/>
    <Text style={{fontSize: 17,  marginLeft: 10}}>Follow Us On Instagram</Text>
  </TouchableOpacity>

  <TouchableOpacity onPress={() => Linking.openURL('https://za.pinterest.com/Objective_Calvary/')} style={{paddingVertical: 5, borderRadius: 5, marginBottom: 20, flexDirection: "row", paddingLeft: 20, marginTop: 2, shadowColor: "#000", width: 320, shadowOffset: {width: 0, height: 8,},shadowOpacity: 0.44,shadowRadius: 10.32,elevation: 16,}}>
  <Image source={require("./assets/Pin.png")} resizeMode={"contain"} style={{width:28, height:28, }}/>
    <Text style={{fontSize: 17,  marginLeft: 10}}>Follow Us On Pinterest</Text>
    </TouchableOpacity>

  <TouchableOpacity  style={{paddingVertical: 5, borderRadius: 5, marginBottom: 20, flexDirection: "row", paddingLeft: 20, shadowColor: "#000", width: 400, shadowOffset: {width: 0, height: 8,},shadowOpacity: 0.44,shadowRadius: 10.32,elevation: 16,}}>
  <Image source={require("./assets/Gmail.png")} resizeMode={"contain"} style={{width:28, height:28, marginTop: 2}}/>
    <Text style={{fontSize: 17,  marginLeft: 10}}>Email Us At ObjectiveCalvary@gmail.com</Text>
    </TouchableOpacity>
    <Text style={{fontSize: 17,   paddingLeft: 10, fontWeight: "bold", marginBottom: 20, }}>Copyright: Objective Calvary's content is free to download and use in any medium that will spread the gospel of Jesus Christ.</Text>


    </View>

</View>

     
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#141414',
    alignItems: 'flex-start',
    
  },
  container2: {
    paddingTop: 30,
  },
  container3: {
    shadowColor: "#000", width: 320, shadowOffset: {width: 0, height: 8,},shadowOpacity: 0.44,shadowRadius: 10.32,elevation: 16, marginBottom: 10, marginRight: 5, borderRadius: 5
  },
  
  VideoView: {
    width: 1900,
    height: 1900,
    borderWidth: 10,
    marginTop:80,
    borderColor: "#000"
  },
  title:{
    color: "#fff", fontSize: 20, fontWeight: "bold", paddingLeft: 30,  marginBottom:3,
  },
  scrollView: {
    flex: 1, flexGrow: 1, width: windowWidth, paddingLeft: 30
  },
  video: {
    width: 320, height: 160, backgroundColor: "#fff", borderRadius: 5, margin: 5, marginRight: 10, marginLeft:0, 
  },
  image:{
    marginTop: 30, marginBottom: 10, color: "#141414", width: 320,  padding: 10, 
  }

});
