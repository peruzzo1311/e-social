import { Ionicons } from '@expo/vector-icons'
import { Divider, HStack, Icon, Text, VStack } from 'native-base'
import { useState } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

import ExitAlert from './ExitAlert'
import InfoModal from './InfoModal'
import NotificationAlert from './NotificationAlert'

export default function ProfileAppConfig() {
  const [notificationAlert, setNotificationAlert] = useState<boolean>(false)
  const [notification, setNotification] = useState<boolean>(true)
  const [modalInfo, setModalInfo] = useState<boolean>(false)
  const [exitAlert, setExitAlert] = useState<boolean>(false)
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  const toggleTheme = () => {
    setTheme(theme == 'light' ? 'dark' : 'light')
  }

  const handleNotifications = () => {
    if (!notification) {
      setNotification(true)

      return
    }

    setNotificationAlert(true)
  }

  return (
    <VStack space={4} divider={<Divider />}>
      <Text fontWeight={700} fontSize={'md'} color={'#0171BB'}>
        Configurações do app
      </Text>

      <TouchableOpacity onPress={toggleTheme}>
        <HStack alignItems={'center'} space={4}>
          <Icon
            as={Ionicons}
            name={theme == 'light' ? 'ios-moon-outline' : 'ios-sunny-outline'}
            size={6}
            color={'black'}
          />

          <Text fontWeight={700} fontSize={'md'}>
            {theme == 'light'
              ? 'trocar para Tema Escuro'
              : 'trocar para Tema Claro'}
          </Text>
        </HStack>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleNotifications}>
        <HStack alignItems={'center'} space={4}>
          <Icon
            as={Ionicons}
            name={
              notification
                ? 'ios-notifications-outline'
                : 'ios-notifications-off-outline'
            }
            size={6}
            color={'black'}
          />

          <Text fontWeight={700} fontSize={'md'}>
            Notificações
          </Text>
        </HStack>

        <NotificationAlert
          notificationAlert={notificationAlert}
          setNotificationAlert={setNotificationAlert}
          setNotification={setNotification}
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setModalInfo(true)}>
        <HStack alignItems={'center'} space={4}>
          <Icon
            as={Ionicons}
            name={'ios-information-circle-outline'}
            size={6}
            color={'black'}
          />

          <Text fontWeight={700} fontSize={'md'}>
            Sobre o app
          </Text>
        </HStack>

        <InfoModal modalInfo={modalInfo} setModalInfo={setModalInfo} />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setExitAlert(true)}>
        <HStack alignItems={'center'} space={4}>
          <Icon
            as={Ionicons}
            name={'ios-log-out-outline'}
            size={6}
            color={'black'}
          />

          <Text fontWeight={700} fontSize={'md'}>
            Sair
          </Text>
        </HStack>

        <ExitAlert exitAlert={exitAlert} setExitAlert={setExitAlert} />
      </TouchableOpacity>
    </VStack>
  )
}
