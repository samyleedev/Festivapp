import React, {useState} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import ArtistsListRemove from '../../components/artists_management/ArtistsListRemove';
import AddArtist from '../../components/artists_management/AddArtist';
import UpdateArtist from '../../components/artists_management/UpdateArtist';
import {ScreenStackHeaderRightView} from 'react-native-screens';

const ArtistsManagement = () => {
  const [reload, setReload] = useState(false);
  const [updateArtist, setUpdateArtist] = useState(false);
  const [artistID, setArtistID] = useState(null);

  return (
    <View style={styles.containerAdd}>
      <Text>Gestion des artistes </Text>
      {updateArtist ? (
        <UpdateArtist
          artistID={artistID}
          reload={reload}
          setReload={setReload}
          setUpdateArtist={setUpdateArtist}
        />
      ) : (
        <AddArtist reload={reload} setReload={setReload} />
      )}

      <ArtistsListRemove
        reload={reload}
        setReload={setReload}
        setUpdateArtist={setUpdateArtist}
        updateArtist={updateArtist}
        artistID={artistID}
        setArtistID={setArtistID}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  containerAdd: {
    flex: 1,
    backgroundColor: '#111',
  },
  btn: {
    backgroundColor: 'green',
    width: 100,
  },
});

export default ArtistsManagement;
