import React from 'react';
import {View, StyleSheet} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Dashboard from '../screens/admin_screens/Dashboard';
import ArtistsManagement from '../screens/admin_screens/ArtistsManagement';
import EventsManagement from '../screens/admin_screens/EventsManagement';
const Stack = createNativeStackNavigator();

const DashboardNav = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen
        name="ArtistsManagement"
        component={ArtistsManagement}
        options={{title: 'Gestion des artistes'}}
      />
      <Stack.Screen
        name="EventsManagement"
        component={EventsManagement}
        options={{title: 'Gestion de la programmation'}}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default DashboardNav;
