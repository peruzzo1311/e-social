import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useRoute } from '@react-navigation/native';
import React from 'react';
import { TouchableOpacity } from 'react-native';

import Home from '../screens/Home';
import Messenger from '../screens/Messenger';
import NewPost from '../screens/NewPost';
import TabBarIconNew from './tabBarIconNew';

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  const [isVisible, setIsVisible] = React.useState(true);

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        lazy: true,
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarActiveTintColor: '#F5F5F5',
        tabBarInactiveTintColor: '#F5F5F5',
        tabBarShowLabel: false,
        tabBarStyle: {
          display: isVisible ? 'flex' : 'none',
          position: 'absolute',
          bottom: 16,
          right: 16,
          left: 16,
          borderRadius: 12,
          backgroundColor: '#0171BB',
          height: 60,
          elevation: 3,
        },
        tabBarButton: (props) => <TouchableOpacity {...props} />,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? 'home' : 'home-outline'}
              size={32}
              color={color}
              style={{ marginLeft: 16 }}
            />
          ),
        }}
      />

      <Tab.Screen
        name="NewPost"
        component={NewPost}
        options={{
          tabBarIcon: () => <TabBarIconNew />,
        }}
      />

      <Tab.Screen
        name="Messenger"
        component={Messenger}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? 'chatbubbles' : 'chatbubbles-outline'}
              size={32}
              color={color}
              style={{ marginRight: 16 }}
            />
          ),
          tabBarStyle: {
            display: 'none',
          },
        }}
      />
    </Tab.Navigator>
  );
}
