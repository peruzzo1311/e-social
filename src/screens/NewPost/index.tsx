import { View, Text, KeyboardAvoidingView } from 'native-base'
import Header from '../../components/Header'
import Post from '../../components/Post'

export default function NewPost() {
  return (
    <View flex={1} bgColor={'#E5E5E5'}>
      <Header opcao={2}></Header>

      <Post></Post>
    </View>
  )
}
