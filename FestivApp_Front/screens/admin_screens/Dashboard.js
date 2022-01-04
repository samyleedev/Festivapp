import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';

const Dashboard = ({navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('ArtistsManagement')}>
        <Text style={styles.text}>Gestion des artistes</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('EventsManagement')}>
        <Text style={styles.text}>Gestion des concerts</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '70%',
    padding: 20,
    borderRadius: 10,
    margin: 20,
    backgroundColor: '#EE0B5A',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#111',
  },
  text: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: 30,
  },
});

export default Dashboard;
