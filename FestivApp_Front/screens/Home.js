import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  Alert,
  ImageBackground,
} from 'react-native';
import Footer from '../components/Footer';
import Header from '../components/Header';
const Home = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.img}
        source={require('../assets/images/samuel-regan-asante-3BcNKoySAq0-unsplash.jpg')}>
        <Text style={styles.text}>
          Du 10/06/2022 au 12/06/2022 ...{'\n'} C'est la fête !
        </Text>
        <Button
          style={styles.btn}
          title="Je me prends ma place !"
          color="#EE0B5A"
          onPress={() => Alert.alert("Vous n'allez pas le regretter !")}
        />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  img: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    color: '#111',
    fontSize: 40,
    fontWeight: 'bold',
  },
  btn: {
    borderRadius: 50,
  },
});

export default Home;
