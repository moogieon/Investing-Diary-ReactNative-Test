import React from 'react';

import MainPageUI from './MainPage.presenter';

export default function MainPage({navigation}: any) {
  const goToLogin = () => {
    navigation.navigate('Login');
  };
  const goToSingup = () => {
    navigation.navigate('Singup');
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
