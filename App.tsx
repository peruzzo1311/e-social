import 'react-native-gesture-handler'

import { DefaultEventsMap } from '@socket.io/component-emitter'
import { useFonts } from 'expo-font'
import { NativeBaseProvider } from 'native-base'
import { Provider } from 'react-redux'
import { io, Socket } from 'socket.io-client'

import DefaultTheme from './src/assets/theme/default'
import { Store } from './src/redux'
import Routes from './src/routes'

export const socket: Socket<DefaultEventsMap, DefaultEventsMap> = io(
  'http://192.168.1.140:8082'
)
export default function App() {
  const [fontsLoaded] = useFonts({
    'Montserrat-Regular': require('./src/assets/fonts/Montserrat-Regular.ttf'),
    'Montserrat-Medium': require('./src/assets/fonts/Montserrat-Medium.ttf'),
    'Montserrat-SemiBold': require('./src/assets/fonts/Montserrat-SemiBold.ttf'),
    'Montserrat-Bold': require('./src/assets/fonts/Montserrat-Bold.ttf'),
  })

  if (!fontsLoaded) {
    return null
  }

  return (
    <Provider store={Store}>
      <NativeBaseProvider theme={DefaultTheme}>
        <Routes />
      </NativeBaseProvider>
    </Provider>
  )
}
