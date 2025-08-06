import React from 'react'
import { Button, Text, View } from 'react-native'
import { styles } from '../theme/appTheme'
import { CommonActions, useNavigation } from '@react-navigation/native'

//Navegacion por hooks de navegacion
export const Pantalla2Screen = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Pantalla 2 Screen</Text>
            <Button title='Ir pantalla 3'
                onPress={() => navigation.dispatch(CommonActions.navigate({ name: 'Pantalla3'}))}></Button>
        </View>
    )
}
