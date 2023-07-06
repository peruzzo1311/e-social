import { View, VStack } from 'native-base'
import React from 'react'

import Header from '../../components/Header'
import NotificationsCard from '../../components/NotificationsCard'

export default function Notifications() {
  return (
    <View flex={1} bgColor={'#E5E5E5'}>
      <Header opcao={1} />

      {/* <VStack
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
      </VStack> */}
      <VStack p={4} space={4}>
        <NotificationsCard
          text={'enviou uma notificação para você'}
          user={'Matheus Soares'}
          date={'Segunda às 10:35AM'}
        />

        <NotificationsCard
          text={'enviou uma notificação para você'}
          user={'Henrique Nicolli'}
          date={'Segunda às 10:35AM'}
        />

        <NotificationsCard
          text={'enviou uma notificação para você'}
          user={'Leozinho Damassa'}
          date={'Segunda às 10:35AM'}
        />
      </VStack>
    </View>
  )
}
