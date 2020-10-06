import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import {styles, linear} from './LoginStyle';
import {Form, Field, ErrorMessage, Formik} from 'formik';
import {Button, Input, CheckBox} from 'react-native-elements';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import FeatherIcon from 'react-native-vector-icons/Feather';
import * as Yup from 'yup';
import {ScreenName} from '@constants';
import LinearGradient from 'react-native-linear-gradient';
const formLogin = Yup.object().shape({
  email: Yup.string(),
  password: Yup.string(),
});
export const Login = ({navigation}: any) => {
  const [check, setCheck] = useState(true);
  const {
    containerForm,
    container,
    containerStyle,
    button,
    inputStyle,
    remem,
    image,
    slogan,
    login,
    loginTitle,
    remember,
  } = styles;
  return (
    <LinearGradient colors={linear} style={container}>
      <Formik
        enableReinitialize={true}
        initialValues={{email: '', password: ''}}
        validationSchema={formLogin}
        onSubmit={(values) => console.log(values)}>
        {({handleChange, handleBlur, handleSubmit, values, errors}) => (
          <View style={containerForm}>
            <Image
              source={require('../../helper/Image/logo.png')}
              style={image}
              resizeMode="contain"
            />
            <Text style={slogan}>Tin cậy - Chất lượng - Kịp thời</Text>
            <View style={loginTitle}>
              <Text style={slogan}>ĐĂNG NHẬP</Text>
            </View>

            <Input
              containerStyle={containerStyle}
              inputStyle={inputStyle}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              placeholder="Số điện thoại"
              rightIcon={<FeatherIcon name="user" size={24} color="#C2C6CC" />}
              placeholderTextColor={'#fff'}
            />
            {errors.email && (
              <Text style={{fontSize: 10, color: 'red'}}>{errors.email}</Text>
            )}

            <Input
              containerStyle={containerStyle}
              inputStyle={inputStyle}
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              placeholder="Mật khẩu"
              rightIcon={<FeatherIcon name="key" size={24} color="#C2C6CC" />}
              placeholderTextColor={'#fff'}
            />
            {/* <Text>{JSON.stringify(values)}</Text> */}
            {errors.password && (
              <Text style={{fontSize: 10, color: 'red'}}>
                {errors.password}
              </Text>
            )}

            <TouchableOpacity style={remember} onPress={() => setCheck(!check)}>
              {check ? (
                <FeatherIcon name="check-circle" size={15} color={'yellow'} />
              ) : (
                <FeatherIcon name="circle" size={15} color={'yellow'} />
              )}
              <Text style={remem}>Nhớ đăng nhập</Text>
            </TouchableOpacity>
            <Button
              buttonStyle={button}
              onPress={() => {
                handleSubmit();
                navigation.navigate(ScreenName.TabNavigator);
              }}
              title="Đăng nhập"
              titleStyle={login}
            />
          </View>
        )}
      </Formik>
    </LinearGradient>
  );
};
