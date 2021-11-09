import React, {useState} from 'react';
import axios from 'axios';
import SinUpPageUI from './SinUpPage.presenter';
import {
  Alert,
  NativeSyntheticEvent,
  TextInputChangeEventData,
} from 'react-native';
import {CommonActions} from '@react-navigation/native';
import {Props} from '../../../../App';

export default function SinUpPage({navigation}: Props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmpassword] = useState('');
  const [passwrodError, setPasswrodError] = useState('비밀번호 확인');
  const onClickSingUp = async () => {
    setPasswrodError(
      confirmpassword !== password ? '비밀번호를 확인 해주세요.' : '',
    );

    if (confirmpassword !== password) return;
    try {
      await axios.post('https://the-rich-coding-test1.herokuapp.com/users', {
        email,
        password,
      });
      Alert.alert('회원 가입완료');
      navigation.dispatch(CommonActions.navigate('Main'));
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
  const onChangeConfirmpassword = (
    event: NativeSyntheticEvent<TextInputChangeEventData>,
  ) => {
    setConfirmpassword(event.nativeEvent.text);
  };

  return (
    <SinUpPageUI
      navigation={navigation}
      onClickSingUp={onClickSingUp}
      onChangePassword={onChangePassword}
      onChangeEmail={onChangeEmail}
      onChangeConfirmpassword={onChangeConfirmpassword}
      passwrodError={passwrodError}
    />
  );
}
