import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  Image,
} from 'react-native';

const ArtistsList = () => {
  const artistsURL = 'http://10.0.2.2:5500/artists'; //10.60.53.138
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(artistsURL)
      .then(response => response.json())
      .then(artists => {
        setData(artists);
      })
      .catch(err => {
        alert(err);
      })
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Les artistes de l'édition 2022</Text>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          keyExtractor={item => item._id}
          renderItem={({item}) => (
            <View style={styles.artistContainer}>
              <Image style={styles.img} source={{uri: item.image_path}} />
              <View style={styles.artistText}>
                <Text style={styles.name}>{item.name}</Text>
                <Text>{item.description}</Text>
              </View>
            </View>
          )}
        />
      )}
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
  name: {
    fontWeight: 'bold',
    fontSize: 30,
    textTransform: 'capitalize',
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 30,
    borderColor: '#fff',
    borderWidth: 1,
  },
});

export default ArtistsList;
