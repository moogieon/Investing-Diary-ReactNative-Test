import React from 'react';
import {Props} from '../../../../App';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MainPageUI from './MainPage.presenter';
import {Alert} from 'react-native';
import RNRestart from 'react-native-restart';
export default function MainPage({navigation}: Props) {
  const goToLogin = () => {
    navigation.navigate('Login');
  };
  const goToSingup = () => {
    navigation.navigate('Signup');
  };
  const goToDetail = () => {
    navigation.navigate('Detail');
  };
  const goToWrite = () => {
    navigation.navigate('Write');
  };
  const logOut = async () => {
    try {
      await AsyncStorage.removeItem('accessToken');
      Alert.alert('로그아웃');
      RNRestart.Restart();
    } catch (error) {}
  };

  // const goToDetailPage = id => () => {
  //   navigation.navigate('BoardDetailPage', {id: id});
  // };

  return (
    <MainPageUI
      logOut={logOut}
      goToLogin={goToLogin}
      goToSingup={goToSingup}
      goToDetail={goToDetail}
      goToWrite={goToWrite}
    />
  );
}
