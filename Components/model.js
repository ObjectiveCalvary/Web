import React from 'react';
import {
  View,
  StyleSheet,
  Button,
  Modal,
  Image,
  Text,
  TouchableOpacity,
  Animated,
} from 'react-native';
import { ScrollView } from 'react-native-web';
import FlatListComponent from '../Flatlists/Flatlist';
import Ionicons from '@expo/vector-icons/Ionicons';

const ModalPoup = ({visible, children}) => {
  const [showModal, setShowModal] = React.useState(visible);
  const scaleValue = React.useRef(new Animated.Value(0)).current;
  React.useEffect(() => {
    toggleModal();
  }, [visible]);
  const toggleModal = () => {
    if (visible) {
      setShowModal(true);
      Animated.spring(scaleValue, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      setTimeout(() => setShowModal(false), 200);
      Animated.timing(scaleValue, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  };
  return (
    <Modal transparent visible={showModal}>
      <View style={styles.modalBackGround}>
        <Animated.View
          style={[styles.modalContainer, {transform: [{scale: scaleValue}]}]}>
          {children}
        </Animated.View>
      </View>
    </Modal>
  );
};

const Info = ({Text, DataB, Title}) => {
  const [visible, setVisible] = React.useState(false);
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', }}>
      <ModalPoup visible={visible}>
        <View style={{alignItems: 'center', }}>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => setVisible(false)}>
              <Image
                source={require('../assets/x.png')}
                style={{height: 30, width: 30}}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={{alignContent: "center", justifyContent: "center", alignItems: 'center',}}>
          <Text style={{fontSize: 32, fontWeight: "bold"}}>{Title}</Text>
          </View>

          <FlatListComponent DataA={DataB}/>

      
      </ModalPoup>
      
      <TouchableOpacity  onPress={() => setVisible(true)}>
      <View style={{flexDirection: "row",}}>
      <Ionicons name="caret-down-circle" size={20} color="#fff" />
      <Text style={{color: "#fff", fontSize: 18, fontWeight: "bold", paddingLeft:5}}>Images</Text>
      </View>
      </TouchableOpacity>
      
    </View>
  );
};

const styles = StyleSheet.create({
  modalBackGround: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
  },
  modalContainer: {
    width: '55%',
    height: "80%",
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderRadius: 10,
    elevation: 20,
  },
  header: {
    width: '100%',
    height: 10,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
});

export default Info;