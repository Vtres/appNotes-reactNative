import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import  Constants from 'expo-constants';

export default function App() {
  return (
    <ScrollView style={{ backgroundColor: '#d8dfe6', marginTop: Constants.statusBarHeight }}> 
      <View style={styles.container}>
        <StatusBar backgroundColor="#d8dfe6" translucent />
        <Text>Open up App.js to start working on your app!</Text>
       
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
  },
});
