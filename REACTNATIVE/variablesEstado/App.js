import { StatusBar } from 'expo-status-bar';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';

export default function App() {
  /*const arreglo=useState(0);
  const contadorEstado=arreglo[0];
  const setContadorEstado=arreglo[1];*/
  const [contadorEstado, setContadorEstado] = useState(0);
  const [vidas, setVidas] = useState(5);
  const decrementar = () => {
    setContadorEstado(contadorEstado - 1)
    console.log("contador estado>>>>>" + contadorEstado);
  }
  const incrementar = () => {
    setContadorEstado(contadorEstado + 1);
    console.log("contador estado>>>>" + contadorEstado)
  }
  const perderVida = () => {
    setVidas(vidas - 1);
    if (vidas == 0) {
      Alert.alert("ADVERTENCIA", "GAME OVER");
      setVidas(0);
    }
  }
  const premiar = () => {
    setVidas(vidas + 3);
  }
  return (
    <View style={styles.container}>
      <Text>Variables de estado</Text>
      <Text>Contador Estado: {contadorEstado}</Text>
      <Button
        title='INCREMENTAR'
        onPress={incrementar}
      />
      <Button
        title='DECREMENTAR'
        onPress={decrementar}
      />
      //viadasdasdasdasdas
      <Text>VIDAS</Text>
      <Text>{vidas}</Text>
      <Button
        title='Perder Vida'
        onPress={perderVida}
      />
      <Button
        title='PREMIAR'
        onPress={premiar}
      />

      <StatusBar style="auto" />
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
