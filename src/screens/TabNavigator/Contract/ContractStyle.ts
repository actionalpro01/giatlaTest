import {Dimensions, StyleSheet} from 'react-native';

const w = Dimensions.get('screen').width; //414
const h = Dimensions.get('screen').height; //736

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 17,
  },
});
