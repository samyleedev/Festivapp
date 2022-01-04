import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import ElementRemoving from '../ElementRemoving';

const ArtistsListRemove = ({
  reload,
  setReload,
  updateArtist,
  setUpdateArtist,
  artistID,
  setArtistID,
}) => {
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
  }, [reload]);

  return (
    <View style={styles.container}>
      <Text>Liste des artistes</Text>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          keyExtractor={item => item._id}
          renderItem={({item}) => (
            <ElementRemoving
              name={item.name}
              id={item._id}
              updateArtist={updateArtist}
              setUpdateArtist={setUpdateArtist}
              setReload={setReload}
              reload={reload}
              artistID={artistID}
              setArtistID={setArtistID}
            />
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
});

export default ArtistsListRemove;
