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
import AsyncStorage from '@react-native-async-storage/async-storage'

import { getProfile, getUserInfo, LoginSenior } from '../../api/Login'
import IUserInfo from '../../interfaces/IUserInfo'
import { useAppDispatch } from '../../redux/hooks'
import { setUser } from '../../redux/user/slice'
export var connectedUser: string
const logoPrisma = require('../../assets/images/logo-prisma.png')
const logoPrismaMini = require('../../assets/images/logo-mini.png')
export default function Login({ navigation }: { navigation: any }) {
  const [keyboardIsShown, setKeyboardIsShown] = React.useState(false)
  const [showPassword, setShowPassword] = React.useState(false)
  const [keepLogin, setKeepLogin] = React.useState(false)
  const [isLoading, setIsLoading] = React.useState(false)
  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')
  const dispatch = useAppDispatch()

  useEffect(() => {
    fetchUserData()

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

  const fetchUserData = async () => {
    setIsLoading(true)
    try {
      const keepLogin = await AsyncStorage.getItem('keepLogin')

      if (keepLogin == 'true') {
        setKeepLogin(true)
        const userData = await AsyncStorage.getItem('userData')

        if (userData) {
          const userInfo = JSON.parse(userData)
          setUsername(userInfo.username)
          setPassword(userInfo.password)

          await handleLogin(userInfo.username, userInfo.password)
        }
      }
    } catch (err) {
      console.log(err)
    } finally {
      setIsLoading(false)
    }
  }

  const handleLogin = async (username: string, password: string) => {
    setIsLoading(true)

    try {
      const token: string = await LoginSenior(username, password)

      getUserInfo(username, token).then(async (res) => {
        const profileInfo = await getProfile(token, res.fullName)
        console.log(profileInfo.profile.avatarUrl)
        connectedUser = res.username
        const userInfo: IUserInfo = {
          username: res.username,
          fullName: res.fullName,
          email: res.email,
          login: username,
          password: password,
          tenantDomain: res.tenantDomain,
          tenantName: res.tenantName,
          accessToken: token,
          img:
            profileInfo.profile.avatarUrl == ''
              ? ''
              : profileInfo.profile.avatarUrl,
        }
        if (token) {
          dispatch(setUser(userInfo))
          if (keepLogin === true) {
            AsyncStorage.setItem(
              'userData',
              JSON.stringify({ username, password })
            )
            AsyncStorage.setItem('keepLogin', JSON.stringify(keepLogin))
          }

          navigation.navigate('HomeRoute')
        }
      })
    } catch (err) {
      console.log(err)
    } finally {
      setIsLoading(false)
    }
  }

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
                  autoCapitalize={'none'}
                  autoCorrect={false}
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
                  autoCapitalize={'none'}
                  autoCorrect={false}
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
                onChange={(e) => setKeepLogin(e)}
                _checked={{ bgColor: '#0171BB' }}
                value='keepLogin'
                defaultIsChecked={keepLogin}
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
              onPress={() => handleLogin(username, password)}
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
