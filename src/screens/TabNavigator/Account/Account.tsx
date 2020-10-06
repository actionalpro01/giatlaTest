import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ScreenName} from '@constants';
export function Account({navigation}) {
  return (
    <View>
      <Text onPress={() => navigation.navigate(ScreenName.Login)}>Account</Text>
    </View>
  );
}
