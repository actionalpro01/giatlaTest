import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {ScreenName} from '@constants';
import {
  HomePage,
  Accept,
  Done,
  Feedback,
  ListProduct,
  Report,
  Login,
} from '@screens';
import {createDrawerNavigator} from '@react-navigation/drawer';
export function DrawScreen({navigation, route}: any) {
  if (route.state && route.state.index > 0) {
    navigation.setOptions({tabBarVisible: false});
  } else {
    navigation.setOptions({tabBarVisible: true});
  }
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator initialRouteName={ScreenName.HomePage}>
      <Drawer.Screen
        name={ScreenName.HomePage}
        component={HomePage}
        options={{drawerLabel: 'Trang chủ'}}
      />
      <Drawer.Screen
        name={ScreenName.Accept}
        component={Accept}
        options={{drawerLabel: 'Đơn hàng cần xác nhận'}}
      />
      <Drawer.Screen
        name={ScreenName.Done}
        component={Done}
        options={{drawerLabel: 'Đơn hàng đã thực hiện'}}
      />
      <Drawer.Screen
        name={ScreenName.FeedBack}
        component={Feedback}
        options={{drawerLabel: 'Phản hồi'}}
      />
      <Drawer.Screen
        name={ScreenName.Report}
        component={Report}
        options={{drawerLabel: 'Báo cáo'}}
      />
      <Drawer.Screen
        name={ScreenName.ListProduct}
        component={ListProduct}
        options={{drawerLabel: 'Danh sách đồ giặt'}}
      />
    </Drawer.Navigator>
  );
}
