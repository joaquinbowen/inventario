import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TextInput, Button, Alert } from 'react-native';



let personas = [
  { nombre: 'Thor', apellido: 'Tros', cedula: '1725040479' },
  { nombre: 'Wea', apellido: 'Po', cedula: '1725040578' },
  { nombre: 'Pedro', apellido: 'Sanchez', cedula: '1725070779' }
];


let esNuevo = true;
let indiceSeleccionado = -1;




export default function App() {

  let ItemPersona = (indice, persona) => {
    return (
      <View style={styles.itemPersona} >
        <View style={styles.areaIndice}>
          <Text>{indice}</Text>
        </View>
        <View style={styles.itemContenido}>
          <Text style={styles.textoPrincipal}>
            {persona.nombre} {persona.apellido}
          </Text>
          <Text style={styles.textoSecundario}>
            {persona.cedula}
          </Text>
        </View>
        <View style={styles.itemBotones} >
          <Button
            title=' E '
            color='green'
            onPress={() => {
              setTxtCedula(persona.cedula)
              setTxtNombre(persona.nombre)
              setTxtApellido(persona.apellido)
              esNuevo = false;
              indiceSeleccionado = indice
            }}
          />
          <Button
            title=' X '
            color='red'
            onPress={() => {
              indiceSeleccionado = indice;
              personas.splice(indiceSeleccionado, 1);
              setNumElementos(personas.length)
            }}
          />
        </View>

      </View>)
  }

  let limpiar = () => {
    setTxtApellido(null);
    setTxtCedula(null);
    setTxtNombre(null);
    esNuevo = true;
  }


  let existePersona = () => {
    for (let i = 0; i < personas.length; i++) {
      if (personas[i].cedula == txtCedula) {
        return true
      }
    }
    return false;
  }

  let guardarPersona = () => {
    if (esNuevo) {
      if (existePersona()) {
        Alert.alert("Info", "Ya existe la persona con cedula: " + txtCedula)
      } else {
        let persona = { nombre: txtNombre, apellido: txtApellido, cedula: txtCedula };
        personas.push(persona);
      }


    } else {
      personas[indiceSeleccionado].nombre = txtNombre;
      personas[indiceSeleccionado].apellido = txtApellido;
    }

    limpiar();
    setNumElementos(personas.length)

  }

  const [txtCedula, setTxtCedula] = useState();
  const [txtApellido, setTxtApellido] = useState();
  const [txtNombre, setTxtNombre] = useState();
  const [numElementos, setNumElementos] = useState(personas.length);

  return (
    <View style={styles.container}>
      <View style={styles.areaCabecera} >
        <Text>Personas</Text>
        <TextInput
          style={styles.txt}
          value={txtCedula}
          placeholder='Ingrese su cedula'
          onChangeText={txt => {
            setTxtCedula(txt)
          }}
          keyboardType='numeric'
          editable={esNuevo}
        />
        <TextInput
          style={styles.txt}
          value={txtNombre}
          placeholder='Ingrese su nombre'
          onChangeText={txt => {
            setTxtNombre(txt)
          }}
        />
        <TextInput
          style={styles.txt}
          value={txtApellido}
          placeholder='Ingrese su apellido'
          onChangeText={txt => {
            setTxtApellido(txt)
          }}
        />
        <View style={styles.areaBotones} >
          <Button
            title='Guardar'
            onPress={guardarPersona}
          />
          <Button
            title='Nuevo'
            onPress={limpiar}
          />
        </View>
        <Text>{"Elementos: " + numElementos}</Text>

      </View>
      <View style={styles.areaContenido} >
        <FlatList
          style={styles.lista}
          data={personas}
          renderItem={({ index, item }) => {                                     //
            return (<ItemPersona indice={index} persona={item} />)
          }}
          keyExtractor={item => item.cedula}
        />
      </View>
      <View style={styles.areaPie} >
        <Text>Autor:joaquin bowwen</Text>
      </View>

      <StatusBar style="auto" />
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: 'lightblue',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    paddingTop: 50,
    paddingHorizontal: 10
  },
  lista: {
    //backgroundColor: 'pink'
  },
  itemPersona: {
    backgroundColor: 'lemonchiffon',
    marginBottom: 10,
    padding: 10,
    flexDirection: 'row'
  },
  textoPrincipal: {
    fontSize: 20
  },
  textoSecundario: {
    fontStyle: 'italic',
    fontSize: 16
  },
  areaCabecera: {
    flex: 4,
    // backgroundColor: 'springgreen',
    justifyContent: 'center'
  },
  areaContenido: {
    flex: 6,
    //backgroundColor: 'coral'
  },
  areaPie: {
    flex: 1,
    //backgroundColor: 'teal',
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  areaIndice: {
    //backgroundColor: 'violet',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  itemContenido: {
    //backgroundColor: 'gray',
    flex: 6,
    paddingLeft: 5
  },
  itemBotones: {
    //backgroundColor: 'gray',
    flex: 2,
    paddingLeft: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  txt: {
    borderWidth: 1,
    borderColor: 'gray',
    paddingTop: 3,
    paddingHorizontal: 5,
    marginBottom: 7
  },
  areaBotones: {
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  }

});
