import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {HeaderComponent} from '@components';
import {styles} from './HomePageStyle';
import Foundation from 'react-native-vector-icons/Foundation';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {ListItem, Avatar} from 'react-native-elements';

export function HomePage({navigation, route}: any) {
  const {
    container,
    item,
    delivery,
    image,
    headerItem,
    rightItem,
    action,
    iconLeft,
    iconRight,
    titleDiv,
    listItem,
    count,
  } = styles;

  const Item = () => {
    return (
      <View style={item}>
        <Image
          style={image}
          source={{
            uri:
              'https://lh3.googleusercontent.com/proxy/4kv6j9jIJHrdO8ySYiZArIBWSHMXmorHtFOUm2-tJvY0vvQb44gMMkDInYWO0b_4sWKdw7GNJLuo07ZeL4jpc5Lley8Gv-0o0zLht0Ke2cjQDRYPDfZDSbbwrzVujmqOIG38rhrG3zwHeKPk_GVosgc',
          }}
        />
        <View style={rightItem}>
          <View style={headerItem}>
            <Text>Bệnh viện Bạch mai</Text>

            <Text>15/06/2020</Text>
          </View>
          <View>
            <Text>
              Chỉ trong vòng 15 phút đã đến, chúng tôi rất hài lòng về dịch vụ
              này
            </Text>
          </View>
        </View>
      </View>
    );
  };
  return (
    <View style={container}>
      <HeaderComponent navigation={navigation} />
      <View>
        <Text style={titleDiv}>HOẠT ĐỘNG TRONG NGÀY</Text>
      </View>
      <View style={delivery}>
        <View style={action}>
          <Foundation name="page-search" size={40} style={iconLeft} />
          <Text style={count}>15 đơn cần giao</Text>
        </View>

        <View style={action}>
          <Fontisto name="shopping-pos-machine" size={40} style={iconRight} />
          <Text style={count}>18 đơn cần nhận</Text>
        </View>
      </View>
      <View>
        <Text style={titleDiv}>PHẢN HỒI CỦA BỆNH VIỆN</Text>
      </View>
      <View style={listItem}>
        <Item />
        <Item />
        <Item />
      </View>
    </View>
  );
}
