import { Box, Icon, Image, View } from 'native-base'
const logoPrisma = require('../../assets/logo-prisma.png')
import { Ionicons } from '@expo/vector-icons'

export default function Header() {
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

      <Icon as={Ionicons} name='person-circle' size={12} color={'white'} />
    </Box>
  )
}
