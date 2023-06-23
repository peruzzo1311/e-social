import { View, Text, Input, Icon } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Header from '../../components/Header';

export default function Messenger() {
  return (
    <View flex={1}>
      <Header />
      <View alignContent={'center'} bgColor={'#0171BB'} p={4}>
        <Input
          borderRadius={25}
          placeholder={'Procurar Conversas ...'}
          InputRightElement={
            <TouchableOpacity style={{ paddingRight: 4 }}>
              <Icon
                as={<MaterialIcons name={'search'} />}
                size={5}
                mr="2"
                color="black"
              />
            </TouchableOpacity>
          }
        />
      </View>
      <Text>Messenger</Text>
    </View>
  );
}
