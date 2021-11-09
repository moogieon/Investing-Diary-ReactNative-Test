import axios from 'axios';
import React, {useContext, useEffect, useState} from 'react';
import {Alert} from 'react-native';
import {GlobalContext, Props} from '../../../../App';
import DetailPageUI from './DetailPage.presenter';

export default function DetailPage({navigation, route}: Props) {
  const [itemDetail, setItemDetail] = useState([] as any);
  const [assetList, setAssetList] = useState([]);
  const {accessToken, assets} = useContext(GlobalContext);
  useEffect(() => {
    const getData = async () => {
      const resultList = await axios.get(route.params.id, {
        headers: {Authorization: `Bearer ${accessToken}`},
      });
      setItemDetail(resultList.data);
      const ID = resultList.data.id;
      const asset = await axios.get(
        `https://the-rich-coding-test1.herokuapp.com/diaries/${ID}/assets.json`,
        {headers: {Authorization: `Bearer ${accessToken}`}},
      );

      setAssetList(asset.data);
    };

    getData();
  }, [assetList]);

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

  const onPressDeleteAsset = ID => async () => {
    try {
      axios.delete(
        `https://the-rich-coding-test1.herokuapp.com/diary_assets/${ID.id}`,
        {headers: {Authorization: `Bearer ${accessToken}`}},
      );
      Alert.alert('종목 삭제완료');
    } catch (error) {}

    console.log(ID);
  };
  console.log(assetList);
  return (
    <DetailPageUI
      navigation={navigation}
      itemDetail={itemDetail}
      assetList={assetList}
      onPressDelete={onPressDelete}
      assets={assets}
      onPressDeleteAsset={onPressDeleteAsset}
    />
  );
}
