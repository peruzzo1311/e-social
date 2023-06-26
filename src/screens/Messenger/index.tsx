import { View, Text, Input, Icon, CircleIcon, Image } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Header from '../../components/Header';
import { useNavigation } from '@react-navigation/native';
const theuzin = require('../../assets/images/LilTheuz.png');
export default function Messenger() {
  const navigation:any = useNavigation();
  return (
    <View flex={1}>
      <Header opcao={3} />
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
                color="primary"
              />
            </TouchableOpacity>
          }
        />
      </View>

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
        onPress={() => navigation.navigate('Chat')}
      >
        <Image
          source={theuzin}
          flex={1}
          resizeMode={'cover'}
          alt="Alternate Text"
          size="sm"
          borderRadius={'full'}
        />
        <View h={'100%'} w={'60%'} px={4} alignItems={'flex-start'}>
          <Text fontSize={16} fontWeight={'bold'}>
            Matheus Soares
          </Text>
          <Text>Bora man ?</Text>
        </View>
        <View w={'22%'} alignItems={'flex-end'} h={'100%'}>
          <View alignItems={'center'}>
            <Text fontWeight={'bold'} color={'primary.400'}>
              16:20
            </Text>
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
                1
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
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
      >
        <Image
          source={theuzin}
          flex={1}
          resizeMode={'cover'}
          alt="Alternate Text"
          size="sm"
          borderRadius={'full'}
        />
        <View h={'100%'} w={'60%'} px={4} alignItems={'flex-start'}>
          <Text fontSize={16} fontWeight={'bold'}>
            Matheus Soares
          </Text>
          <Text>Bora man ?</Text>
        </View>
        <View w={'22%'} alignItems={'flex-end'} h={'100%'}>
          <View alignItems={'center'}>
            <Text fontWeight={'bold'} color={'primary.400'}>
              16:20
            </Text>
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
                1
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}
