import { Ionicons } from '@expo/vector-icons'
import {
  Button,
  Center,
  Checkbox,
  Icon,
  Image,
  Input,
  Pressable,
  Text,
  View,
  VStack,
} from 'native-base'
import React, { useEffect } from 'react'
import { Keyboard } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import { getUserInfo, LoginSenior } from '../../api/Login'
import IUserInfo from '../../interfaces/IUserInfo'
import { useAppDispatch } from '../../redux/hooks'
import { setUser } from '../../redux/user/slice'

const logoPrisma = require('../../assets/images/logo-prisma.png')
const logoPrismaMini = require('../../assets/images/logo-mini.png')
export default function Login({ navigation }: { navigation: any }) {
  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [keyboardIsShown, setKeyboardIsShown] = React.useState(false)
  const [showPassword, setShowPassword] = React.useState(false)
  const [isLoading, setIsLoading] = React.useState(false)
  const dispatch = useAppDispatch()

  const handleLogin = async () => {
    setIsLoading(true)

    try {
      const token: string = await LoginSenior(username, password)

      getUserInfo(username, token).then((res) => {
        const userInfo: IUserInfo = {
          username: res.username,
          fullName: res.fullName,
          email: res.email,
          password: password,
          tenantDomain: res.tenantDomain,
          tenantName: res.tenantName,
          accessToken: token,
        }

        dispatch(setUser(userInfo))
      })

      if (token) {
        navigation.navigate('HomeRoute')
      }
    } catch (err) {
      console.log(err)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardIsShown(true)
    })
    Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardIsShown(false)
    })

    return () => {
      Keyboard.removeAllListeners('keyboardDidShow')
      Keyboard.removeAllListeners('keyboardDidHide')
    }
  }, [])

  return (
    <Pressable flex={1} bgColor={'#0171BB'} onPress={() => Keyboard.dismiss()}>
      {!keyboardIsShown && (
        <Center py={'10%'}>
          <Image
            source={logoPrisma}
            alt='Logo Prisma'
            resizeMode='cover'
            h={100}
            w={328}
          />
        </Center>
      )}

      <View
        mx={'auto'}
        flex={1}
        bgColor={'#f5f5f5'}
        borderRadius={12}
        w={'100%'}
        px={4}
        py={keyboardIsShown ? 0 : 8}
      >
        <KeyboardAwareScrollView>
          <VStack flex={1} space={8}>
            <VStack space={4}>
              <View>
                <Text fontSize={'md'} fontWeight={700} mb={2}>
                  Usuário
                </Text>

                <Input
                  onChangeText={(text) => setUsername(text)}
                  autoComplete='email'
                  value={username}
                  variant={'outline'}
                  fontSize={'md'}
                  fontWeight={600}
                  borderRadius={8}
                  p={3}
                  placeholder='usuario@tenant.com'
                  InputLeftElement={
                    <Icon
                      as={<Ionicons name='person' />}
                      size={6}
                      ml='4'
                      color='muted.400'
                    />
                  }
                />
              </View>

              <View>
                <Text fontSize={'md'} fontWeight={700} mb={2}>
                  Senha
                </Text>

                <Input
                  onChangeText={(text) => setPassword(text)}
                  autoComplete='password'
                  variant={'outline'}
                  fontSize={'md'}
                  fontWeight={600}
                  borderRadius={8}
                  placeholder='***********'
                  type={showPassword ? 'text' : 'password'}
                  p={3}
                  InputRightElement={
                    <Icon
                      as={<Ionicons name={showPassword ? 'eye' : 'eye-off'} />}
                      onPress={() => setShowPassword(!showPassword)}
                      size={8}
                      mr={4}
                      color='muted.400'
                    />
                  }
                  InputLeftElement={
                    <Icon
                      as={<Ionicons name='lock-closed' />}
                      size={6}
                      ml='4'
                      color='muted.400'
                    />
                  }
                />
              </View>
            </VStack>

            <View ml={1}>
              <Checkbox
                _checked={{ bgColor: '#0171BB' }}
                value={'remember'}
                children={'Lembrar de mim'}
                size={'md'}
              />
            </View>

            <Button
              _text={{
                color: '#F5F5F5',
                fontWeight: 700,
                fontSize: 'lg',
              }}
              isLoading={isLoading}
              isLoadingText={'Carregando...'}
              bgColor={'#0171BB'}
              borderRadius={8}
              onPress={handleLogin}
            >
              LOGIN
            </Button>
          </VStack>
        </KeyboardAwareScrollView>

        {!keyboardIsShown && (
          <View flexDir={'row'} justifyContent={'center'}>
            <Text>Desenvolvido por</Text>

            <Image
              source={logoPrismaMini}
              alt='Prisma'
              w={82}
              h={26}
              resizeMode='cover'
            />
          </View>
        )}
      </View>
    </Pressable>
  )
}
