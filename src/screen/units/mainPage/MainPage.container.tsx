import React, {useContext, useEffect, useMemo, useState} from 'react';
import {GlobalContext, Props} from '../../../../App';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MainPageUI from './MainPage.presenter';
import {Alert} from 'react-native';
import RNRestart from 'react-native-restart';
import axios from 'axios';
export default function MainPage({navigation}: Props) {
  const [list, setList] = useState([]);

  const {accessToken} = useContext(GlobalContext);
  useEffect(() => {
    const getData = async () => {
      const resultList = await axios.get(
        'https://the-rich-coding-test1.herokuapp.com/diaries.json',
        {headers: {Authorization: `Bearer ${accessToken}`}},
      );

      setList(resultList.data);

      console.log('??', assets.data);
      console.log('!!', resultList.data);
    };

    getData();
  }, [accessToken]);

  const goToLogin = () => {
    navigation.navigate('Login');
  };
  const goToSingup = () => {
    navigation.navigate('Signup');
  };
  const goToDetail = data => () => {
    navigation.navigate('Detail', {id: data.url});
  };
  const goToWrite = () => {
    navigation.navigate('Write');
  };
  const logOut = async () => {
    try {
      await AsyncStorage.removeItem('accessToken');
      await AsyncStorage.removeItem('userInfo');
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
      list={list}
    />
  );
}
