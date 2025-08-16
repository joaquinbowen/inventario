import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.cont1} >
        <Button title='X' />
        <Button title='Y' />
        <Button title='Z' />
      </View>
      <View style={styles.cont2} >
        <View style={styles.cont4}>
          <View style={styles.cont6} >
            <Button title='Boton 1' />
            <Button title='Boton 2' />
          </View>
          <View style={styles.cont7} >
            <Button title='Operacion 1' />
            <Button title='Operacion 2' />
            <Button title='Operacion 3' />
          </View>
        </View>
        <View style={styles.cont5}>
          <Button title='Accion 1' />
          <Button title='Accion 2' />
        </View>
      </View>
      <View style={styles.cont3} >
        <Button title='Boton Final' />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',

  },
  cont1: {
    flex: 1,
    backgroundColor: 'skyblue',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  cont2: {
    flex: 6,
    backgroundColor: 'green',
    flexDirection: 'column'
  },
  cont3: {
    flex: 1,
    backgroundColor: 'orange',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  cont4: {
    flex: 4,
    backgroundColor: 'purple',
    flexDirection: 'row'
  },
  cont5: {
    flex: 1,
    backgroundColor: 'blue',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  cont6: {
    flex: 1,
    backgroundColor: 'yellow',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'stretch'
  },
  cont7: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start'

  }

});
