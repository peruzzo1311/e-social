import { View } from 'native-base';
import React from 'react';

import Feed from '../../components/Feed';
import Header from '../../components/Header';
import { useAppSelector } from '../../redux/hooks';

export default function Home() {
  const user = useAppSelector((state) => state.user);
  React.useEffect(() => {
    console.log(user);
  }, []);
  return (
    <View flex={1} bgColor={'#E5E5E5'}>
      <Header opcao={0} />

      <Feed />
    </View>
  );
}
