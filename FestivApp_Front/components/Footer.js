import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
const Footer = () => {
  return (
    <View style={styles.container}>
      <Icon style={styles.menu} name="calendar" size={30} color="#FFF" />
      <Icon style={styles.menu} name="music" size={30} color="#FFF" />
      <Icon style={styles.menu} name="map" size={30} color="#FFF" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 70,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#381B75',
  },
});

export default Footer;
