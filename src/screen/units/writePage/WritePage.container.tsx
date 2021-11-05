import React from 'react';
import WritePageUI from './WritePage.presenter';
type Iprops = {
  navigation: any;
};
export default function WritePage({navigation}: Iprops) {
  return <WritePageUI navigation={navigation} />;
}
