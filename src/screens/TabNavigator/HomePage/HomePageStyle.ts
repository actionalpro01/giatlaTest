import {Dimensions, StyleSheet} from 'react-native';

const w = Dimensions.get('screen').width; //414
const h = Dimensions.get('screen').height; //736
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FBFA',
  },
  titleDiv: {
    fontSize: 16,
    margin: 18,
  },
  action: {
    alignItems: 'center',
  },
  count: {
    marginVertical: 10,
  },
  iconLeft: {
    backgroundColor: '#13D99C',
    color: '#fff',
    paddingHorizontal: 48,
    paddingVertical: 24,
  },
  iconRight: {
    backgroundColor: '#FF668A',
    color: '#fff',
    paddingHorizontal: 54,
    paddingVertical: 24,
  },
  image: {
    width: 50,
    height: 50,
  },
  item: {
    flexDirection: 'row',
  },
  headerItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  delivery: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  rightItem: {
    flex: 1,
  },
  listItem: {
    alignSelf: 'center',
    width: w * 0.8,
    backgroundColor: '#fff',
    shadowColor: '#000000',
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1,
    },
  },
});
