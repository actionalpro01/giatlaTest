import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export function Feedback({navigation}: any) {
  return (
    <View>
      <Text onPress={() => navigation.goBack()}>Back</Text>
      <Text>FeedBack</Text>
    </View>
  );
}
