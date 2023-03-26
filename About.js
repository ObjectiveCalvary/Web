

import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {ImageBackground, StyleSheet, Text, View, TouchableOpacity, Linking} from 'react-native';



const About = ({navigation}) => (
  
  <View style={styles.container}>
    
    <ImageBackground source={require("./assets/5.jpg")} resizeMode="cover" style={styles.image}>

  
    <View style={{flexDirection: "row",  Top: 10, margin: 10, padding: 10,  elevation: 5, alignContent: "center", justifyContent: "center"}}>
      <Text style = {{marginLeft: 10, marginTop: 4, fontSize: 15, fontWeight: 'bold', color: "#fff", }}>Objective Calvary</Text>
      <View style={{flexDirection: "row", marginLeft: 15, justifyContent: "center", backgroundColor: "#fff", borderRadius: 20, padding: 5}}>
     
      <TouchableOpacity onPress={() => navigation.navigate("Home") } >
          <Text style={styles.txt}>Home</Text>
      </TouchableOpacity>
      
        <TouchableOpacity onPress={() => navigation.navigate("About") } >
        <Text style={styles.txt}>About</Text>
        </TouchableOpacity>

      </View>
    </View>
    
    <View style={{flex: 1}}>
    {/* Hi */}
    <View style={{marginBottom: 100}}>
    <View style={styles.view}>
        <Text style={{color: "#2b2b2b", fontWeight: "bold", fontSize: 50, margin: 10}}>About US</Text>
    </View>

    <View style={styles.view}>


       
        <Text style={styles.txt_t}>Objective Calvary: The Ultimate 3D Christian Illustration Software</Text>
        <View style={{backgroundColor: "rgba(225, 225, 225, 0.2)",  padding: 10, borderWidth: 0.5, borderColor: "#2b2b2b", borderRadius: 8}}>
        <Text style={styles.txt2}>Are you looking for a way to better visualize the stories and teachings of the Bible? Do you struggle to grasp the full meaning and context of the words on the page? Look no further than Objective Calvary, the revolutionary 3D illustration software designed specifically for Christians. {"\n"}{"\n"}</Text>
        <Text style={styles.txt2}>With Objective Calvary, you can bring the Bible to life like never before. Our faithful depictions of biblical passages are created with meticulous attention to detail, ensuring that every scene is accurate and true to the Word of God. {"\n"}{"\n"}</Text>
        <Text style={styles.txt2}>Whether you're a pastor looking to enhance your sermons with visual illustrations, a Bible study leader seeking to deepen your group's understanding, or simply a curious Christian eager to explore the stories that shape our faith, Objective Calvary has everything you need. Our easy-to-use interface and powerful rendering capabilities are simple to use and will help you captivate your audience and illuminate the mysteries of the Bible. {"\n"}{"\n"}</Text>
        <Text style={styles.txt2}>So why wait? Start your journey with Objective Calvary today and discover the power of 3D Christian illustration. With our software, you'll gain new insights into the Bible and deepen your relationship with Jesus Christ. {"\n"}{"\n"}</Text>
        </View>
        <Text style={styles.txt_t}>Disclaimer:</Text>
        <View style={{backgroundColor: "rgba(225, 225, 225, 0.2)", padding: 10, borderWidth: 0.5, borderColor: "#2b2b2b", borderRadius: 8}}>
        <Text style={styles.txt2}>Any content, including 3D models and illustrations, used from Objective Calvary is free to use in any medium that seeks to spread the gospel of Jesus Christ. However, we ask that you credit Objective Calvary and its creators appropriately in your work. The content provided by Objective Calvary is intended for non-commercial, educational, and evangelistic purposes only. Any use of the content for commercial or personal gain without permission is strictly prohibited. The creators of Objective Calvary assume no responsibility for any errors or omissions in the content, and disclaim any liability for any damages or losses that may arise from its use. By using the content provided by Objective Calvary, you agree to these terms and conditions.</Text>
        </View>

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
  

  },
  txt2: {
    fontSize: 15,  
    margin: 10, 
    color: "#2b2b2b",
  },
  txt_t: {
    color: "#2b2b2b", fontSize: 20, margin: 10, fontWeight: "bold", marginVertical: 30
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
    marginHorizontal: "10%",
    flexDirection: "column",
    left: 5
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
    marginHorizontal: 10,
    color: "#2b2b2b"
  }
  
});

export default About;