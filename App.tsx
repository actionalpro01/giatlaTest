import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import {Login, RootScreen} from '@screens';
import 'react-native-gesture-handler';
const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{flex: 1}}>
        <RootScreen />
      </SafeAreaView>
    </>
  );
};
export default App;
