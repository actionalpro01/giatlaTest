import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export function ListProduct({navigation}: any) {
  return (
    <View>
      <Text onPress={() => navigation.goBack()}>Back</Text>
      <Text>List</Text>
    </View>
  );
}
