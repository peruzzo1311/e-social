import { NavigationContainer } from '@react-navigation/native'
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack'
import TabRoutes from './tabNavigation'
import { StatusBar } from 'native-base'
import Perfil from '../screens/Perfil'
import Login from '../screens/Login'

const Stack = createStackNavigator()

export default function Routes() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor='#0171BB' barStyle='light-content' />
      <Stack.Navigator
        screenOptions={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          headerShown: false,
        }}
      >
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='HomeRoute' component={TabRoutes} />
        <Stack.Screen name='Perfil' component={Perfil} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
