import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ImageBackground, StyleSheet, Text, View, TouchableOpacity, Linking, Image, Modal, ScrollView } from 'react-native';

const Download = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setModalVisible(true);
  };

  return (
    <ImageBackground source={require('./assets/tab2.jpg')} resizeMode="cover" style={styles.image}>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.bt2}
          onPress={() => {
            Linking.openURL('https://www.youtube.com/watch?v=Me7y2Uq76KI&ab_channel=ObjectiveCalvary');
          }}
        >
          <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 17 }}>Watch Trailer</Text>
          <View style={styles.view2}></View>
        </TouchableOpacity>

        <View style={{ flex: 1, marginTop: 100, marginHorizontal: 50 }}>
          <View
            style={{
              marginBottom: 150,
              backgroundColor: 'rgba(31, 31, 31, 0.2)',
              padding: 30,
              borderWidth: 0.5,
              borderColor: '#fff',
              borderRadius: 8,
            }}
          >
            <View style={styles.view}>
              <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 50, margin: 20 }}>3D Bible Software</Text>
            </View>

            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
            <TouchableOpacity
                style={[styles.bt, { marginBottom: 10 }]} // Add marginBottom for spacing
                onPress={() => {
                    Linking.openURL('https://rebrand.ly/xi9ebme');
                }}
                >
                <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 17 }}>Download OC 1.3.0</Text>
                <View style={styles.view2}>
                    <Icon name="chevron-down" color={'#fff'} size={20} />
                </View>
                </TouchableOpacity>

                <Text style={{ color: '#fff', fontSize: 15, marginLeft: 5, marginTop: 10}}>Windows | Installer | 217MB</Text>

            </View>

            <View style={{ marginTop: 6 }}>
              <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 17 }}>Installation:</Text>

              <Text style={{ color: '#fff', fontSize: 17, margin: 2 }}>
                1. To download the OC software, simply tap the green button located above which will direct you to the
                Google Drive link.
              </Text>
              <Text style={{ color: '#fff', fontSize: 17, margin: 2 }}>
                2. After downloading the software, please run the setup file to install it.
              </Text>
              <View style={{ backgroundColor: 'rgba(225, 225, 225, 0.5)', borderRadius: 1, padding: 3 }}>
                <Text style={{ color: '#fff', fontSize: 17, margin: 2 }}>
                  3. If you encounter a{' '}
                  <Text style={{ color: '#03a155', fontWeight: 'bold' }}>Windows pop-up message</Text> that says{' '}
                  <Text style={{ color: '#03a155', fontWeight: 'bold' }}>"unrecognized app"</Text>, simply click on{' '}
                  <Text style={{ color: '#03a155', fontWeight: 'bold' }}>"More info"</Text> and then select {'\n'}
                  <Text style={{ color: '#03a155', fontWeight: 'bold' }}>"Run anyway"</Text>. This pop-up may appear
                  because the software is still in early access.
                </Text>
              </View>
              <Text style={{ color: '#fff', fontSize: 17, margin: 2 }}>4. Launch the desktop application and enjoy studying God's word.</Text>
            </View>
          </View>

          <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 30, margin: 20, marginLeft: 0 }}>Images</Text>
          <View style={styles.imageGrid}>
            <TouchableOpacity onPress={() => handleImageClick(require('./assets/sc/4.jpg'))}>
              <Image source={require('./assets/sc/4.jpg')} style={styles.gridImage} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleImageClick(require('./assets/sc/2.jpg'))}>
              <Image source={require('./assets/sc/2.jpg')} style={styles.gridImage} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleImageClick(require('./assets/sc/3.jpg'))}>
              <Image source={require('./assets/sc/3.jpg')} style={styles.gridImage} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleImageClick(require('./assets/sc/1.jpg'))}>
              <Image source={require('./assets/sc/1.jpg')} style={styles.gridImage} />
            </TouchableOpacity>
          </View>

          <View style={styles.imageGrid}>
            <TouchableOpacity onPress={() => handleImageClick(require('./assets/sc/6.jpg'))}>
              <Image source={require('./assets/sc/6.jpg')} style={styles.gridImage} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleImageClick(require('./assets/sc/7.jpg'))}>
              <Image source={require('./assets/sc/7.jpg')} style={styles.gridImage} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleImageClick(require('./assets/sc/8.jpg'))}>
              <Image source={require('./assets/sc/8.jpg')} style={styles.gridImage} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleImageClick(require('./assets/sc/9.jpg'))}>
              <Image source={require('./assets/sc/9.jpg')} style={styles.gridImage} />
            </TouchableOpacity>
          </View>
        </View>

        

        <Modal visible={modalVisible} transparent={true} onRequestClose={() => setModalVisible(false)}>
          <View style={styles.modalContainer}>
            <TouchableOpacity style={styles.modalCloseButton} onPress={() => setModalVisible(false)}>
              <Icon name="times" color={'#fff'} size={30} />
            </TouchableOpacity>
            <Image source={selectedImage} style={styles.modalImage} resizeMode="contain" />
          </View>
        </Modal>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  image: {
    flex: 1,
  },
  bt: {
    borderRadius: 5,
    paddingHorizontal: 80,
    paddingVertical: 10,
    backgroundColor: '#03a155',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    flexDirection: 'row',
  },
  bt2: {
    borderRadius: 5,
    paddingLeft: 30,
    paddingVertical: 10,
    backgroundColor: '#f23838',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    flexDirection: 'row',
  },
  view2: {
    position: 'absolute',
    right: 25,
    flex: 'flex-end',
  },
  imageGrid: {
    flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginTop: 20,
  },
  gridImage: {
    width: 400,
    height: 250,
    resizeMode: 'cover',
    borderWidth: 2,
    borderRadius: 5,
    borderColor: "#fff",
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    marginBottom: 10,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalCloseButton: {
    position: 'absolute',
    top: 20,
    right: 20,
    zIndex: 1,
  },
  modalImage: {
    width: '90%',
    height: '90%',
    resizeMode: 'contain',
  },
});

export default Download;
