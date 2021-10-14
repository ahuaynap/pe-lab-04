import * as React from 'react';
import { View, Text, Button, SafeAreaView, TextInput } from 'react-native';
import styles from '../styles';

const  ChequeoScreen = ({navigation} : any) => { 
    const [peso, onChangePeso] = React.useState('');
    const [temperatura, onChangeTemperatura] = React.useState('');
    const [presion, onChangePresion] = React.useState('');
    const [nivelSaturacion, onChangeNivelSaturacion] = React.useState('');

    const addVisita = () => {
        navigation.navigate('visitas');
    }

    return (
        <SafeAreaView>
            <Text style={{fontSize: 25, textAlign: 'center', color: '#000000'}}>Termina el registro de tu visita</Text>

            <Text style={{fontSize: 20, color: '#000000'}}>Peso</Text>
            <TextInput
                style={styles.input}
                onChangeText={onChangePeso}
                value={peso}
                placeholder="Diego"
                keyboardType="numeric" />

            <Text style={{fontSize: 20, color: '#000000'}}>Temperatura</Text>
            <TextInput
                style={styles.input}
                onChangeText={onChangeTemperatura}
                value={temperatura}
                placeholder="Rivera"
                keyboardType="numeric"/>

            <Text style={{fontSize: 20, color: '#000000'}}>Presion</Text>
            <TextInput
                style={styles.input}
                onChangeText={onChangePresion}
                value={presion}
                placeholder="useless placeholder"
                keyboardType="numeric"/>
            
            <Text style={{fontSize: 20, color: '#000000'}}>Nivel de Saturacion</Text>
            <TextInput
                style={styles.input}
                onChangeText={onChangeNivelSaturacion}
                value={nivelSaturacion}
                placeholder="1.65"
                keyboardType="numeric"/>

            <Button
                title="Continuar"
                onPress={() => addVisita()}/>
        </SafeAreaView>
    );
}

export default ChequeoScreen;