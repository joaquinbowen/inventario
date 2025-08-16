import { View, Text, StyleSheet } from "react-native";

export const ContenidoA = () => {
    return (
        <View style={styles.container}>
            <Text>Contenido A</Text>
        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
});