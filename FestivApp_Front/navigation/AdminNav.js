import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import LoginForm from '../screens/LoginForm';
import DashboardNav from './DashboardNav';

const Stack = createNativeStackNavigator();

const AdminNav = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="LoginForm" component={LoginForm} />
      <Stack.Screen
        name="DashboardNav"
        component={DashboardNav}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default AdminNav;
