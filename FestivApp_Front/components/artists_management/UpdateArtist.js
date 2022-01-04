import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Alert,
  TouchableOpacity,
} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import Ionicons from 'react-native-vector-icons/Ionicons';

const UpdateArtist = ({reload, setReload, artistID, setUpdateArtist}) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://10.0.2.2:5500/artists/' + artistID)
      .then(response => response.json())
      .then(artist => {
        setData(artist);
      })
      .catch(err => {
        alert(err);
      });
  }, [artistID]);
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      name: '',
      description: '',
      image_path: '',
    },
    // resolver: yupResolver(userSchema),
  });
  const [addIsSuccessful, setAddIsSuccessful] = useState(false);
  const [artistData, setArtistData] = useState(null);

  const updateArtist = artistData => {
    fetch('http://10.0.2.2:5500/artists/' + artistID, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(artistData),
    })
      .then(res => res.json())
      .then(json => {
        setArtistData(json);
        setReload(!reload);
        Alert.alert(
          'Modification effectuée avec succès',
          `L'artiste ${artistData.name} a bien été modifié.`,
          [{text: 'Ok'}],
        );
      })
      .catch(err => console.log(err));
  };

  const onSubmit = data => updateArtist(data);

  return (
    <View style={styles.containerAdd}>
      <Text>Formulaire </Text>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder={data.name}
          />
        )}
        name="name"
      />
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder={data.description}
          />
        )}
        name="description"
      />
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder={data.image_path}
          />
        )}
        name="image_path"
      />
      {/* <Text style={styles.errors}>{errors.email?.message}</Text> */}
      {addIsSuccessful ? (
        <Text style={styles.successMesage}>
          L'artiste {artistData.name} a bien été ajouté à la base de donnée !
        </Text>
      ) : null}

      <View style={styles.containerBtn}>
        <TouchableOpacity
          style={styles.buttonBack}
          onPress={() => setUpdateArtist(false)}>
          <Ionicons name="arrow-back-outline" size={20} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={handleSubmit(onSubmit)}>
          <Text style={styles.buttonTxt}>Modifier cet artiste</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerAdd: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerBtn: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'yellow',
    padding: 10,
    borderRadius: 10,
  },
  buttonBack: {
    backgroundColor: 'green',
    margin: 10,
    padding: 10,
    borderRadius: 10,
  },
  buttonTxt: {
    color: '#111',
    fontWeight: 'bold',
  },
  errors: {
    justifyContent: 'center',
    alignItems: 'center',
    color: 'red',
    margin: 15,
  },
  successMesage: {
    justifyContent: 'center',
    alignItems: 'center',
    color: 'green',
    margin: 15,
  },
  input: {
    height: 40,
    width: 300,
    margin: 5,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#999',
  },
});

export default UpdateArtist;
