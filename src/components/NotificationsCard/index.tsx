import { Icon, Box, Text, HStack } from 'native-base'
import { TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import INotificationsCardProps from '../../interfaces/INotificationsCardProps'

export default function NotificationsCard({
  user,
  text,
  date,
}: INotificationsCardProps) {
  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 10,
        elevation: 5,
      }}
    >
      <Icon as={Ionicons} name='person-circle' size={'6xl'} color={'#bbb'} />

      <Box pr={12}>
        <Box>
          <Text fontSize={'sm'}>
            <Text fontWeight={700}>{user} </Text>

            {text}
          </Text>
        </Box>

        <Text fontSize={'xs'} fontWeight={700} color={'gray.400'} mt={1}>
          {date}
        </Text>
      </Box>
    </TouchableOpacity>
  )
}
