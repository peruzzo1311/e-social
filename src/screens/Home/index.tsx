import { View } from 'native-base'
import Header from '../../components/Header'
import Feed from '../../components/Feed'

export default function Home() {
  return (
    <View flex={1} bgColor={'#E5E5E5'}>
      <Header />

      <Feed />
    </View>
  )
}
