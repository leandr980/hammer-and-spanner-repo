import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, Image, Settings } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './Screens/Home';
import AgentScreen from './Screens/Agent';
//import SettingsScreen from './Screens/Details';


// Initialize Firebase


const Stack = createNativeStackNavigator();


export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Agent' component={AgentScreen} />
                
            </Stack.Navigator>
        </NavigationContainer>
    );
}


