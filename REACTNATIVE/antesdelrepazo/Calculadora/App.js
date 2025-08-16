import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [valor1, setValor1] = useState("Valor1");
  const [valor2, setValor2] = useState("Valor2");
  const [resultado, setResultado] = useState("Resultado");

  const sumar = () => {
    let int1 = parseInt(valor1);
    let int2 = parseInt(valor2);
    let resultado = int1 + int2;
    setResultado("RESULTADO:" + resultado);
  }

  const restar = () => {
    let int1 = parseInt(valor1);
    let int2 = parseInt(valor2);
    let resultado = int1 - int2;
    setResultado("RESULTADO:" + resultado);
  }

  const multiplicar = () => {
    let int1 = parseInt(valor1);
    let int2 = parseInt(valor2);
    let resultado = int1 * int2;
    setResultado("RESULTADO:" + resultado);
  }


  return (
    <View style={styles.container}>
      <Text>Calculadora</Text>
      <TextInput
        style={styles.cajaTexto}
        value={valor1}
        onChangeText={(txt) => {
          setValor1(txt);
        }}
      />
      <TextInput
        style={styles.cajaTexto}
        value={valor2}
        onChangeText={(txt) => {
          setValor2(txt);
        }}
      />
      <Text>{resultado}</Text>
      <Button
        title='SUMAR'
        onPress={sumar}
      />
      <Button
        title='RESTAR'
        onPress={restar}
      />
      <Button
        title='MULTIPLICAR'
        onPress={multiplicar}
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
    borderWidth: 1,
    paddingTop: 5,
    paddingHorizontal: 10
  }
});
