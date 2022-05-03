import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Image, Dimensions} from 'react-native';

const dimensions = Dimensions.get('window');
const imageHeight = Math.round(dimensions.width * 9/16);
const imageWidth = dimensions.width;

const PopularDATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
    image: require("../assets/Popular/Jesus planet loop/1.jpg")
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
    title: 'First Item',
    image: require("../assets/Popular/Jesus planet loop/2.jpg")
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
    title: 'First Item',
    image: require("../assets/Popular/Jesus planet loop/3.jpg")
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d73',
    title: 'Third Item',
    title: 'First Item',
    image: require("../assets/Popular/Jesus planet loop/4.jpg")
  },
];

export default PopularDATA;