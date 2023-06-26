import { View, Text } from 'native-base'
import Header from '../../components/Header'
import PerfilBody from '../../components/PerfilBody'

export default function Perfil() {
  return (
    <View flex={1} bgColor={'#E5E5E5'}>
      <Header opcao={1}></Header>

      <PerfilBody></PerfilBody>
    </View>
  )
}