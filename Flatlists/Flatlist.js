import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Image, Dimensions} from 'react-native';

const dimensions = Dimensions.get('window');
const imageHeight = Math.round(dimensions.width * 9/16);
const imageWidth = dimensions.width;



const Item = ({ title, image }) => (
  <View style={styles.item}>
    <Text style={styles.title}> </Text>

   
    <Image source={image} resizeMode={"contain"} style={{width: "100%", height: 500,}}/>
   
  </View>
);

const FlatListComponent = ({DataA}) => {
  const renderItem = ({ item}) => (
    <Item title={item.title} image={item.image}/>
  );

  return (
    <View style={{flex: 1, width: "100%" }}>
      <FlatList
        data={DataA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      
   </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  item: {
    

  },
  title: {
    fontSize: 32,
  },
  cardImg: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    borderRadius: 0,
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0,
    borderRadius: 10,
  },
  cardImgWrapper: {
    flex: 1,
    borderRightWidth: 2,
    width: 300, 
    height: 300,
    borderColor: "#E1C699",
    
  },
});

export default FlatListComponent;