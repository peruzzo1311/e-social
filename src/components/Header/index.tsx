import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { Box, Icon, Image, Button, Text } from 'native-base'
import { TouchableOpacity } from 'react-native-gesture-handler'
const logoPrisma = require('../../assets/images/logo-prisma.png')
import { AntDesign } from '@expo/vector-icons'
import { useState } from 'react'

export default function Header({ opcao }: { opcao: number }) {
  const navigation: any = useNavigation()
  const [theme, setTheme] = useState(false)

  switch (opcao) {
    case 0:
      return (
        <Box
          safeAreaTop
          bgColor={'#0171BB'}
          h={16}
          flexDir={'row'}
          justifyContent={'space-between'}
          alignItems={'center'}
          px={4}
        >
          <Image
            source={logoPrisma}
            alt='Logo Prisma'
            resizeMode='cover'
            h={16}
            w={175}
          />
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Perfil')
            }}
          >
            <Icon
              as={Ionicons}
              name='person-circle'
              size={12}
              color={'white'}
            />
          </TouchableOpacity>
        </Box>
      )
      break

    case 1:
      return (
        <Box
          safeAreaTop
          bgColor={'#0171BB'}
          h={16}
          flexDir={'row'}
          justifyContent={'space-between'}
          alignItems={'center'}
          px={4}
        >
          <TouchableOpacity
            onPress={() => {
              navigation.goBack()
            }}
          >
            <AntDesign name='arrowleft' size={28} color={'white'} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setTheme(!theme)}>
            <Icon
              as={Ionicons}
              name={theme ? 'sunny-outline' : 'moon-outline'}
              size={8}
              color={'white'}
            />
          </TouchableOpacity>
        </Box>
      )
      break

    case 2:
      return (
        <Box
          safeAreaTop
          bgColor={'#0171BB'}
          h={16}
          flexDir={'row'}
          justifyContent={'space-between'}
          alignItems={'center'}
          px={4}
        >
          <TouchableOpacity
            onPress={() => {
              navigation.goBack()
            }}
          >
            <AntDesign name='close' size={36} color={'white'} />
          </TouchableOpacity>

          <Button bgColor={'white'} w={'30%'}>
            <Text fontWeight={'bold'} color={'#0171BB'}>
              Publicar
            </Text>
          </Button>
        </Box>
      )
      break

    case 3:
      return (
        <Box
          safeAreaTop
          bgColor={'#0171BB'}
          h={16}
          flexDir={'row'}
          justifyContent={'space-between'}
          alignItems={'center'}
          px={4}
        >
          <TouchableOpacity
            onPress={() => {
              navigation.goBack()
            }}
          >
            <AntDesign name='arrowleft' size={28} color={'white'} />
          </TouchableOpacity>

          <Image
            source={logoPrisma}
            alt='Logo Prisma'
            resizeMode='cover'
            h={16}
            w={175}
          />
        </Box>
      )
      break

    case 4:
      return (
        <Box
          safeAreaTop
          bgColor={'#0171BB'}
          h={16}
          flexDir={'row'}
          alignItems={'center'}
          px={4}
        >
          <TouchableOpacity
            onPress={() => {
              navigation.goBack()
            }}
          >
            <AntDesign name='arrowleft' size={28} color={'white'} />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Perfil')
            }}
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: 8,
              marginLeft: 24,
            }}
          >
            <Icon
              as={Ionicons}
              name='person-circle'
              size={12}
              color={'white'}
            />

            <Text color={'#F5F5F5'} fontWeight={700} fontSize={'xl'}>
              Matheus Soares
            </Text>
          </TouchableOpacity>
        </Box>
      )
      break

    default:
      return (
        <Box
          safeAreaTop
          bgColor={'#0171BB'}
          h={16}
          flexDir={'row'}
          justifyContent={'space-between'}
          alignItems={'center'}
          px={4}
        >
          <Image
            source={logoPrisma}
            alt='Logo Prisma'
            resizeMode='cover'
            h={16}
            w={175}
          />
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Perfil')
            }}
          >
            <Icon
              as={Ionicons}
              name='person-circle'
              size={12}
              color={'white'}
            />
          </TouchableOpacity>
        </Box>
      )
      break
  }
}
