import React from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';

const Map = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Plan du festival</Text>
      <ImageBackground
        style={styles.img}
        source={require('../assets/images/map-img.png')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#222',
  },
  img: {
    width: '95%',
    height: '95%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#FFF',
    fontSize: 30,
    textAlign: 'center',
    padding: 10,
  },
});
export default Map;
