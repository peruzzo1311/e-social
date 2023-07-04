import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'native-base'
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack'
import TabRoutes from './tabNavigation'
import Perfil from '../screens/Profile'
import Login from '../screens/Login'
import Chat from '../screens/Chat'
import Notifications from '../screens/Notifications'
import NewChat from '../screens/NewChat';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#0171BB" barStyle="light-content" />
      <Stack.Navigator
        screenOptions={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          headerShown: false,
        }}
      >
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='HomeRoute' component={TabRoutes} />
        <Stack.Screen name='Profile' component={Perfil} />
        <Stack.Screen name='Chat' component={Chat} options={{detachPreviousScreen:true}}/>
        <Stack.Screen name='Notifications' component={Notifications} />
        <Stack.Screen name='NewChat' component={NewChat} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
