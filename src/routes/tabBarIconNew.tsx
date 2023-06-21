import { Center, Image } from 'native-base'

const newIcon = require('../assets/images/new-icon.png')

export default function TabBarIconNew() {
  return (
    <Center
      style={{
        width: 60,
        height: 60,
        backgroundColor: '#F5F5F5',
        borderRadius: 100,
        borderWidth: 6,
        borderColor: '#0171BB',
        marginBottom: 24,
      }}
    >
      <Image source={newIcon} size={8} alt='new-icon' />
    </Center>
    // <Center marginBottom={8}>
    //   <Image source={newIcon} size={60} alt='new-icon' />
    // </Center>
  )
}
