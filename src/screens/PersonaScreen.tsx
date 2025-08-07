import React from 'react'
import { Button, View } from 'react-native'
import { Text } from 'react-native-gesture-handler'
import { styles } from '../theme/appTheme'
import { StackScreenProps } from '@react-navigation/stack'

type Props = StackScreenProps<any,any>;
//Interface para los parametros de navegacion
interface RouteParams {
    id: number;
    nombre: string;
    apellido: string;
}

export const PersonaScreen = ({route}: Props) => {
    const params = route.params as RouteParams;
    //console.log(params);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Persona Screen</Text>
            <Text >{params.id},{params.nombre},{params.apellido}</Text>
        </View>
    )
}
