import { AntDesign, Entypo, Ionicons, MaterialIcons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import {
  Box,
  Button,
  HStack,
  Icon,
  IconButton,
  Image,
  Text,
  View,
} from 'native-base'
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

const logoPrisma = require('../../assets/images/logo-prisma.png')
const theuzin = require('../../assets/images/LilTheuz.png')
export default function Header({ opcao }: { opcao: number }) {
  const navigation: any = useNavigation()

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
            w={150}
          />

          <HStack alignItems={'center'} space={4}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Notifications')}
            >
              <Icon
                as={Ionicons}
                name='ios-notifications'
                size={8}
                color={'white'}
              />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
              <Icon
                as={Ionicons}
                name='person-circle'
                size={8}
                color={'white'}
              />
            </TouchableOpacity>
          </HStack>
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
          {/* <TouchableOpacity onPress={() => setTheme(!theme)}>
            <Icon
              as={Ionicons}
              name={theme ? 'sunny-outline' : 'moon-outline'}
              size={8}
              color={'white'}
            />
          </TouchableOpacity> */}
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
            w={150}
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
          justifyContent={'space-between'}
          alignItems={'center'}
          px={4}
          pr={-1}
        >
          <TouchableOpacity
            onPress={() => {
              navigation.goBack()
            }}
          >
            <AntDesign name='arrowleft' size={28} color={'white'} />
          </TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              width: '60%',
            }}
          >
            <Image
              source={theuzin}
              resizeMode={'cover'}
              alt='Alternate Text'
              size={12}
              borderRadius={'full'}
            />
            <View h={'100%'} px={4}>
              <Text fontSize={16} color={'white'} fontWeight={'bold'}>
                Matheus Soares
              </Text>
            </View>
          </View>
          <IconButton
            colorScheme='indigo'
            variant={'ghost'}
            _icon={{
              as: Entypo,
              name: 'dots-three-vertical',
              color: 'white',
            }}
          />
        </Box>
      )
    case 5:
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
            w={150}
          />
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Chat')
            }}
          >
            <MaterialIcons name='add-comment' size={28} color={'white'} />
          </TouchableOpacity>
        </Box>
      )
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
            w={150}
          />
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Profile')
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
