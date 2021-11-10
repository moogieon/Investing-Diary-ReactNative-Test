import LoginPageUI from './LoginPage.presenter';
import React, {useContext, useState} from 'react';
import axios from 'axios';
import RNRestart from 'react-native-restart';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  Alert,
  NativeSyntheticEvent,
  TextInputChangeEventData,
} from 'react-native';
import {GlobalContext, Props} from '../../../../App';
import {CommonActions} from '@react-navigation/routers';

export default function LoginPage({navigation}: Props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {setAccessToken, setUser} = useContext(GlobalContext);
  const onClickLogin = async () => {
    try {
      axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
      const result = await axios.post(
        'https://the-rich-coding-test1.herokuapp.com/users/login',

        {email, password},
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );

      await AsyncStorage.setItem('accessToken', result.data.token || '');
      AsyncStorage.setItem(
        'userInfo',
        JSON.stringify(result.data.user_id) || '',
      );
      navigation.dispatch(CommonActions.navigate('Main'));
      RNRestart.Restart();
      setAccessToken(result.data.token);
      setUser(result.data.id);
      Alert.alert('로그인 완료');
    } catch (error: any) {
      Alert.alert(error);
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
