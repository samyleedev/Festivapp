import React, {useState} from 'react';
import {View, Text, StyleSheet, Button, TextInput} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import * as Yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';

const LoginForm = ({navigation}) => {
  // const passwordRegex =
  //   /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

  const userSchema = Yup.object().shape({
    email: Yup.string()
      .email("L'adresse électronique est invalide.")
      .required("La saisie d'une adresse électronique est obligatoire."),
    password: Yup.string()
      // .matches(
      //   passwordRegex,
      //   'Le mot de passe doit faire au minimum 8 caractères, doit comporter une majuscule, une minuscule, et un caractère spécial.',
      // )
      .required("La saisie d'un mot de passe est obligatoire."),
  });
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onTouched',
    resolver: yupResolver(userSchema),
  });

  const [isUnauthorized, setIsUnauthorized] = useState(false);

  const loginUser = credentials => {
    fetch('http://10.0.2.2:5500/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    }).then(data => {
      if (data.status === 200) {
        navigation.navigate('DashboardNav');
      } else {
        setIsUnauthorized(true);
      }
    });
  };

  const [passwordIsHidden, setPasswordIsHidden] = useState(true);

  const showPassword = () => {
    setPasswordIsHidden(!passwordIsHidden);
  };

  const onSubmit = credentials => loginUser(credentials);

  return (
    <View style={styles.container}>
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
            placeholder="Email"
          />
        )}
        name="email"
      />
      <Text style={styles.errors}>{errors.email?.message}</Text>

      <Controller
        control={control}
        rules={{
          maxLength: 100,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            secureTextEntry={true}
            placeholder="Mot de passe"
          />
        )}
        name="password"
      />
      <Text style={styles.errors}>{errors.password?.message}</Text>

      <Button title="Se connecter" onPress={handleSubmit(onSubmit)} />
      {isUnauthorized ? (
        <Text style={styles.errors}>Email ou mot de passe incorrect</Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  errors: {
    justifyContent: 'center',
    alignItems: 'center',
    color: 'red',
    margin: 15,
  },
  input: {
    height: 40,
    width: 300,
    borderWidth: 1,
    borderRadius: 10,
  },
});
export default LoginForm;
