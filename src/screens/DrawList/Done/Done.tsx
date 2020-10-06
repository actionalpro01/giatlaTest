import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export function Done({navigation}: any) {
  return (
    <View>
      <Text
        onPress={() => {
          navigation.goBack();
        }}>
        Back
      </Text>
      <Text>Done</Text>
    </View>
  );
}
