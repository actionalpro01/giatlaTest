import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export function Report({navigation}: any) {
  return (
    <View>
      <Text
        onPress={() => {
          navigation.goBack();
        }}>
        Back
      </Text>
      <Text>Report</Text>
    </View>
  );
}
