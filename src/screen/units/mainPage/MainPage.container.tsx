import React from 'react';
import {Props} from '../../../../App';

import MainPageUI from './MainPage.presenter';

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

  // const goToDetailPage = id => () => {
  //   navigation.navigate('BoardDetailPage', {id: id});
  // };

  return (
    <MainPageUI
      goToLogin={goToLogin}
      goToSingup={goToSingup}
      goToDetail={goToDetail}
      goToWrite={goToWrite}
    />
  );
}
