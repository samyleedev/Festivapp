import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Home from './screens/Home';
import Map from './screens/Map';
import Events from './screens/Events';
import AdminNav from './navigation/AdminNav';

import ArtistsList from './components/ArtistsList';

const {Navigator, Screen} = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          tabBarHideOnKeyboard: true,
          tabBarShowLabel: false,
          tabBarStyle: {
            position: 'absolute',
            bottom: 25,
            left: 10,
            right: 20,
            backgroundColor: '#381B75',
            borderRadius: 15,
            height: 90,
          },
        }}>
        <Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
            tabBarLabel: 'Home',
            tabBarIcon: ({focused}) => (
              <Ionicons
                name="home-outline"
                size={focused ? 50 : 35}
                color={focused ? '#EE0B5A' : '#FFF'}
              />
            ),
            headerRight: () => (
              <Ionicons name="home-outline" size={35} color="#EE0B5A" />
            ),
          }}
        />
        <Screen
          name="Events"
          component={Events}
          options={{
            headerShown: false,
            tabBarLabel: 'Events',
            tabBarIcon: ({focused}) => (
              <Ionicons
                name="calendar-outline"
                size={focused ? 50 : 35}
                color={focused ? '#EE0B5A' : '#FFF'}
              />
            ),
          }}
        />
        <Screen
          name="Artists"
          component={ArtistsList}
          options={{
            headerShown: false,
            tabBarLabel: 'Artists',
            tabBarIcon: ({focused}) => (
              <Ionicons
                name="musical-notes-outline"
                size={focused ? 50 : 35}
                color={focused ? '#EE0B5A' : '#FFF'}
              />
            ),
          }}
        />
        <Screen
          name="Map"
          component={Map}
          options={{
            headerShown: false,
            tabBarLabel: 'Map',
            tabBarIcon: ({focused}) => (
              <Ionicons
                name="map-outline"
                size={focused ? 50 : 35}
                color={focused ? '#EE0B5A' : '#FFF'}
              />
            ),
          }}
        />
        <Screen
          name="AdminNav"
          component={AdminNav}
          options={{
            headerShown: false,
            tabBarLabel: 'Login',
            tabBarIcon: ({focused}) => (
              <Ionicons
                name="person-outline"
                size={focused ? 50 : 35}
                color={focused ? '#EE0B5A' : '#FFF'}
              />
            ),
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
};

export default App;
