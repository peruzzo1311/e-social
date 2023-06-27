import { Icon, VStack, View, Text } from 'native-base'
import Header from '../../components/Header'
import { MaterialCommunityIcons } from '@expo/vector-icons'

export default function Notifications() {
  return (
    <View flex={1} bgColor={'#E5E5E5'}>
      <Header opcao={1} />

      <VStack
        flex={1}
        w={'100%'}
        justifyContent={'center'}
        alignItems={'center'}
        space={4}
      >
        <Icon
          as={MaterialCommunityIcons}
          name='bell-sleep'
          size={32}
          color={'gray.500'}
        />

        <Text fontWeight={700} fontSize={'xl'}>
          Sem notificações!
        </Text>
      </VStack>
    </View>
  )
}
