import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const [valorC, setValorC] = useState("Ingrese el valor en dolares");
  const [resultado, setResultado] = useState("...");

  const convertirMexico = () => {
    let pMexico = parseFloat(valorC) * 18.77;
    setResultado(valorC + " dolares equivalen a " + pMexico + " pesos mexicanos");
  }
  const convertirColombia = () => {
    let pColombia = parseFloat(valorC) * 4165.9;
    setResultado(valorC + " dolares equivalen a " + pColombia + " pesos colombianos");
  }
  const convertirEuros = () => {
    let euros = parseFloat(valorC) * 0.86;
    setResultado(valorC + " dolares equivalen a " + euros + " euros");
  }




  return (
    <View style={styles.container}>
      <Text>Convertidor</Text>
      <TextInput
        style={styles.cajaTexto}
        value={valorC}
        onChangeText={(txt) => {
          setValorC(txt)
        }}
      />
      <Text>{resultado}</Text>
      <Button
        title='PESOS MEXICANOS'
        onPress={convertirMexico}
      />
      <Button
        title='PESOS COLOMBIANOS'
        onPress={convertirColombia}
      />
      <Button
        title='EUROS'
        onPress={convertirEuros}
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
  cajaTexto: {
    borderColor: "black",
    paddingTop: 5,
    paddingHorizontal: 10,
    borderWidth: 1
  }
});
