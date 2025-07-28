import { StatusBar } from 'expo-status-bar';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';

export default function App() {

  const finalizar=()=>{
    Alert.alert("MENSAJE","SU SESION HA FINALIZADO")
  }

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Button
        title='INICIAR'
        onPress={()=>{
          Alert.alert("Mensaje","SU SESION HA INICIADO")
        }}
      />
      <Button
        title='FINALIZAR'
        onPress={finalizar}
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
