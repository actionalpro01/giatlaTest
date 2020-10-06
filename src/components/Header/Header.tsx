import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {styles} from './HeaderStyle';
import {Header} from 'react-native-elements';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {ScreenName} from '@constants';
export function HeaderComponent({navigation}: any) {
  const bell = () => {
    return (
      <TouchableOpacity onPress={() => console.log(log)}>
        <Entypo name="bell" size={20} color="#fff" />
      </TouchableOpacity>
    );
  };
  const menu = () => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.openDrawer();
        }}>
        <AntDesign name="menuunfold" size={20} color="#fff" />
      </TouchableOpacity>
    );
  };
  const log = () => {
    console.log('aaa');
  };
  return (
    <>
      <Header leftComponent={{...menu()}} rightComponent={{...bell()}} />
    </>
  );
}
