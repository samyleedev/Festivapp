import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Festiv'App !</Text>
      <Icon style={styles.login} name="user" size={30} color="#FFF" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 70,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#381B75',
  },
  text: {
    marginLeft: 30,
    color: '#EE0B5A',
    fontSize: 30,
    fontWeight: 'bold',
  },
  login: {
    marginRight: 30,
  },
});

export default Header;
