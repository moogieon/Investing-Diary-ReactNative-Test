import LoginPageUI from './LoginPage.presenter';
import React, {useState} from 'react';
import axios from 'axios';

import {
  Alert,
  NativeSyntheticEvent,
  TextInputChangeEventData,
} from 'react-native';
import {Props} from '../../../../App';
export default function LoginPage({navigation}: Props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onClickLogin = async () => {
    try {
      const result = await axios.post(
        'https://the-rich-coding-test1.herokuapp.com/users/login/',
        {
          email,
          password,
        },
      );
      // axios.defaults.headers.common[
      //   'Authorization'
      // ] = `Bearer ${result.data.token}`;
      Alert.alert(result.data.token);
    } catch (error: any) {
      Alert.alert(error.message);
    }
  };
  const onChangePassword = (
    event: NativeSyntheticEvent<TextInputChangeEventData>,
  ) => {
    setPassword(event.nativeEvent.text);
  };
  const onChangeEmail = (
    event: NativeSyntheticEvent<TextInputChangeEventData>,
  ) => {
    setEmail(event.nativeEvent.text);
  };
  const onPressSinUp = () => {
    navigation.navigate('Signup');
  };

  return (
    <LoginPageUI
      navigation={navigation}
      onClickLogin={onClickLogin}
      onChangeEmail={onChangeEmail}
      onChangePassword={onChangePassword}
      onPressSinUp={onPressSinUp}
    />
  );
}
