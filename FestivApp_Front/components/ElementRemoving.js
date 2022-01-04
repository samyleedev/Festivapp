import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Alert} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ElementRemoving = ({
  id,
  name,
  setReload,
  reload,
  setUpdateArtist,
  updateArtist,
  artistID,
  setArtistID,
}) => {
  const [artistData, setArtistData] = useState(null);

  const remove = elementID => {
    fetch('http://10.0.2.2:5500/artists/' + id, {
      method: 'DELETE',
    })
      .then(res => res.json())
      .then(json => {
        setArtistData(json);
        setReload(!reload);
        Alert.alert(
          'Suppression effectuée avec succès',
          `L'artiste ${artistData.name} a bien été supprimé de la base de données.`,
          [{text: 'Ok'}],
        );
      })
      .catch(err => console.log(err));
  };
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <View style={styles.actions}>
        <TouchableOpacity
          style={styles.buttonUpdate}
          onPress={() => {
            setArtistID(id);
            setUpdateArtist(true);
          }}>
          <Ionicons name="refresh-outline" size={20} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonDelete}
          onPress={() => remove(id)}>
          <Ionicons name="trash-outline" size={20} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#999',
  },
  name: {
    fontSize: 20,
    padding: 10,
    textTransform: 'capitalize',
  },
  actions: {
    flexDirection: 'row',
  },
  buttonDelete: {
    borderColor: 'black',
    borderWidth: 1,
    paddingVertical: 5,
    paddingHorizontal: 20,
    margin: 5,
    backgroundColor: 'red',
    borderRadius: 10,
  },
  buttonUpdate: {
    borderColor: 'black',
    borderWidth: 1,
    paddingVertical: 5,
    paddingHorizontal: 20,
    margin: 5,
    backgroundColor: 'yellow',
    borderRadius: 10,
  },
});

export default ElementRemoving;
