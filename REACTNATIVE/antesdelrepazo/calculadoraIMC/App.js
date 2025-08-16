import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {

  const [peso, setPeso] = useState();
  const [altura, setAltura] = useState();
  const [imc, setIMC] = useState();
  const [resultado, setResultado] = useState();

  const calcular = () => {
    let fPeso = parseFloat(peso);
    let fAltura = parseFloat(altura) / 100;
    let calculo = fPeso / (fAltura * fAltura);
    setIMC("IMC: " + calculo.toFixed(2));
    let m = interpretar(calculo);
    setResultado(m);

  }

  const interpretar = (imcCalc) => {
    let inter;
    if (imcCalc < 18.5) {
      inter = "Su peso es inferior al normal";
    } else if (imcCalc >= 18.5 && imcCalc < 25) {
      inter = "Su peso es normal";
    } else if (imcCalc >= 25 && imcCalc < 30) {
      inter = "Su peso es superior al normal";
    } else {
      inter = "Tiene obesidad :(";
    }
    return inter;
  }


  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Calculadora IMC</Text>
      <TextInput
        style={styles.caja}
        placeholder='Ingrese su peso en Kg'
        onChangeText={(txt) => {
          setPeso(txt)
        }}
      />
      <TextInput
        style={styles.caja}
        placeholder='Ingrese su peso en cm'
        onChangeText={(txt) => {
          setAltura(txt)
        }}
      />
      <Button
        title='Calcular'
        onPress={calcular}
      />


      <Text style={styles.titulo}>{imc}</Text>
      <Text style={styles.titulo}>{resultado}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    paddingHorizontal: 10
  },
  caja: {
    borderColor: 'gray',
    borderWidth: 1,
    paddingTop: 5,
    paddingHorizontal: 5,
    marginBottom: 10
  },
  titulo: {
    fontSize: 14,
    marginBottom: 10,
    fontWeight: 'bold',
    marginTop: 20

  },

});
