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
import { AdditemScreen } from './Screens/Additem';

import firebase from 'firebase/app'
// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAFCkJDDI85c151it10gR_f7Xa-4WFi-YE",
    authDomain: "realestate-key-tracker.firebaseapp.com",
    databaseURL: "https://realestate-key-tracker-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "realestate-key-tracker",
    storageBucket: "realestate-key-tracker.appspot.com",
    messagingSenderId: "314590691130",
    appId: "1:314590691130:web:912b6d4290ae29d5c51a03"
};

// Initialize Firebase

firebase.initializeApp(firebaseConfig);

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Details" component={DetailsScreen} />
                <Stack.Screen name="Signature" component={SignatureScreen} />
                <Stack.Screen name="Additem" component={AdditemScreen} />

            </Stack.Navigator>
        </NavigationContainer>
  );
}


