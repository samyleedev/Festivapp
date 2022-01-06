import React from 'react';
import {View, Text, StyleSheet, FlatList, Image} from 'react-native';

const Events = () => {
  const data = [
    {
      _id: 1,
      date: 'Vendredi 10 Juin',
      artists: [
        {name: 'Nekfeu', time: '20h30', stage: 'Scène The Last Arena'},
        {name: 'Keny Arkana', time: '17h00', stage: 'Scène Boombox'},
      ],
    },
    {
      _id: 2,
      date: 'Samedi 11 Juin',
      artists: [
        {name: 'Damso', time: '18h00', stage: 'Scène The Last Arena'},
        {name: 'Romeo Elvis', time: '16h30', stage: 'Scène Boombox'},
      ],
    },
    {
      _id: 3,
      date: 'Dimanche 12 Juin',
      artists: [
        {name: 'Orelsan', time: '22h00', stage: 'Scène The Last Arena'},
        {name: 'Lomepal', time: '19h00', stage: 'Scène Boombox'},
      ],
    },
  ];
  return (
    <View style={styles.container}>
      <Text style={styles.title}>La programmation de l'édition 2022 !</Text>
      <FlatList
        data={data}
        keyExtractor={item => item._id}
        renderItem={({item}) => (
          <View style={styles.artistContainer}>
            <View style={styles.artistText}>
              <Text style={styles.date}>{item.date}</Text>
              <Text style={styles.artists}>
                {item.artists[0].name} -&gt; {item.artists[0].time} -&gt;
                {item.artists[0].stage}{' '}
              </Text>
              <Text style={styles.artists}>
                {item.artists[1].name} -&gt; {item.artists[1].time} -&gt;
                {item.artists[1].stage}
              </Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#222',
  },
  title: {
    color: '#FFF',
    fontSize: 30,
    textAlign: 'center',
    padding: 10,
  },
  artists: {fontSize: 18},
  artistContainer: {
    flexDirection: 'row',
    padding: 10,
    margin: 10,
    borderRadius: 20,
    backgroundColor: '#EE0B5A',
    borderColor: '#fff',
    borderWidth: 1,
  },
  artistText: {
    marginLeft: 10,
    padding: 5,
  },
  date: {
    fontWeight: 'bold',
    fontSize: 30,
    textTransform: 'capitalize',
    textAlign: 'center',
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 30,
    borderColor: '#fff',
    borderWidth: 1,
  },
});
export default Events;
