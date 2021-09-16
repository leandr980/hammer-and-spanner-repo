import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { HomeScreen} from './Screens/Home';
import { Key } from './Screens/Key';
import { DetailsScreen } from './Screens/Details';
import { SignatureScreen } from './Screens/Agent';





const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Details" component={DetailsScreen} />
                <Stack.Screen name="Signature" component={SignatureScreen} />

            </Stack.Navigator>
        </NavigationContainer>
  );
}


