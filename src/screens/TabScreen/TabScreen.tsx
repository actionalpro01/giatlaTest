import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Account, Contract, HomePage, Pay, DrawScreen} from '@screens';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ScreenName} from '@constants';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';

const Tab = createBottomTabNavigator();
export function TabScreen() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#13D99C',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen
        name={ScreenName.DrawScreen}
        component={DrawScreen}
        options={{
          tabBarLabel: 'Trang chủ',
          tabBarIcon: ({color, size}) => (
            <MaterialIcon name="house" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name={ScreenName.Contract}
        component={Contract}
        options={{
          tabBarLabel: 'Hợp đồng',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="newspaper" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name={ScreenName.Pay}
        component={Pay}
        options={{
          tabBarLabel: 'Thanh toán',
          tabBarIcon: ({color, size}) => (
            <MaterialIcon name="payment" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name={ScreenName.Account}
        component={Account}
        options={{
          tabBarLabel: 'Tài khoản',
          tabBarIcon: ({color, size}) => (
            <Entypo name="heart" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
