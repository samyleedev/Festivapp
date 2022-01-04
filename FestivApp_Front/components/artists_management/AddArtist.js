import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Alert,
  TouchableOpacity,
} from 'react-native';
import {useForm, Controller} from 'react-hook-form';

const AddArtist = ({reload, setReload}) => {
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
    mode: 'onTouched',
    // resolver: yupResolver(userSchema),
  });
  const [addIsSuccessful, setAddIsSuccessful] = useState(false);
  const [artistData, setArtistData] = useState(null);

  const addArtist = artistData => {
    fetch('http://10.0.2.2:5500/artists', {
      method: 'POST',
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
          'Ajout effectué avec succès',
          `L'artiste ${artistData.name} a bien été ajouté en base de données.`,
          [{text: 'Ok'}],
        );
      })
      .catch(err => console.log(err));
  };

  const onSubmit = data => addArtist(data);

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
            placeholder="Ajoutez le nom de l'artiste"
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
            placeholder="Ajoutez une description pour cet artiste"
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
            placeholder="Ajoutez une image pour cet artiste (URL)"
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

      <TouchableOpacity style={styles.button} onPress={handleSubmit(onSubmit)}>
        <Text style={styles.buttonTxt}>
          Ajouter cet artiste à la programmation
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  containerAdd: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 10,
  },
  buttonTxt: {
    color: '#FFF',
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

export default AddArtist;
