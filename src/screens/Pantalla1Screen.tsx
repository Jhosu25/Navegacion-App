import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { Button, Text, TouchableOpacity, View } from 'react-native'
import { styles } from '../theme/appTheme';


//Navegacion por props de SatackNavigator
type Props = StackScreenProps<any, any>;

export const Pantalla1Screen = ({navigation}: Props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Pantalla 1 Screen</Text>
            <Button title="Ir pantalla 2"
            onPress={()=> navigation.navigate('Pantalla2')}></Button>
            <TouchableOpacity
                onPress={() => navigation.navigate('Persona')}>
                <Text>Viviana</Text>
            </TouchableOpacity>
        </View>
    )
}
