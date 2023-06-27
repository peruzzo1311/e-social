import { Divider, VStack } from 'native-base'
import React from 'react'

import FeedCard from './Card'
import { ScrollView } from 'react-native-gesture-handler'

export default function Feed() {
  return (
    <ScrollView>
      <VStack flex={1} pt={4} pb={24} space={4}>
        <FeedCard />

        <FeedCard />

        <FeedCard />
      </VStack>
    </ScrollView>
  )
}
