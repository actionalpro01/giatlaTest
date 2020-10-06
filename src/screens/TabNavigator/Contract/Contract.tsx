import React, {useEffect, useState} from 'react';
import {Text, View, FlatList, ActivityIndicator} from 'react-native';
import axios from 'axios';
import {styles} from './ContractStyle';
import {ListItem, Avatar} from 'react-native-elements';

export function Contract() {
  const [data, setData] = useState([]);
  const [value, setValue] = useState(true);
  const getData = () => {
    axios({
      url:
        'https://5f7293e66833480016a9bcb4.mockapi.io/api/bookiess/notification',
    }).then(function (response) {
      setValue(false);
      setData(response.data);
    });
  };
  useEffect(() => getData(), []);
  // console.log('wowowwo');
  // console.log(data);
  const {container, text} = styles;
  const Item = ({item}) => {
    return (
      <ListItem bottomDivider>
        <Avatar source={{uri: item.avatar_url}} />
        <ListItem.Content>
          <ListItem.Title style={text}>{item.text}</ListItem.Title>
          <ListItem.Subtitle>{item.date}</ListItem.Subtitle>
        </ListItem.Content>
        {/* <ListItem.Chevron /> */}
      </ListItem>
    );
  };
  return (
    <View style={container}>
      {value ? (
        <ActivityIndicator size="small" color="#0000ff" />
      ) : (
        <FlatList
          data={data}
          keyExtractor={(item: any) => item.id}
          renderItem={(el: any) => Item(el)}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
}
