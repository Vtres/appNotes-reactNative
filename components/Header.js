import React from "react";
import { StyleSheet, View, Text } from 'react-native';


export default function Header(props) {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                {props.titulo}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        position:'absolute',
        top: 0,
        width:'100%',
        paddingTop: 30,
        backgroundColor: "#931a9a"
    },
    title:{
        fontSize: 18,
        textAlign: "center",
        padding: 20,
        fontWeight: "bold",
        color: '#d8dfe6',
        textTransform: "uppercase"
    }
});