import { Text, Icon, View, HStack } from 'native-base'
import { Ionicons } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function FeedCard() {
  return (
    <View shadow={1} w={'100%'} bgColor={'#F5F5F5'} borderRadius={8}>
      <View
        p={2}
        flexDir={'row'}
        alignItems={'center'}
        borderBottomWidth={1}
        borderBottomColor={'gray.200'}
      >
        <TouchableOpacity>
          <Icon as={Ionicons} name='person-circle' size={16} color={'#bbb'} />
        </TouchableOpacity>

        <View mt={-2}>
          <TouchableOpacity>
            <Text fontSize={'lg'} fontWeight={700} fontFamily={'body'}>
              Matheus Soares
            </Text>
          </TouchableOpacity>

          <Text fontSize={'sm'} fontWeight={600} color={'gray.400'}>
            21 de julho de 2023
          </Text>
        </View>
      </View>

      <View p={4}>
        <Text fontSize={'md'} fontWeight={400} fontFamily={'body'}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptatibus, quibusdam, quia, quod voluptate voluptatem quos
          voluptatum quas doloribus quidem fugiat. Quisquam voluptatibus,
          quibusdam, quia, quod voluptate voluptatem quos voluptatum quas
          doloribus quidem fugiat.
        </Text>
      </View>

      <View
        borderTopWidth={1}
        borderTopColor={'gray.200'}
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
          paddingVertical: 12,
        }}
      >
        <TouchableOpacity>
          <HStack alignItems={'center'} space={1}>
            <Icon as={Ionicons} name='heart-outline' size={6} />

            <Text fontSize={'sm'} fontWeight={600}>
              Curtir
            </Text>
          </HStack>
        </TouchableOpacity>

        <TouchableOpacity>
          <HStack justifyContent={'center'} alignItems={'center'} space={1}>
            <Icon as={Ionicons} name='chatbubble-outline' size={6} />

            <Text fontSize={'sm'} fontWeight={600}>
              Comentar
            </Text>
          </HStack>
        </TouchableOpacity>

        <TouchableOpacity>
          <HStack alignItems={'center'} space={1}>
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
