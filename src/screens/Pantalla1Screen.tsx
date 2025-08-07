import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { Button, Text, TouchableOpacity, View } from 'react-native'
import { styles } from '../theme/appTheme';


//Navegacion por props de SatackNavigator
type Props = StackScreenProps<any, any>;

//Interface para el objeto persona
interface Persona {
    id: number;
    nombre: string;
    apellido: string;
}

export const Pantalla1Screen = ({navigation}: Props) => {

    const persona: Persona = {
        id: 1,
        nombre: 'Viviana',
        apellido: 'Flores'
    }
    const persona2: Persona = {
        id: 2,
        nombre: 'Josue',
        apellido: 'Flores'
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Pantalla 1 Screen</Text>
            <Button title="Ir pantalla 2"
            onPress={()=> navigation.navigate('Pantalla2')}></Button>

            <Text>Navegar con parámetros</Text>

            <TouchableOpacity
                onPress={() => navigation.navigate('Persona', persona2)}>
                <Text>Viviana</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => navigation.navigate('Persona2', persona2)}>
                <Text>Josue</Text>
            </TouchableOpacity>
        </View>
    )
}
