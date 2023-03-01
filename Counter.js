import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {ImageBackground, StyleSheet, Text, View, TouchableOpacity, Linking} from 'react-native';
const Counter = () => {
    const [count, setCount] = useState(0);
   return (
        <View>
           {/* <Button
             onPress={() => {setCount(count + 1)}} title="Click Me"
           /> */}
           
           
           <TouchableOpacity style={styles.bt} onPress={ ()=>{ Linking.openURL('https://drive.google.com/file/d/1wxJAyBLC-QLN9n3SdnteCkEi-y6bWW-f/view')}} onPressIn={() => {setCount(count + 1)}}>
              <Text style={{color: "#fff", fontWeight: "bold", fontSize: 17}}>Download OC 1.0.0</Text>
              <View style={styles.view2}>
              <Icon name="chevron-down" color={"#fff"} size={20}/>
              </View>
           </TouchableOpacity>

           <Text style={{marginTop: 5, color:"#fff", fontWeight: "bold"}}>Downloads: {count}</Text>
       </View>
   );
}
export default Counter;

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