import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Text, View } from 'react-native'
import { styles } from '../theme/appTheme';

type Props = StackScreenProps<any, any>;

interface RouteParams{
    id: number;
    nombre: string;
    apellido: string;
}

export const Persona2Screen = ({route}:Props) => {
    const params = route.params as RouteParams;
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Persona 2 Screen</Text>
            <Text>{params.id},{params.nombre},{params.apellido}</Text>
        </View>
    )
}
