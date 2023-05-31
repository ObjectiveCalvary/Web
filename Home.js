
// import React from 'react';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import {ImageBackground, StyleSheet, Text, View, TouchableOpacity, Linking, Image, Dimensions } from 'react-native';
// import { ScrollView } from 'react-native-gesture-handler';

// const { width } = Dimensions.get('window')


// const Home = ({navigation}) => (
  
//   <ImageBackground source={require("./assets/1.jpg")} resizeMode="cover" style={styles.image}>

//   <View style={styles.container}>
  
//     {/* <View style={{flexDirection: "row",  Top: 10, margin: 10, padding: 10,  elevation: 5, alignContent: "center", justifyContent: "center"}}>
//       <Text style = {{marginLeft: 10, marginTop: 4, fontSize: 15, fontWeight: 'bold', color: "#fff", }}>Objective Calvary</Text>
//       <View style={{flexDirection: "row", marginLeft: 15, justifyContent: "center", backgroundColor: "#fff", borderBottomLeftRadius: 0, borderTopLeftRadius: 0, borderRadius: 20, padding: 5}}>
 
//       <TouchableOpacity onPress={() => navigation.navigate("Home") } >
//           <Text style={styles.txt}>Home</Text>
//       </TouchableOpacity>
      
//         <TouchableOpacity onPress={() => navigation.navigate("About") } >
//         <Text style={styles.txt}>About</Text>
//         </TouchableOpacity>

//       </View>
//     </View> */}
//     <View style = {{flex: 1, flexDirection: "column",}}>
//     <View style = {{flex: 1, flexDirection: "row",}}>

  

//     <TouchableOpacity style={{flex:1}} onPress={() => Linking.openURL('https://www.objectivecalvary.co.za/my/')} >
//       <View style ={{alignItems: "center", justifyContent: "center", backgroundColor: "rgba(251, 238, 193, 0.5)", flex: 1, margin : 30, borderRadius: 80, shadowColor: "#000", shadowOffset: {width: 0, height: 6, }, shadowOpacity: 0.37, shadowRadius: 7.49, elevation: 12,}}>
//         <Image source={require("./assets/user.png")} style={{ width: "50%", height: "50%" }} resizeMode="contain"/>
//         <Text adjustsFontSizeToFit numberOfLines={1} style= {{marginTop: 15, fontSize: 30, fontWeight: "bold"}}>Bible School</Text>
//       </View>
//       </TouchableOpacity>


//       <TouchableOpacity style={{flex:1}} onPress={() => navigation.navigate("Download") } >

//       <View style ={{alignItems: "center", justifyContent: "center", backgroundColor: "rgba(101, 157, 189, 0.5)", flex: 1, margin : 30, borderRadius: 80, shadowColor: "#000", shadowOffset: {width: 0, height: 6, }, shadowOpacity: 0.37, shadowRadius: 7.49, elevation: 12,}}>
//         <Image source={require("./assets/cube.png")} style={{ width: "50%", height: "50%" }} resizeMode="contain"/>
//         <Text style= {{marginTop: 15, fontSize: 30, fontWeight: "bold"}}>3D Software</Text>
//       </View>
//       </TouchableOpacity>
    


  

//       </View>

//       <View style = {{flex: 1, flexDirection: "row",}}>

  

// <TouchableOpacity style={{flex:1}} onPress={() => navigation.navigate("PricePlans") } >
//   <View style ={{alignItems: "center", justifyContent: "center", backgroundColor: "rgba(245, 64, 127, 0.5)", flex: 1, margin : 30, borderRadius: 80, shadowColor: "#000", shadowOffset: {width: 0, height: 6, }, shadowOpacity: 0.37, shadowRadius: 7.49, elevation: 12,}}>
//     <Image source={require("./assets/Plans.png")} style={{ width: "50%", height: "50%" }} resizeMode="contain"/>
//     <Text style= {{marginTop: 15, fontSize: 30, fontWeight: "bold"}}>Plans</Text>
//   </View>
//   </TouchableOpacity>

//   <TouchableOpacity style={{flex:1}} onPress={() => navigation.navigate("About") } >
//   <View style ={{alignItems: "center", justifyContent: "center", backgroundColor: "rgba(115, 250, 131, 0.5)", flex: 1, margin : 30, borderRadius: 80, shadowColor: "#000", shadowOffset: {width: 0, height: 6, }, shadowOpacity: 0.37, shadowRadius: 7.49, elevation: 12,}}>
//     <Image source={require("./assets/about.png")} style={{ width: "50%", height: "50%" }} resizeMode="contain"/>
//     <Text style= {{marginTop: 15, fontSize: 30, fontWeight: "bold"}}>About Us</Text>
//   </View>
//   </TouchableOpacity>



//   </View>

//     </View>
    

//     <View style={{ flexDirection: "row", bottom: 10, alignItems: "center", justifyContent: "center", paddingTop: 15 }}>

//    <TouchableOpacity onPress={() => Linking.openURL('https://www.instagram.com/objectivecalvary/')} style={{paddingVertical: 5, margin: 10, marginTop: 2, flexDirection: "row", paddingLeft: 20, shadowColor: "#000", width: 320, shadowOffset: {width: 0, height: 8,},shadowOpacity: 0.44,shadowRadius: 10.32,elevation: 16, borderRadius: 10}}>
//    <Image source={require("./assets/Insta.png")} style={{width:28, height:28, }}/>
//      <Text style={{fontSize: 17,  marginLeft: 10}}>Follow Us On Instagram</Text>
//    </TouchableOpacity>

//    <TouchableOpacity onPress={() => Linking.openURL('https://za.pinterest.com/Objective_Calvary/')} style={{paddingVertical: 5, margin: 10, borderRadius: 10,  flexDirection: "row", paddingLeft: 20, marginTop: 2, shadowColor: "#000", width: 320, shadowOffset: {width: 0, height: 8,},shadowOpacity: 0.44,shadowRadius: 10.32,elevation: 16,}}>
//    <Image source={require("./assets/Pin.png")} resizeMode={"contain"} style={{width:28, height:28, }}/>
//      <Text style={{fontSize: 17,  marginLeft: 10}}>Follow Us On Pinterest</Text>
//      </TouchableOpacity>

//      <TouchableOpacity onPress={() => Linking.openURL('https://www.youtube.com/@objectivecalvary5740')} style={{paddingVertical: 5, margin: 10, borderRadius: 10,  flexDirection: "row", paddingLeft: 20, marginTop: 2, shadowColor: "#000", width: 320, shadowOffset: {width: 0, height: 8,},shadowOpacity: 0.44,shadowRadius: 10.32,elevation: 16,}}>
//    <Image source={require("./assets/youtube.png")} resizeMode={"contain"} style={{width:28, height:28, }}/>
//      <Text style={{fontSize: 17,  marginLeft: 10}}>Follow Us On Youtube</Text>
//      </TouchableOpacity>

//      </View>
      
//   </View>
//   </ImageBackground>
// );

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
    
    
//   },
//   image: {
//     flex: 1,
  

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
//   },
//   txt: {
//     fontSize: 14,
//     fontWeight: "500",
//     marginHorizontal: 10
//   }
  
// });

// export default Home;

import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Modal, TouchableOpacity, Linking, ImageBackground} from 'react-native';
import BibleSchoolImage from './assets/4.jpg';
import BibleSoftwareImage from './assets/tab2.jpg';
import PricingPlansImage from './assets/Bible.jpg';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import the icon library



const Home = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [selectedPlan, setSelectedPlan] = useState('');

  const openModal = (planName) => {
    setSelectedPlan(planName);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setName('');
    setEmail('');
  };

  const submitDetails = () => {
    // Send the details to your email address
    const recipientEmail = 'Objectivecalvary@gmail.com';
    const emailSubject = 'User Details';
    const emailBody = `Name: ${name}\nEmail: ${email}\nPlan: ${selectedPlan}`;

    const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(
      emailSubject
    )}&body=${encodeURIComponent(emailBody)}`;

    window.location.href = mailtoLink;

    // Close the modal
    closeModal();
  };

  return (
    <ImageBackground source={require('./assets/1.jpg')} resizeMode="cover" style={{flex:1}}>

    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>

      <TouchableOpacity style={styles.button} onPress={() => Linking.openURL('https://www.objectivecalvary.co.za/my/')}>
      <View style={styles.plan}>

        <Text style={styles.planTitle}>Bible School</Text>
        <Text style={styles.planPrice}>Join Our Christian Community</Text>
        <Text style={styles.planDescription}></Text>
        <Text style={styles.planFeatures}>
          <Text style={styles.feature}>{'\n'}</Text>
          <Text style={styles.feature}>{'\n'}</Text>
          <Text style={styles.feature}>{'\n'}</Text>
        </Text>
       
          
       
      </View>
      </TouchableOpacity>


<TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Download") }>
      <View style={styles.plan2}>,
      
        <Text style={styles.planTitle}>3D Bible Software</Text>
        <Text style={styles.planPrice}>Try Out Our Biblical Illustration Programme</Text>
        <Text style={styles.planDescription}>{'\n'}</Text>
        <Text style={styles.planFeatures}>
          <Text style={styles.feature}>{'\n'}</Text>
          <Text style={styles.feature}>{'\n'}</Text>
          <Text style={styles.feature}>{'\n'}</Text>
          <Text style={styles.feature}>{'\n'}</Text>
        </Text>
        
     
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("PricePlans") }>
      <View style={styles.plan3}>
        <Text style={styles.planTitle}>Pricing Plans</Text>
        <Text style={styles.planPrice}>Choose a Plan that Fits Your Requirements</Text>
        <Text style={styles.planDescription}>{'\n'}</Text>
        <Text style={styles.planFeatures}>
          <Text style={styles.feature}>{'\n'}</Text>
          <Text style={styles.feature}>{'\n'}</Text>
          <Text style={styles.feature}>{'\n'}</Text>
          <Text style={styles.feature}>{'\n'}</Text>
          <Text style={styles.feature}>{'\n'}</Text>
        </Text>
     
      
  
      </View>
      </TouchableOpacity>


      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Contact Details</Text>
            <TextInput
              style={styles.input}
              placeholder="Name"
              value={name}
              onChangeText={setName}
            />
            <TextInput
              style={styles.input}
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
            />
            <View style={styles.modalButtons}>
              <TouchableOpacity style={styles.modalButton} onPress={closeModal}>
                <Text style={styles.modalButtonText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.modalButton} onPress={submitDetails}>
                <Text style={styles.modalButtonText}>Submit</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

<View style={{marginTop: 100}}>
 
      <TouchableOpacity
    style={[styles.socialButton, styles.instagramButton]}
    onPress={() => {
      // Handle Instagram button press
      Linking.openURL('https://www.instagram.com/oc_christian_illustrations/');
    }}
  >
    <Icon name="instagram" size={30} color="#fff" />
    
  </TouchableOpacity>

  
  {/* Add the YouTube button */}
  <TouchableOpacity
    style={[styles.socialButton, styles.youtubeButton]}
    onPress={() => {
      // Handle YouTube button press
      Linking.openURL('https://www.youtube.com/@objectivecalvary5740');
    }}
  >
    <Icon name="youtube" size={30} color="#fff" />
  </TouchableOpacity>
  
  {/* Add the Gmail button */}
  <TouchableOpacity
    style={[styles.socialButton, styles.gmailButton]}
    onPress={() => {
      // Handle Gmail button press
      Linking.openURL('mailto:objectivecalvary@gmail.com');
    }}
  >
    <Icon name="envelope" size={30} color="#fff" />
  </TouchableOpacity>

  </View>
    </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'rgba(122, 122, 122, 0.3)',
  },
  socialButton: {
    position: 'absolute',
    bottom: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    height: 60,
    borderRadius: 30,
    marginHorizontal: 10,
    zIndex: 1,
  },
  instagramButton: {
    backgroundColor: '#C13584',
    left: 10,
  },
  youtubeButton: {
    backgroundColor: '#FF0000',
    left: 80,
  },
  gmailButton: {
    backgroundColor: '#DB4437',
    left: 153,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: "#fff"
  },
  plan: {
    
    borderRadius: 2,
    padding: 20,
    marginBottom: 20,
    // Add background image
    backgroundImage: `url(${BibleSchoolImage})`, // for the Bible School plan
    
    // Adjust background styles
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    borderWidth: 10,
    borderColor: "rgb(225, 225, 225)",
    shadowColor: "#000",
    shadowOffset: {
	  width: 0,
	  height: 5,},
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11,
    
  },
  plan2: {
    backgroundColor: '#fff',
    borderRadius: 2,
    padding: 20,
    marginBottom: 20,
    // Add background image
    backgroundImage: `url(${BibleSoftwareImage})`, // for the Bible School plan
    // Adjust background styles
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    borderWidth: 10,
    borderColor: "rgb(225, 225, 225)",
    shadowColor: "#000",
    shadowOffset: {
	  width: 0,
	  height: 5,},
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11,
  
    
    
  },
  plan3: {
    backgroundColor: '#fff',
    borderRadius: 2,
    padding: 20,
    marginBottom: 20,
    // Add background image

    // Adjust background styles
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    borderWidth: 10,
    borderColor: "rgb(225, 225, 225)",
    shadowColor: "#000",
    shadowOffset: {
	  width: 0,
	  height: 5,},
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11,
    backgroundImage: `url(${PricingPlansImage})`,
  },
  
  planTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 0,
    
  },
  planPrice: {
    fontSize: 18,
    color: 'rgba(0, 0, 0, 0.5)',
    marginBottom: 10,
    
  },
  planDescription: {
    fontSize: 16,
    marginBottom: 20,
  },
  planFeatures: {
    fontSize: 16,
  },
  feature: {
    marginLeft: 10,
  },
  button: {
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    width: '80%',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  modalButton: {
    marginLeft: 10,
    padding: 10,
    backgroundColor: '#03a155',
    borderRadius: 5,
  },
  modalButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default Home;

