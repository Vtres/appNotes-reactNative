import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Text,
  Dimensions,
  TextInput,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Header from './components/Header';
import Constants from 'expo-constants';
import { StatusBar } from 'expo-status-bar';

const App = () => {

  const [estado, setEstado] = useState('leitura')
  const [anotacao, setAnotacao] = useState('')

  setData = async()=>{
    try {
      await AsyncStorage.setItem('@storage_Key', anotacao)
    } catch (error) {
      
    }
  }

  const atualizarTexto = () => {
    setEstado('leitura')
    setData()
  }

  useEffect(()=>{
    (async ()=>{
      try {
        const anotacaoStorage = await AsyncStorage.getItem('@storage_Key')
        setAnotacao(anotacaoStorage)
      } catch (error) {
        
      }
    })()
  },[])
  if (estado == 'leitura') {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar style='light' />
        <View style={styles.container}>
          <Header style={styles.header} titulo='anotações'></Header>
          {
            (anotacao != '') ?
              <Text style={styles.titleStyle}>
                {anotacao}
              </Text>
              :
              <Text style={styles.titleStyleNoNotes}>
                Sem Notas
              </Text>
          }


          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => setEstado('atualizando')}
            style={styles.touchableOpacityStyle}>
            <Image
              source={{
                uri:
                  'https://developerplus.com.br/wp-content/uploads/2021/12/plus_icon.png',
              }}
              style={styles.floatingButtonStyle}
            />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  } else if (estado == 'atualizando') {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar style='light' />
        <View style={styles.container}>
          <Header style={styles.header} titulo='anotações'></Header>
          <TextInput autoFocus={true} onChangeText={(text) => setAnotacao(text)} multiline={true} style={styles.textStyle} numberOfLines={5} value={anotacao}></TextInput>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => atualizarTexto()}
            style={styles.touchableOpacitySalvar}>
            <Text style={styles.texts}>Salvar</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );

  }
};

export default App;

const styles = StyleSheet.create({
  container: {
    // height: Dimensions.get('window').height - Constants.statusBarHeight,
    flex: 1,
    backgroundColor: '#DEE9F1',
  },
  header: {
    position: 'relative'
  },
  titleStyle: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
    paddingTop: 100,
    height: '90%'
  },
  titleStyleNoNotes:{
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
    paddingTop: 100,
    height: '90%',
    opacity: 0.3
  },
  textStyle: {
    fontSize: 16,
    textAlign: 'center',
    padding: 10,
    textAlignVertical: 'center',
    height: 400,
    paddingTop: 100
  },
  touchableOpacityStyle: {
    position: 'absolute',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    right: 30,
    bottom: 30,
  },
  touchableOpacitySalvar: {
    position: 'absolute',
    width: 100,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    right: 30,
    bottom: 30,
    backgroundColor: '#bf323a',
    borderRadius: 25,
  },
  texts: {
    color: 'white'
  },
  floatingButtonStyle: {
    resizeMode: 'contain',
    width: 70,
    height: 70,
  },
});