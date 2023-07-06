import { View, Text, Input, Icon, CircleIcon, Image } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import Header from '../../components/Header';
import { useNavigation } from '@react-navigation/native';
import { getConversas } from '../../api/Messages/index';
import { IChat } from '../../interfaces/IChat';
import { IUser } from '../../interfaces/IUser';
import { useSelector } from 'react-redux';
import { socket } from '../Home/index';
import IUserInfo from '../../interfaces/IUserInfo';

export default function Messenger() {
  const navigation: any = useNavigation()

  const [conversas, setConversas] = React.useState<IChat[]>([]);
  const userInfo: IUserInfo = useSelector((state: { user: IUserInfo }) => state.user);
  const [again, setAgain] = React.useState<number>(0);

  const fetchConversas = async (): Promise<void> => {
    let resposta: IChat[] = await getConversas(userInfo.username);
    setConversas(resposta);
  };

  React.useEffect(() => {
    console.log(userInfo);
    fetchConversas();
    socket.on('atualizar conversas', (chatId: number) => {
      fetchConversas();
    });
  }, [again]);

  const renderItem = ({ item, index }: { item: IChat; index: number }) => {
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
          socket.emit('read mensage', {user: userInfo.username, chatId: item.chatId});
          setAgain(again + 1);
          navigation.navigate('Chat', item);
        }}
      >
        <View w={'22%'} alignItems={'center'}>
          <Image
            source={{ uri: item.image }}
            alt='Alternate Text'
            size='md'
            borderRadius={'full'}
          />
        </View>
        <View h={'100%'} w={'60%'} px={4} alignItems={'flex-start'}>
          <Text fontSize={16} fontWeight={'bold'}>
            {item.chatWith}
          </Text>
          <Text>{item.lastMessage}</Text>
        </View>
        <View w={'17%'} alignItems={'flex-end'} h={'100%'}>
          <View alignItems={'center'}>
            <Text fontWeight={'bold'} color={'primary.400'}>
              16:20
            </Text>
            {item.unreadMessenges === 0 ? (
              ''
            ) : (
              <View
                position={'relative'}
                alignItems={'center'}
                mt={2}
                justifyContent={'center'}
              >
                <CircleIcon color={'primary.500'} size={'lg'} />
                <Text
                  color={'white'}
                  fontWeight={'bold'}
                  mt={3}
                  position={'absolute'}
                >
                  {item.unreadMessenges === 0 ? '' : item.unreadMessenges}
                </Text>
              </View>
            )}
          </View>
        </View>
      </TouchableOpacity>
    )
  }

  return (
    <View flex={1}>
      <Header opcao={5} />
      <View alignContent={'center'} bgColor={'#0171BB'} p={4}>
        <Input
          borderRadius={25}
          placeholder={'Procurar Conversas ...'}
          InputRightElement={
            <TouchableOpacity style={{ paddingRight: 4 }}>
              <Icon
                as={<MaterialIcons name={'search'} />}
                size={5}
                mr='2'
                color='primary'
              />
            </TouchableOpacity>
          }
        />
      </View>
      <FlatList data={conversas} renderItem={renderItem} />
    </View>
  )
}
