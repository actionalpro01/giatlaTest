import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {styles} from './AcceptStyle';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/Feather';
const {container} = styles;
export function Accept({navigation}: any) {
  const [un, setUn] = useState('uk');
  return (
    <View style={container}>
      <Text onPress={() => navigation.goBack()}>Back</Text>
      <Text>Accept</Text>
      <DropDownPicker
        items={[
          {
            label: 'UK',
            value: 'uk',
            icon: () => <Icon name="flag" size={18} color="#900" />,
          },
          {
            label: 'France',
            value: 'france',
            icon: () => <Icon name="flag" size={18} color="#900" />,
          },
        ]}
        defaultValue={un}
        containerStyle={{height: 40}}
        style={{backgroundColor: '#fafafa'}}
        itemStyle={{
          justifyContent: 'flex-start',
        }}
        dropDownStyle={{backgroundColor: '#fafafa'}}
        onChangeItem={(item) => setUn(item.value)}
      />
    </View>
  );
}
