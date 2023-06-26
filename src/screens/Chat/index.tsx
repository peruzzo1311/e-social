import React from 'react';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { View, Text, IconButton, Input, Icon } from 'native-base';
import { FlatList } from 'react-native-gesture-handler';
import { TouchableOpacity } from 'react-native';
import Header from '../../components/Header';

const Chat = (props: any) => {
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
            borderRadius={25}
            placeholder={'Procurar Conversas ...'}
            InputRightElement={
              <TouchableOpacity style={{ paddingRight: 4 }}>
                <Icon
                  as={<MaterialIcons name={'mic'} />}
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
