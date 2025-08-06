import React from 'react'
import { Button, Text, View } from 'react-native'
import { styles } from '../theme/appTheme'
import { StackScreenProps } from '@react-navigation/stack'


//Navegación por props de StackNavigator
type Props = StackScreenProps<any, any>;

export const Pantalla3Screen = ({ navigation }: Props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Pantalla 3 Screen</Text>
            <Button title='Regresar'
                onPress={() => navigation.goBack()}></Button>
            <Button title='Ir home'
                onPress={() => navigation.popToTop()}></Button>
        </View>
    )
}
