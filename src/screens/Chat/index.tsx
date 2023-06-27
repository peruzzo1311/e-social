import React, { useEffect } from 'react';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { View, Text, IconButton, Input, Icon } from 'native-base';
import { FlatList } from 'react-native-gesture-handler';
import { TouchableOpacity } from 'react-native';
import Header from '../../components/Header';
import { io, Socket } from 'socket.io-client';
import { IChat } from '../../interfaces/IChat';
import { IMensagem } from '../../interfaces/IMensagem';
import { getMensagens } from '../../api/messages';
import { useSelector } from 'react-redux';
import { IUser } from '../../interfaces/IUser';
import { socket } from '../../../App';

const Chat = (props: any) => {
  const date = new Date();
  const conversa: IChat = props.route.params;
  const [mensageTxt, setMensageTxt] = React.useState<string>('');
  const [mensagens, setMensagens] = React.useState<IMensagem[]>([]);
  const userInfo: IUser = useSelector((state: { user: IUser }) => state.user);
  React.useEffect(() => {
    fetchMensagens();
    socket.on('chat mensage', (data: IMensagem[]) => {
      setMensagens(data);
    });
  }, []);
  const sendMensage = () => {
    let mensagen: IMensagem = {
      message: mensageTxt,
      sendFrom: userInfo.username,
      date: String(date.getTime()),
    };
    let teste: IMensagem[] = [mensagen, ...mensagens];
    setMensagens([mensagen, ...mensagens]);
    socket.emit('chat mensage', teste);
    setMensageTxt('');
  };

  const fetchMensagens = async (): Promise<void> => {
    let resposta: IMensagem[] = await getMensagens(conversa.chatId);
    setMensagens(resposta);
  };

  const renderItem = ({ item, index }: { item: IMensagem; index: number }) => {
    return (
      <View
        w={'100%'}
        alignItems={
          item.sendFrom === userInfo.username ? 'flex-end' : 'flex-start'
        }
      >
        <View
          w={'80%'}
          bgColor={
            item.sendFrom === userInfo.username ? 'primary.300' : 'white'
          }
          p={4}
          m={2}
          shadow={2}
          borderRadius={12}
        >
          <Text color={item.sendFrom === userInfo.username ? 'white' : 'black'}>
            {item.message}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <View flex={1} w={'100%'}>
      <Header opcao={4} nome={conversa.chatWith} img={conversa.image} />

      <FlatList
        inverted={true}
        style={{ flex: 1 }}
        contentContainerStyle={{ justifyContent: 'flex-end' }}
        data={mensagens}
        renderItem={renderItem}
      />

      <View flexDir={'row'} w={'100%'} px={4}>
        <View w={'10%'}>
          <IconButton
            mr={4}
            variant="ghost"
            _icon={{
              as: Ionicons,
              name: 'ios-camera-outline',
              size: 8,
            }}
          />
        </View>
        <View w={'90%'} mb={4}>
          <Input
            value={mensageTxt}
            onChangeText={(text) => setMensageTxt(text)}
            borderRadius={25}
            placeholder={'Procurar Conversas ...'}
            InputRightElement={
              <TouchableOpacity
                style={{ paddingRight: 4 }}
                onPress={() => sendMensage()}
              >
                <Icon
                  as={
                    <MaterialIcons name={mensageTxt == '' ? 'mic' : 'send'} />
                  }
                  size={8}
                  color="primary.500"
                />
              </TouchableOpacity>
            }
          />
        </View>
      </View>
    </View>
  );
};

export default Chat;
