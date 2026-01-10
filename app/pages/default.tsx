import React from 'react';
import { View, Text } from 'react-native';
import { themes } from '../styles/themes';
import { StyleSheet } from 'react-native';

export const Default = () => {

    return(
        <View style={style_sheet.default_container}>
            <Text style={style_sheet.default_text}>This is your default page.</Text>
        </View>
    );
}

const style_sheet = StyleSheet.create({
    default_container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    default_text:{
        fontSize: 18,
        color: themes["default"].primary,
    },
});