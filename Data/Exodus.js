import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Image, Dimensions} from 'react-native';

const dimensions = Dimensions.get('window');
const imageHeight = Math.round(dimensions.width * 9/16);
const imageWidth = dimensions.width;

const ExodusDATA26 = [
  {
    id: '1',
    title: 'First Item',
    image: require("../assets/Exodus/26/1.jpg")
  },
  {
    id: '2',
    title: 'Second Item',
    title: 'First Item',
    image: require("../assets/Exodus/26/2.jpg")
  },
  {
    id: '3',
    title: 'Third Item',
    title: 'First Item',
    image: require("../assets/Exodus/26/3.jpg")
  },
  {
    id: '4',
    title: 'Third Item',
    title: 'First Item',
    image: require("../assets/Exodus/26/4.jpg")
  },
  {
    id: '5',
    title: 'First Item',
    image: require("../assets/Exodus/26/5.jpg")
  },
  {
    id: '6',
    title: 'Second Item',
    title: 'First Item',
    image: require("../assets/Exodus/26/6.jpg")
  },
  {
    id: '7',
    title: 'Third Item',
    title: 'First Item',
    image: require("../assets/Exodus/26/7.jpg")
  },
  {
    id: '8',
    title: 'Third Item',
    title: 'First Item',
    image: require("../assets/Exodus/26/8.jpg")
  },
  {
    id: '9',
    title: 'First Item',
    image: require("../assets/Exodus/26/9.jpg")
  },
  {
    id: '10',
    title: 'Second Item',
    title: 'First Item',
    image: require("../assets/Exodus/26/10.jpg")
  },
  {
    id: '11',
    title: 'Third Item',
    title: 'First Item',
    image: require("../assets/Exodus/26/11.jpg")
  },
  {
    id: '12',
    title: 'Third Item',
    title: 'First Item',
    image: require("../assets/Exodus/26/12.jpg")
  },
  {
    id: '13',
    title: 'First Item',
    image: require("../assets/Exodus/26/13.jpg")
  },
  {
    id: '14',
    title: 'Second Item',
    title: 'First Item',
    image: require("../assets/Exodus/26/14.jpg")
  },
  {
    id: '15',
    title: 'Third Item',
    title: 'First Item',
    image: require("../assets/Exodus/26/15.jpg")
  },
  {
    id: '16',
    title: 'Third Item',
    title: 'First Item',
    image: require("../assets/Exodus/26/16.jpg")
  },
  {
    id: '17',
    title: 'First Item',
    image: require("../assets/Exodus/26/17.jpg")
  },
  {
    id: '18',
    title: 'Second Item',
    title: 'First Item',
    image: require("../assets/Exodus/26/18.jpg")
  },
  {
    id: '19',
    title: 'Third Item',
    title: 'First Item',
    image: require("../assets/Exodus/26/19.jpg")
  },
  {
    id: '20',
    title: 'Third Item',
    title: 'First Item',
    image: require("../assets/Exodus/26/20.jpg")
  },
  {
    id: '21',
    title: 'First Item',
    image: require("../assets/Exodus/26/21.jpg")
  },
  {
    id: '22',
    title: 'Second Item',
    title: 'First Item',
    image: require("../assets/Exodus/26/22.jpg")
  },
  {
    id: '23',
    title: 'Third Item',
    title: 'First Item',
    image: require("../assets/Exodus/26/23.jpg")
  },
  {
    id: '24',
    title: 'Third Item',
    title: 'First Item',
    image: require("../assets/Exodus/26/24.jpg")
  },
  {
    id: '25',
    title: 'Second Item',
    title: 'First Item',
    image: require("../assets/Exodus/26/25.jpg")
  },
  {
    id: '26',
    title: 'Third Item',
    title: 'First Item',
    image: require("../assets/Exodus/26/26.jpg")
  },

];

export default ExodusDATA26;