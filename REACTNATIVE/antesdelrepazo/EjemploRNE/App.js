import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Alert } from 'react-native';
import { Button, Icon, Input } from '@rneui/base';
import { useState } from 'react';


export default function App() {

  const [name, setName] = useState();

  return (
    <View style={styles.container}>
      <Text>RNE</Text>
      <Input
        value={name}
        onChangeText={setName}
        placeholder='Ingrese su nombre'
        label='Nombre'
      />
      <Text>{name}</Text>
      <Button
        title='OK'
        icon={{
          name: 'github',
          type: 'feather',
          size: 15,
          color: 'white'
        }}
        onPress={() => {
          Alert.alert("info", "ajnvfgodasbnofgvbaso")
        }}
      />
      <Button
        title='cancel'
        icon={<Icon
          name='android'
          type='zocial'
          color='white'
        />}
      />
      <Icon
        name='spotify'
        type='zocial'
        color='black'


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
