import { View, Text, StyleSheet, Button } from 'react-native'


export const Home = ({ navigation }) => {
    return (<View style={styles.container}>
        <Text>HOME</Text>
        <View style={styles.areaBotones} >
            <View style={styles.btn}>
                <Button
                    title='Ir a contacts'
                    onPress={() => {
                        navigation.navigate('ContactsNav')
                    }}
                />
                <Button
                    title='Ir a productos'
                    onPress={() => {
                        navigation.navigate('ProductosNav')
                    }}
                />
            </View>

        </View>

    </View>)




}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    areaBotones: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'strech',
        margin: 15,
        //backgroundColor: 'gray'

    },
    btn: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        margin: 30


    }
});