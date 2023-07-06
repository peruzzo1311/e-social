import { View } from 'native-base';
import React from 'react';
import { io, Socket } from 'socket.io-client';
import Feed from '../../components/Feed';
import Header from '../../components/Header';
import { useAppSelector } from '../../redux/hooks';
import { DefaultEventsMap } from '@socket.io/component-emitter';
import { connectedUser } from '../Login';

export var socket: Socket<DefaultEventsMap, DefaultEventsMap>;

export default function Home() {
  const user = useAppSelector((state) => state.user);
  React.useEffect(() => {
    console.log(user);
    socket = io('http://192.168.1.140:8082', {
      auth: { token: connectedUser },
    });
  }, []);
  return (
    <View flex={1} bgColor={'#E5E5E5'}>
      <Header opcao={0} />

      <Feed />
    </View>
  );
}
