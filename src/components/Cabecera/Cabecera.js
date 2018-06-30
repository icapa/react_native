import React from 'react';
import {View,Text,StyleSheet} from 'react-native';

const cabecera = () => {
    return(
    <View style={styles.encabezado}>
        <Text style={styles.celda}>Frecuencia</Text>
        <Text style={styles.celda}>D(dB)</Text>
        <Text style={styles.celda}>Octava</Text>
    </View>
    );
};

const styles = StyleSheet.create({
    encabezado:{
        backgroundColor: '#000088',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection:'row',
        borderWidth: 1.5,
        
        padding: 5
    },
    celda:{
        flex:1,
        
        borderColor: '#000088',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color:'white'
        
    }
});

export default cabecera;