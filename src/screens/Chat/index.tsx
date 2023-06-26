import React, { useEffect } from 'react';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { View, Text, IconButton, Input, Icon } from 'native-base';
import { FlatList } from 'react-native-gesture-handler';
import { TouchableOpacity } from 'react-native';
import Header from '../../components/Header';
import { io } from 'socket.io-client';
const Chat = (props: any) => {
  const socket = io('http://192.168.1.140:8082');

  const [mensageTxt, setMensageTxt] = React.useState<string>('');

  const sendMensage = () => {
    socket.emit('chat mensage', mensageTxt);
    setMensageTxt('');
  };

  React.useEffect(() => {
    socket.on('connect', () => {
      console.log(socket.connected); // true
    });
    socket.on('hello', (mensage: string) => {
      console.log(mensage);
    });
  }, []);

  return (
    <View flex={1} w={'100%'}>
      <Header opcao={4} />
      <View flex={1}>
        <FlatList data={undefined} renderItem={undefined} />
      </View>
      <View flexDir={'row'} w={'100%'} px={4}>
        <View w={'10%'}>
          <IconButton
            mr={4}
            size={'lg'}
            variant="ghost"
            _icon={{
              as: Ionicons,
              name: 'ios-camera-outline',
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
              <TouchableOpacity style={{ paddingRight: 4 }} onPress={() => sendMensage()}>
                <Icon
                  as={<MaterialIcons name={mensageTxt == '' ? 'mic' : 'send'} />}
                  size={5}
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
