import { Image, Text, View, VStack } from 'native-base'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'

import Header from '../../components/Header'
import ProfileInfo from '../../components/ProfileInfo'
import ProfileAppConfig from '../../components/ProfileAppConfig'

const image = require('../../assets/images/Riki.jpg')

export default function Profile() {
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
            <ProfileInfo />
          </View>

          <View shadow={3} bgColor={'#F5F5F5'} p={4}>
            <ProfileAppConfig />
          </View>
        </VStack>
      </ScrollView>
    </View>
  )
}
