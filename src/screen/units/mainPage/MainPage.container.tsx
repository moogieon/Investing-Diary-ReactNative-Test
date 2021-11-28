import React, {useContext, useEffect, useState} from 'react';
import {GlobalContext, Props} from '../../../../App';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MainPageUI from './MainPage.presenter';
import {Alert} from 'react-native';
import RNRestart from 'react-native-restart';
import axios from 'axios';
export default function MainPage({navigation}: Props) {
  console.disableYellowBox = true;

  const [list, setList] = useState([]);

  const {accessToken, reFetch} = useContext(GlobalContext);
  useEffect(() => {
    const getData = async () => {
      const resultList = await axios.get(
        'https://the-rich-coding-test1.herokuapp.com/diaries.json',
        {headers: {Authorization: `Bearer ${accessToken}`}},
      );

      setList(resultList.data);
    };

    getData();
  }, [accessToken, reFetch]);
  useEffect(() => {
    async function getData() {
      try {
        // const { q, count } = this.state;
        const q = 'cat';
        const count = 5;
        const url = 'https://api.twitter.com/1.1/search/tweets.json';
        const params = new URLSearchParams();
        params.append('q', q);
        params.append('count', count);
        await fetch(`${url}?${params}`, {
          headers: {
            Authorization:
              'bearer AAAAAAAAAAAAAAAAAAAAAAkDVwEAAAAA8Wr%2FY7UwyFdlj1lDdn0bESMmcd4%3DxPNQgNxTdSiEJQLOYbrjbR0IfPzgYPz4DVkLTpnRJaueA5Lpep',
          },
        }).then(res => console.log('twitter', res.json()));
        // response = await response.json();

        // const res = await axios.get(
        //   "https://api.twitter.com/2/tweets/search/stream?tweet.fields=created_at&expansions=author_id&user.fields=created_at",
        //   {
        //     headers: {
        //       "Content-Type": "application/json",
        //       Authorization: `Bearer AAAAAAAAAAAAAAAAAAAAADi8VgEAAAAAsGzb5kStzLoCI3IQgnwjxdrSxzA%3DodZoF1nVHW6YKOJ1YxWHPvByuIKQLKCaj7caei48TWKhB3AjWZ`,
        //     },
        //   },
        // );
        // console.log("??", res.data);
      } catch (error) {
        console.log(error.message);
      }
    }
    getData();
  }, []);

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
