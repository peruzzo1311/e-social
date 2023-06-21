import { Text, Icon, View } from 'native-base'
import { Ionicons } from '@expo/vector-icons'

export default function FeedCard() {
  return (
    <View w={'100%'} h={'35%'} bgColor={'#F5F5F5'} borderRadius={6}>
      <View
        p={2}
        flexDir={'row'}
        alignItems={'center'}
        borderBottomWidth={1}
        borderBottomColor={'gray.200'}
      >
        <Icon as={Ionicons} name='person-circle' size={16} color={'#bbb'} />

        <View mt={-2}>
          <Text fontSize={'lg'} fontWeight={700} fontFamily={'body'}>
            Matheus Soares
          </Text>

          <Text fontSize={'sm'} fontWeight={600} color={'gray.400'}>
            21 de julho de 2023
          </Text>
        </View>
      </View>
    </View>
  )
}
