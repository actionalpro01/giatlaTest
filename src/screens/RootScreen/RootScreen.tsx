import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {ScreenName} from '@constants';
import * as screen from '@screens';
const Stack = createStackNavigator();
export function RootScreen() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name={ScreenName.Login} component={screen.Login} />
        <Stack.Screen
          name={ScreenName.TabNavigator}
          component={screen.TabScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
