import axios from 'axios';
import React, {useContext, useState} from 'react';
import {Alert} from 'react-native';
import {GlobalContext, Props} from '../../../../App';
import WritePageUI from './WritePage.presenter';

const INPUT_CONTENTS = {
  title: '',
  contents: '',
};

export default function WritePage({navigation}: Props) {
  const {accessToken, setReFetch} = useContext(GlobalContext);
  const [date, setDate] = useState(new Date());
  const [diaries, setDiaries] = useState(INPUT_CONTENTS);
  const [assets, setAssets] = useState([]);
  const [open, setOpen] = useState(false);
  const [assetsModal, setAssetsModal] = useState(false);

  const onPressSubit = async () => {
    try {
      axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
      const res = await axios.post(
        'https://the-rich-coding-test1.herokuapp.com/diaries',
        {
          title: diaries.title,
          contents: diaries.contents,
          date,
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
      );
      const diary_id = res.data.id;
      let url = 'https://the-rich-coding-test1.herokuapp.com/diary_assets';

      const result = await Promise.all(
        assets.map(assetdata => {
          return axios.post(
            url,
            {
              diary_id,
              asset_id: assetdata.id,
              amount: assetdata.amount,
              buy_price: assetdata.buy_price,
            },
            {
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            },
          );
        }),
      );

      navigation.navigate('Main');
      setReFetch('reFetchs');
    } catch (error) {
      Alert.alert(error.message);
    }
  };

  const onChangeContent = text => {
    setDiaries({...diaries, contents: text});
  };
  const onChangeTitle = text => {
    setDiaries({...diaries, title: text});
  };

  const subitAssets = invest => () => {
    let isExists = false;
    assets.forEach(data => {
      if (data.name === invest.name) isExists = true;
    });
    if (isExists) return alert('!! 이미 담았습니다 !!.');
    setAssets(list => {
      return [...list, invest];
    });
    setAssetsModal(false);
  };

  return (
    <WritePageUI
      navigation={navigation}
      date={date}
      open={open}
      setDate={setDate}
      setOpen={setOpen}
      assetsModal={assetsModal}
      subitAssets={subitAssets}
      setAssetsModal={setAssetsModal}
      onPressSubit={onPressSubit}
      onChangeContent={onChangeContent}
      onChangeTitle={onChangeTitle}
      setAssets={setAssets}
      assets={assets}
    />
  );
}
