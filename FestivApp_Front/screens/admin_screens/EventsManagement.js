import React, {useState} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import ArtistsListRemove from '../../components/artists_management/ArtistsListRemove';
import AddArtist from '../../components/artists_management/AddArtist';
import UpdateArtist from '../../components/artists_management/UpdateArtist';
import {ScreenStackHeaderRightView} from 'react-native-screens';

const EventsManagement = () => {
  const [reload, setReload] = useState(false);
  const [updateArtist, setUpdateArtist] = useState(false);
  const [artistID, setArtistID] = useState(null);

  return <View style={styles.containerAdd}></View>;
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

export default EventsManagement;
