import { Text, Icon, View, HStack, Image, Pressable } from 'native-base'
import { Ionicons, Feather } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native-gesture-handler'
import React, { useState } from 'react'
const likedIcon = require('../../../assets/images/likedIcon.png')
import { Menu } from 'native-base'

export default function FeedCard() {
  const [liked, setLiked] = useState(false)

  return (
    <View shadow={2} w={'100%'} bgColor={'#F5F5F5'} borderRadius={8}>
      <View
        p={2}
        pb={1}
        flexDir={'row'}
        alignItems={'center'}
        borderBottomWidth={1}
        borderBottomColor={'gray.200'}
      >
        <TouchableOpacity>
          <Icon
            as={Ionicons}
            name='person-circle'
            size={'6xl'}
            color={'#bbb'}
          />
        </TouchableOpacity>

        <View mt={-2}>
          <TouchableOpacity>
            <Text fontSize={'lg'} fontWeight={700}>
              Matheus Soares
            </Text>
          </TouchableOpacity>

          <Text fontSize={'sm'} fontWeight={600} color={'gray.400'}>
            21 de julho de 2023
          </Text>
        </View>

        <Menu
          w='200'
          placement='left'
          trigger={(triggerProps) => {
            return (
              <Pressable
                ml={'auto'}
                mr={2}
                accessibilityLabel='Editar ou excluir publicação'
                {...triggerProps}
              >
                <Icon as={Ionicons} name='ellipsis-vertical' size={6} />
              </Pressable>
            )
          }}
        >
          <Menu.Item>
            <Icon as={Feather} name='edit' size={6} />

            <Text fontSize={'sm'} fontWeight={600}>
              Editar
            </Text>
          </Menu.Item>

          <Menu.Item>
            <Icon as={Feather} name='trash-2' size={6} />

            <Text fontSize={'sm'} fontWeight={600}>
              Excluir
            </Text>
          </Menu.Item>
        </Menu>
      </View>

      <View px={4} pt={2}>
        <Text fontSize={'md'}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptatibus, quibusdam, quia, quod voluptate voluptatem quos
          voluptatum quas doloribus quidem fugiat. Quisquam voluptatibus,
          quibusdam, quia, quod voluptate voluptatem quos voluptatum quas
          doloribus quidem fugiat.
        </Text>
      </View>

      {liked && (
        <View p={4}>
          <TouchableOpacity
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: 8,
            }}
          >
            <View w={8} h={8}>
              <Image
                source={likedIcon}
                resizeMode='contain'
                w={'100%'}
                h={'100%'}
                alt='Icone coração'
              />
            </View>

            <Text fontSize={'sm'} fontWeight={700} color={'gray.400'}>
              1
            </Text>
          </TouchableOpacity>
        </View>
      )}

      <View
        borderTopWidth={1}
        borderTopColor={'gray.200'}
        mt={2}
        flexDir={'row'}
        justifyContent={'space-between'}
      >
        <TouchableOpacity
          onPress={() => setLiked(!liked)}
          style={{ padding: 12 }}
        >
          <HStack alignItems={'center'} space={1}>
            <Icon
              as={Ionicons}
              name={liked ? 'heart' : 'heart-outline'}
              size={6}
              color={liked ? 'red.500' : 'black'}
            />

            <Text
              fontSize={'sm'}
              fontWeight={600}
              color={liked ? 'red.500' : 'black'}
            >
              Curtir
            </Text>
          </HStack>
        </TouchableOpacity>

        <TouchableOpacity style={{ padding: 12 }}>
          <HStack justifyContent={'center'} alignItems={'center'} space={1}>
            <Icon as={Ionicons} name='chatbubble-outline' size={6} />

            <Text fontSize={'sm'} fontWeight={600}>
              Comentar
            </Text>
          </HStack>
        </TouchableOpacity>

        <TouchableOpacity style={{ padding: 12 }}>
          <HStack justifyContent={'center'} alignItems={'center'} space={1}>
            <Icon as={Ionicons} name='share-social-outline' size={6} />

            <Text fontSize={'sm'} fontWeight={600}>
              Compartilhar
            </Text>
          </HStack>
        </TouchableOpacity>
      </View>
    </View>
  )
}
