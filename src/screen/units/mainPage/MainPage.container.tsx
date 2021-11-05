import React from 'react';

import MainPageUI from './MainPage.presenter';

export default function MainPage({navigation}: any) {
  const goToLogin = () => {
    navigation.navigate('Login');
  };
  const goToSingup = () => {
    navigation.navigate('Singup');
  };
  // const goToAreaPage = area => () => {
  //   navigation.navigate('AreaPage', {area: area});
  // };

  // const goToDetailPage = id => () => {
  //   navigation.navigate('BoardDetailPage', {id: id});
  // };

  return <MainPageUI goToLogin={goToLogin} goToSingup={goToSingup} />;
}
