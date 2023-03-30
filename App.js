import {useState} from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import BtnChange from './src/components/BtnChange';

export default function App() {

  const [color, setColor] = useState();


  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style= {{color:color}} >Prueba Básica</Text>
      
      <View style={styles.containerButton}>
        <BtnChange typeColor="red" setColor={setColor} ></BtnChange>
        <BtnChange typeColor="blue" setColor={setColor} ></BtnChange>
      </View>
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
  containerButton:{
    flexDirection:'row',
  }
});
