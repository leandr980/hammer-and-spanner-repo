
import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

export function DetailsScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Details Screen</Text>
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

    preview: {
        width: 335,
        height: 114,
        backgroundColor: "#F8F8F8",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 15,
    },
    previewText: {
        color: "#FFF",
        fontSize: 14,
        height: 40,
        lineHeight: 40,
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: "#69B2FF",
        width: 120,
        textAlign: "center",
        marginTop: 10,
    },
});