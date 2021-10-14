import React from 'react';
import { View, Text, Button, TextInput, SafeAreaView } from 'react-native';
import styles from '../styles';



const  RegistroScreen = ({ navigation } : any) => {
    const [nombres, onChangeNombres] = React.useState('');
    const [apellidos, onChangeApellidos] = React.useState('');
    const [fechaNacimiento, onChangeFechaNacimiento] = React.useState('');
    const [estatura, onChangeEstatura] = React.useState('');
    const [direccion, onChangeDireccion] = React.useState('');

    const addVisita = () => {
        navigation.navigate('chequeo');
    }

    return (
        <SafeAreaView>
            <Text style={{fontSize: 25, textAlign: 'center', color: '#000000'}}>Bienvenido nuevo Visitante</Text>

            <Text style={{fontSize: 20, color: '#000000'}}>Nombres</Text>
            <TextInput
                style={styles.input}
                onChangeText={onChangeNombres}
                value={nombres}
                placeholder="Diego"
                keyboardType="numeric" />

            <Text style={{fontSize: 20, color: '#000000'}}>Apellidos</Text>
            <TextInput
                style={styles.input}
                onChangeText={onChangeApellidos}
                value={apellidos}
                placeholder="Rivera"
                keyboardType="numeric"/>

            <Text style={{fontSize: 20, color: '#000000'}}>Fecha de Nacimiento</Text>
            <TextInput
                style={styles.input}
                onChangeText={onChangeFechaNacimiento}
                value={fechaNacimiento}
                placeholder="useless placeholder"
                keyboardType="numeric"/>
            
            <Text style={{fontSize: 20, color: '#000000'}}>Estatura</Text>
            <TextInput
                style={styles.input}
                onChangeText={onChangeEstatura}
                value={estatura}
                placeholder="1.65"
                keyboardType="numeric"/>

            <Text style={{fontSize: 20, color: '#000000'}}>Direccion</Text>
            <TextInput
                style={styles.input}
                onChangeText={onChangeDireccion}
                value={direccion}
                placeholder="Av. El sol 205"
                keyboardType="numeric"/>

            <Button
                title="Continuar"
                onPress={() => addVisita()}/>
        </SafeAreaView>
    );
}

export default RegistroScreen;