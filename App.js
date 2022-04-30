import { StatusBar } from 'expo-status-bar';
import React, { useState, useCallback, } from "react";
import { StyleSheet, Text, View, Dimensions, ScrollView, Image } from 'react-native';
import { WebView } from 'react-native-webview';
import YoutubePlayer from "react-native-youtube-iframe";

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

<View style={{flexDirection: "row"}}>

<Text style={{color: "#fff", fontSize: 30, margin: 10, fontWeight: "600", marginLeft: 30}}>Objective Calvary</Text>

</View>

<View style={{paddingLeft: 30, paddingTop: 30}}>
<Text style={{color: "#fff", fontSize: 20, fontWeight: "bold"}}>Genesis</Text>

<View style={{flexDirection: "row"}}>
  
  <View style={{width: 320, height: 160, backgroundColor: "#fff", borderRadius: 5, margin: 5, marginRight: 10, marginLeft:0}}>  
  <YoutubePlayer height={300} play={playing} videoId={"sV10n3B7S4I"} onChangeState={onStateChange}/>
  </View>

  <View style={{width: 320, height: 160, backgroundColor: "#fff", borderRadius: 5, margin: 5, marginRight: 10, marginLeft:0}}>  
  <YoutubePlayer height={300} play={playing} videoId={"Vwtt54Go2LM"} onChangeState={onStateChange}/>
  </View>

</View>

</View>


<View style={{paddingLeft: 30, paddingTop: 30}}>
<Text style={{color: "#fff", fontSize: 20, fontWeight: "bold"}}>Exodus</Text>

<View style={{flexDirection: "row"}}>
  
  <View style={{width: 320, height: 160, backgroundColor: "#fff", borderRadius: 5, margin: 5, marginRight: 10, marginLeft:0}}>  
  <YoutubePlayer height={300} play={playing} videoId={"ysJ_sqQoBMU"} onChangeState={onStateChange}/>
  </View>

  <View style={{width: 320, height: 160, backgroundColor: "#fff", borderRadius: 5, margin: 5, marginRight: 10, marginLeft:0}}>  
  <YoutubePlayer height={300} play={playing} videoId={"loPBNrQfoN0"} onChangeState={onStateChange}/>
  </View>

</View>

</View>
     
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'flex-start',
    
  },
  
  VideoView: {
    width: 1900,
    height: 1900,
    borderWidth: 10,
    marginTop:80,
    borderColor: "#000"
  }

});
