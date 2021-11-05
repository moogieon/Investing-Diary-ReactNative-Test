import React from 'react';
import DetailPageUI from './DetailPage.presenter';
type Iprops = {
  navigation: any;
};
export default function DetailPage({navigation}: Iprops) {
  return <DetailPageUI navigation={navigation} />;
}
