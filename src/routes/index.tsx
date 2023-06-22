import { NavigationContainer } from '@react-navigation/native'
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack'
import TabRoutes from './tabNavigation'
import { StatusBar } from 'native-base'

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
        <Stack.Screen name='HomeRoute' component={TabRoutes} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
