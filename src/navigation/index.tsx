import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RegistroScreen from '../screens/Registro';
import ChequeoScreen from '../screens/Chequeo';
import VisitasScreen from '../screens/Visitas';

const Stack = createNativeStackNavigator();

const Navigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="registro" component={RegistroScreen} options={{ title: 'Registro de visitas' }} />
                <Stack.Screen name="chequeo" component={ChequeoScreen} options={{ title: 'Formulario de chequeo' }} />
                <Stack.Screen name="visitas" component={VisitasScreen} options={{ title: 'Lista de visitas' }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default Navigator;