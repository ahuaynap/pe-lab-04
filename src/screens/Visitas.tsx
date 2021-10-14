import * as React from 'react';
import { View, Text, Button } from 'react-native';

const VisitasScreen = ({ navigation }: any) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{fontSize: 20}}>Visita realizada</Text>
            <Button
                title="Ingresar nueva visita"
                onPress={() => navigation.navigate('registro')}/>
        </View>
    );
}

export default VisitasScreen;