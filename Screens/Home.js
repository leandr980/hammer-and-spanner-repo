
import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

export function HomeScreen({ navigation}) {

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>

            <Button
                title="Go to Details"
                onPress={() => navigation.navigate("Details")}
            />

            <Button
                title="Go to Signature Screen"
                onPress={() => navigation.navigate("Signature")}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});