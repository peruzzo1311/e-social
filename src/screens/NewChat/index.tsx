import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Icon, Input, View, Image, Text } from 'native-base';
import React from 'react';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import { getContatos, setConversa } from '../../api/Messages/index';
import Header from '../../components/Header';
import { IChat } from '../../interfaces/IChat';
import { IContato } from '../../interfaces/IContato';
import { IUser } from '../../interfaces/IUser';

const NewChat = (props: any) => {
  const navigation: any = useNavigation();
  const userInfo: IUser = useSelector((state: { user: IUser }) => state.user);

  const [contatos, setContatos] = React.useState<IContato[]>([]);

  const fetchContatos = async (): Promise<void> => {
    let resposta: IContato[] = await getContatos();
    setContatos(resposta);
    console.log(resposta);
  };
  const sendConversa = async (user: string, conversa: IChat) => {
    await setConversa(user, conversa);
    navigation.navigate('Chat', conversa);
  };
  React.useEffect(() => {
    fetchContatos();
  }, []);

  const renderItem = ({ item, index }: { item: IContato; index: number }) => {
    return (
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingTop: 6,
          paddingBottom: 6,
          margin: 2,
          borderBottomWidth: 1,
          borderBottomColor: 'gray.400',
        }}
        onPress={() => {
          const date = new Date();
          let conversa: IChat = {
            userId: item.id,
            chatId: date.getTime(),
            chatWith: item.user,
            image: item.image,
            lastMessage: '',
            unreadMessenges: 0,
          };
          sendConversa(userInfo.username, conversa);
        }}
      >
        <View w={'22%'} alignItems={'center'}>
          <Image
            source={{ uri: item.image }}
            alt="Alternate Text"
            size="md"
            borderRadius={'full'}
          />
        </View>
        <View h={'100%'} w={'60%'} px={4} alignItems={'flex-start'}>
          <Text fontSize={16} fontWeight={'bold'}>
            {item.name}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View flex={1}>
      <Header opcao={3} />
      <View alignContent={'center'} bgColor={'#0171BB'} p={4}>
        <Input
          borderRadius={25}
          placeholder={'Procurar Contatos ...'}
          InputRightElement={
            <TouchableOpacity style={{ paddingRight: 4 }}>
              <Icon
                as={<MaterialIcons name={'search'} />}
                size={5}
                mr="2"
                color="primary"
              />
            </TouchableOpacity>
          }
        />
      </View>
      <FlatList data={contatos} renderItem={renderItem} />
    </View>
  );
};

export default NewChat;
