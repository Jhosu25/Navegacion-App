import { createStackNavigator } from '@react-navigation/stack';
import { Pantalla1Screen } from '../screens/Pantalla1Screen';
import { Pantalla2Screen } from '../screens/Pantalla2Screen';
import { Pantalla3Screen } from '../screens/Pantalla3Screen';
import { PersonaScreen } from '../screens/PersonaScreen';
import { Persona2Screen } from '../screens/Persona2Screen';

const Stack = createStackNavigator();

export const StackNavigator = () => {
    return (
        <Stack.Navigator /*initialRouteName='Pantalla2'*/
        screenOptions={{
            cardStyle:{
                backgroundColor: 'white'
            },
            headerShown: true,
            headerStyle:{
                elevation:5
            }
        }}
        >
            <Stack.Screen name="Pantalla1" options={{ title: "Home" }} component={Pantalla1Screen} />
            <Stack.Screen name="Pantalla2" component={Pantalla2Screen} />
            <Stack.Screen name="Pantalla3" options={{ headerShown: false}} component={Pantalla3Screen} />
            <Stack.Screen name="Persona" component={PersonaScreen} />
            <Stack.Screen name="Persona2" component={Persona2Screen} />
        </Stack.Navigator>
    );
}