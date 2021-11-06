import React from 'react';
import {Props} from '../../../../App';
import DetailPageUI from './DetailPage.presenter';

export default function DetailPage({navigation}: Props) {
  return <DetailPageUI navigation={navigation} />;
}
