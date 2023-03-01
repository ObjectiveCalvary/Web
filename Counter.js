// import React, { useState } from 'react';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import {ImageBackground, StyleSheet, Text, View, TouchableOpacity, Linking} from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const Counter = () => {
//     const [count, setCount] = useState(0);
//     const [value, setvalue] = useState();

//     const saveValue = () => {
//       if (count) {
//         AsyncStorage.setItem('any_key_here', count)
//         setCount()
//         alert('Data Saved')
//       }
//     }

//     const getValue = () => {
//       AsyncStorage.getItem("any_key_here").then((value) => {
//         setvalue(value)
//       })
//     }

//    return (
//         <View>
//            {/* <Button
//              onPress={() => {setCount(count + 1)}} title="Click Me"
//            /> */}
           
           
//            <TouchableOpacity style={styles.bt} onPress={ ()=>{ Linking.openURL('https://drive.google.com/file/d/1wxJAyBLC-QLN9n3SdnteCkEi-y6bWW-f/view')}} onPressIn={() => {setCount(count + 1)}}>
//               <Text style={{color: "#fff", fontWeight: "bold", fontSize: 17}}>Download OC 1.0.0</Text>
//               <View style={styles.view2}>
//               <Icon name="chevron-down" color={"#fff"} size={20}/>
//               </View>
//            </TouchableOpacity>

//            <Text style={{marginTop: 5, color:"#fff", fontWeight: "bold"}}>Downloads: {value}</Text>
//        </View>
//    );
// }
// export default Counter;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   image: {
//     flex: 1,
//     justifyContent: 'center',

//   },

//   bt: {
//     borderRadius: 5,
//     paddingHorizontal: 80,
//     paddingVertical: 10,
//     backgroundColor: "#03a155",
//     shadowColor: "#000",
//     shadowOffset: {width: 0, height: 2},
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//     flexDirection: "row",
//   },
//   view: {
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   view2: {
//     position: "absolute",
//     right: 25,
//     flex: "flex-end",
//   },
//   view3: {
//     flexDirection: "row"
//   }
  
// });


import React, { useState, useEffect } from 'react';
import { View, Text, Button, TouchableOpacity, Linking, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome';

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Retrieve count from AsyncStorage when component mounts
    AsyncStorage.getItem('count').then((countValue) => {
      if (countValue !== null) {
        setCount(parseInt(countValue));
      }
    });
  }, []);

  const incrementCount = () => {
    // Update count and save to AsyncStorage
    const newCount = count + 1;
    setCount(newCount);
    AsyncStorage.setItem('count', newCount.toString());
  };

  const resetCount = () => {
    // Reset count state and AsyncStorage
    setCount(0);
    AsyncStorage.removeItem('count').catch(error => {
      console.log('Error removing count from AsyncStorage:', error);
    });
  };

  return (
    <View>

        <TouchableOpacity style={styles.bt} onPress={ ()=>{ Linking.openURL('https://drive.google.com/file/d/1wxJAyBLC-QLN9n3SdnteCkEi-y6bWW-f/view')}} onPressIn={incrementCount}>
              <Text style={{color: "#fff", fontWeight: "bold", fontSize: 17}}>Download OC 1.0.0</Text>
              <View style={styles.view2}>
              <Icon name="chevron-down" color={"#fff"} size={20}/>
               </View>
        </TouchableOpacity>

      <Text style={{marginTop: 5, color:"#fff", fontWeight: "bold"}}>Downloads: {count}</Text>

      {/* <Button title="Increment" onPress={incrementCount} />
      <Button title="Reset" onPress={resetCount} /> */}
    </View>
  );
};

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