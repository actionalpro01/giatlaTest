import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';

const w = Dimensions.get('screen').width;
const h = Dimensions.get('screen').height;
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: w * 0.35,
  },
  slogan: {
    color: '#fff',
    fontSize: 15,
  },
  loginTitle: {
    color: '#fff',
    marginTop: h * 0.08,
    paddingHorizontal: w * 0.2,
    paddingVertical: h * 0.015,
    borderColor: '#BCB419',
    borderBottomWidth: 2,
  },
  containerForm: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: '400',
  },
  inputStyle: {color: '#fff', fontSize: 15},
  containerStyle: {
    width: w * 0.75,
    height: w * 0.1,
    marginVertical: 20,
  },
  button: {
    width: w * 0.73,
    backgroundColor: '#FFB300',
    borderRadius: 20,
  },
  remember: {
    flexDirection: 'row',
    marginVertical: 10,
    alignItems: 'center',
  },
  remem: {
    color: '#fff',
    fontSize: 15,
    left: w * 0.02,
  },
  forget: {
    marginVertical: 10,
  },
  login: {
    fontWeight: '600',
  },
});
export const linear = ['#009471', '#009447'];
