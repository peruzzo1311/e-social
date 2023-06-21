import { Divider, VStack } from 'native-base'
import React from 'react'

import FeedCard from './Card'

export default function Feed() {
  return (
    <VStack flex={1} py={4} space={2}>
      <FeedCard />
    </VStack>
  )
}
