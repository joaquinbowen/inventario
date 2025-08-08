import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, FlatList, ScrollView, TextInput, Button, Alert, Modal, TouchableHighlight } from 'react-native';

let productos = [
  { codigo: 101, nombre: "Papitas", categoria: "Snacks", precioCompra: 0.65 },
  { codigo: 102, nombre: "Fuze Tea", categoria: "Bebidas", precioCompra: 1 },
  { codigo: 103, nombre: "Bacardi", categoria: "Bebidas con Alcohol", precioCompra: 15 },
  { codigo: 104, nombre: "Galletas Oreo", categoria: "Snacks", precioCompra: 0.95 },
  { codigo: 105, nombre: "Fanta", categoria: "Bebidas", precioCompra: 0.80 },

]

let esNuevo = true;
let codigoSeleccionado = -1;
let indiceSeleccionado = -1;
let aceptarBorrar = false;


export default function App() {


  let limpiar = () => {
    setNumProductos(productos.length);
    setTxtCategoria("");
    setTxtCodigo("");
    setTxtNombre("");
    setTxtPrecioCompra("");
    setTxtPrecioVenta(0.00);
    esNuevo = true;


  }


  let guardarProducto = () => {
    if (validarVacio()) {
      if (esNuevo) {
        if (existeProducto()) {
          Alert.alert("Info", "Ya existe un producto con el codigo: " + txtCodigo)
        } else {
          let productoPA = { codigo: txtCodigo, nombre: txtNombre, categoria: txtCategoria, precioCompra: txtPrecioCompra };
          productos.push(productoPA);
          console.log("entra a guardarr")
        }
      } else {
        for (let i = 0; i < productos.length; i++) {
          if (productos[i].codigo == codigoSeleccionado) {
            productos[i].nombre = txtNombre;
            productos[i].categoria = txtCategoria;
            productos[i].precioCompra = txtPrecioCompra
          }
        }
      }
      limpiar();
      setNumProductos(productos.length);
    } else {
      console.log("aaaaaaaaaaaaaa")
    }
  }

  let existeProducto = () => {
    for (let i = 0; i < productos.length; i++) {
      if (productos[i].codigo == txtCodigo) {
        return true
      }
    }
    return false;
  }

  let validarVacio = () => {
    console.log(txtCodigo)
    let nullCodigo = (txtCodigo) === null;
    let nullNombre = txtNombre === null;
    let nullCategoria = txtCategoria === null;
    let nullPrecioCompra = txtPrecioCompra === null;
    console.log(nullCodigo);

    let cajaCodigo = (txtCodigo) === "";
    let cajaNombre = (txtNombre) === "";
    let cajaCategoria = (txtCategoria) === "";
    let cajaPrecioCompra = (txtPrecioCompra) === "";
    console.log(cajaCodigo)
    console.log("desp")
    console.log(txtCodigo)
    if (!cajaCodigo && !cajaNombre && !cajaCategoria && !cajaPrecioCompra && !nullCodigo
      && !nullNombre && !nullCategoria && !nullPrecioCompra) {
      console.log(txtCodigo)
      console.log(":V")
      return true;
    } else {
      Alert.alert("INFO", "Debe llenar todos los campos")

      return false;
    }

  }





  let ItemProducto = (props) => {
    return (
      <TouchableHighlight
        onPress={() => {
          codigoSeleccionado = props.producto.codigo;
          setTxtCodigo((props.producto.codigo).toString());
          setTxtNombre(props.producto.nombre);
          setTxtCategoria(props.producto.categoria);
          setTxtPrecioCompra((props.producto.precioCompra).toString());
          setTxtPrecioVenta((((props.producto.precioCompra) * 1.2).toFixed(2)).toString());
          esNuevo = false;

        }}
      >

        <View style={styles.itemP} >
          <View style={styles.itemCodigo} >
            <Text>{props.producto.codigo}</Text>
          </View>
          <View style={styles.itemNombre} >
            <Text>{props.producto.nombre}</Text>
            <Text>{props.producto.categoria}</Text>
          </View>
          <View style={styles.itemPrecio} >
            <Text>{"USD " + (parseFloat(props.producto.precioCompra) * 1.2).toFixed(2)}</Text>
          </View>
          <View style={styles.itemBotones} >
            <Button
              title='X'
              color='red'
              onPress={() => {
                setModalVisible(true)
                indiceSeleccionado = props.indice;

              }}
            />
          </View>


        </View>
      </TouchableHighlight>
    )
  }

  const [txtCodigo, setTxtCodigo] = useState("");
  const [txtNombre, setTxtNombre] = useState("");
  const [txtCategoria, setTxtCategoria] = useState("");
  const [txtPrecioCompra, setTxtPrecioCompra] = useState("");
  const [txtPrecioVenta, setTxtPrecioVenta] = useState("");
  const [numProductos, setNumProductos] = useState(productos.length);
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Modal
        animationType='slide'
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modal} >
          <View style={styles.modalContent}>
            <Text style={styles.modalText} >¿Está seguro que quiere eliminar?</Text>
            <View style={styles.modalButtons}>
              <Button
                style={styles.modalButtons}
                title='CANCELAR'
                onPress={() => {
                  setModalVisible(false)
                }}
              />
              <Button
                title='ACEPTAR'
                onPress={() => {
                  productos.splice(indiceSeleccionado, 1);
                  setNumProductos(productos.length);
                  setModalVisible(!modalVisible)

                }}
              />
            </View>
          </View>

        </View>

      </Modal>
      <View style={styles.cabecera} >
        <ScrollView>
          <View style={styles.titulo}>
            <Text style={styles.letra}>Productos</Text>
          </View>
          <View>
            <TextInput
              style={styles.input}
              value={txtCodigo}
              placeholder='Código'
              keyboardType='numeric'
              onChangeText={txt => {
                if (txt == "" || txt == null) {
                  console.log("sirvio la wea")
                  setTxtCodigo("")
                } else {
                  setTxtCodigo(parseInt(txt))
                }

              }}
              editable={esNuevo}
            />
            <TextInput
              style={styles.input}
              value={txtNombre}
              placeholder='Nombre'
              keyboardType='default'
              onChangeText={txt => {
                setTxtNombre(txt)
              }}
            />
            <TextInput
              style={styles.input}
              value={txtCategoria}
              placeholder='Categoria'
              keyboardType='default'
              onChangeText={txt => {
                setTxtCategoria(txt)
              }}
            />
            <TextInput
              style={styles.input}
              value={txtPrecioCompra}
              placeholder='Precio de Compra'
              keyboardType='numeric'
              onChangeText={txt => {
                setTxtPrecioCompra(txt)
                if (txt) {
                  setTxtPrecioVenta((parseFloat(txt) * 1.2).toFixed(2))
                } else {
                  setTxtPrecioVenta("")
                }

              }}
            />
            <TextInput
              style={styles.input}
              value={txtPrecioVenta}
              placeholder='Precio de venta'
              keyboardType='numeric'
              editable={false}

            />
            <View style={styles.areaBotones} >
              <Button
                title='NUEVO'
                onPress={limpiar}
              />
              <Button
                title='GUARDAR'
                onPress={() => {
                  guardarProducto()
                  setNumProductos(productos.length)
                }}
              />
              <Text> Productos: {numProductos}</Text>
            </View>
          </View>
        </ScrollView>
      </View>
      <View style={styles.lista} >
        <FlatList
          data={productos}
          keyExtractor={item => {
            return item.codigo;
          }}
          renderItem={(elemento) => {
            return <ItemProducto producto={elemento.item} indice={elemento.index} />
          }}
        />
      </View>
      <View style={styles.pie} >
        <Text>Autor:Joaquin Bowen</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 45,
    paddingHorizontal: 20,
    paddingBottom: 10
  },
  titulo: {
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 15
  },
  itemP: {
    margin: 5,
    padding: 4,
    borderColor: 'lightblue',
    borderWidth: 2,
    borderRadius: 7,
    backgroundColor: 'seashell',
    flexDirection: 'row'
  },
  letra: {
    fontSize: 25,
    fontStyle: 'italic'
  },
  cabecera: {
    flex: 25,
    //backgroundColor: 'gray',
    justifyContent: 'center'
  },
  lista: {
    flex: 30
  },
  pie: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    //backgroundColor: 'yellow'
  },
  areaBotones: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 10
  },
  itemCodigo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  itemNombre: {
    flex: 4,
    marginLeft: 10,
    justifyContent: 'center'
  },
  itemPrecio: {
    flex: 2,
    justifyContent: 'center'
  },
  itemBotones: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: 'gray'
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    margin: 0,
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
  },
  modalText: {
    fontSize: 20,
    fontStyle: 'italic',
    marginBottom: 30,  // Más espacio debajo del texto
    textAlign: 'center',
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 20,  // Espacio adicional arriba de los botones
  },
  modalButton: {
    minWidth: 100,  // Ancho mínimo para los botones
    marginHorizontal: 10,  // Espacio entre botones
  }
});
