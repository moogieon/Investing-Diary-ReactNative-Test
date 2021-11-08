import axios from 'axios';
import React, {useContext, useEffect, useState} from 'react';
import {Alert} from 'react-native';
import {GlobalContext, Props} from '../../../../App';
import DetailPageUI from './DetailPage.presenter';

export default function DetailPage({navigation, route}: Props) {
  const [itemDetail, setItemDetail] = useState([] as any);

  const {accessToken} = useContext(GlobalContext);
  useEffect(() => {
    const getData = async () => {
      const resultList = await axios.get(route.params.id, {
        headers: {Authorization: `Bearer ${accessToken}`},
      });
      setItemDetail(resultList.data);
    };
    getData();
    console.log('ssss', itemDetail);
  }, []);

  const onPressDelete = URL => async () => {
    try {
      await axios.delete(URL, {
        headers: {Authorization: `Bearer ${accessToken}`},
      });
      Alert.alert('삭제완료');
      navigation.navigate('Main');
    } catch (error) {
      Alert.alert(error);
    }
  };

  return (
    <DetailPageUI
      navigation={navigation}
      itemDetail={itemDetail}
      onPressDelete={onPressDelete}
    />
  );
}
