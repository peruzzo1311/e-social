import {
  View,
  Image,
  Text,
  VStack,
  HStack,
  Icon,
  Divider,
  AlertDialog,
  Button,
} from 'native-base'
import Header from '../../components/Header'
const image = require('../../assets/images/Riki.jpg')
import { Ionicons } from '@expo/vector-icons'
import React, { useRef, useState } from 'react'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'

type theme = 'light' | 'dark'

export default function Profile({ navigation }: { navigation: any }) {
  const [notificationAlert, setNotificationAlert] = useState<boolean>(false)
  const [notification, setNotification] = useState<boolean>(true)
  const [exitAlert, setExitAlert] = useState<boolean>(false)
  const [theme, setTheme] = useState<theme>('light')
  const cancelRef = useRef(null)

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
    <View flex={1} bgColor={'#E5E5E5'}>
      <Header opcao={3} />

      <ScrollView>
        <VStack space={4}>
          <View shadow={3} bgColor={'#F5F5F5'} p={4}>
            <View flexDir={'row'}>
              <View>
                <Image
                  source={image}
                  alt='profile image'
                  w={20}
                  h={20}
                  borderRadius={'full'}
                  resizeMode='contain'
                />
              </View>

              <View ml={4}>
                <Text fontWeight={700} fontSize={'xl'}>
                  Henrique Nicolli
                </Text>
              </View>
            </View>
          </View>

          <View shadow={3} bgColor={'#F5F5F5'} p={4}>
            <VStack space={4} divider={<Divider />}>
              <Text fontWeight={700} fontSize={'md'} color={'#0171BB'}>
                Informações sobre a conta
              </Text>

              <View>
                <Text fontWeight={700} fontSize={'md'}>
                  Nome de usuário
                </Text>

                <Text>Henrique Nicolli</Text>
              </View>

              <View>
                <Text fontWeight={700} fontSize={'md'}>
                  Email:
                </Text>

                <Text>HenriqueNicolli@prisma-demo.com.br</Text>
              </View>

              <View>
                <Text fontWeight={700} fontSize={'md'}>
                  Telefone
                </Text>

                <Text>(41) 98877-9480</Text>
              </View>
            </VStack>
          </View>

          <View shadow={3} bgColor={'#F5F5F5'} p={4}>
            <VStack space={4} divider={<Divider />}>
              <Text fontWeight={700} fontSize={'md'} color={'#0171BB'}>
                Configurações do app
              </Text>

              <TouchableOpacity onPress={toggleTheme}>
                <HStack alignItems={'center'} space={4}>
                  <Icon
                    as={Ionicons}
                    name={
                      theme == 'light'
                        ? 'ios-moon-outline'
                        : 'ios-sunny-outline'
                    }
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

                <AlertDialog
                  isOpen={notificationAlert}
                  onClose={() => setNotificationAlert(false)}
                  leastDestructiveRef={cancelRef}
                >
                  <AlertDialog.Content>
                    <AlertDialog.Header fontSize='lg' fontWeight='bold'>
                      Notificações
                    </AlertDialog.Header>

                    <AlertDialog.Body>
                      Você tem certeza que deseja desativar as notificações?
                    </AlertDialog.Body>

                    <AlertDialog.Footer>
                      <Button.Group space={2}>
                        <Button
                          variant='unstyled'
                          colorScheme='coolGray'
                          onPress={() => setNotificationAlert(false)}
                          ref={cancelRef}
                        >
                          Cancelar
                        </Button>

                        <Button
                          bgColor={'#0171BB'}
                          w={150}
                          onPress={() => {
                            setNotification(false)
                            setNotificationAlert(false)
                          }}
                        >
                          Desativar
                        </Button>
                      </Button.Group>
                    </AlertDialog.Footer>
                  </AlertDialog.Content>
                </AlertDialog>
              </TouchableOpacity>

              <TouchableOpacity>
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

                <AlertDialog
                  isOpen={exitAlert}
                  onClose={() => setExitAlert(false)}
                  leastDestructiveRef={cancelRef}
                >
                  <AlertDialog.Content>
                    <AlertDialog.Header fontSize='lg' fontWeight='bold'>
                      Sair do app
                    </AlertDialog.Header>

                    <AlertDialog.Body>
                      Você tem certeza que deseja sair do app?
                    </AlertDialog.Body>

                    <AlertDialog.Footer>
                      <Button.Group space={2}>
                        <Button
                          variant='unstyled'
                          colorScheme='coolGray'
                          onPress={() => setExitAlert(false)}
                          ref={cancelRef}
                        >
                          Cancelar
                        </Button>

                        <Button
                          bgColor={'#0171BB'}
                          w={150}
                          onPress={() => {
                            setExitAlert(false)

                            navigation.navigate('Login')
                          }}
                        >
                          Sair
                        </Button>
                      </Button.Group>
                    </AlertDialog.Footer>
                  </AlertDialog.Content>
                </AlertDialog>
              </TouchableOpacity>
            </VStack>
          </View>
        </VStack>
      </ScrollView>
    </View>
  )
}
