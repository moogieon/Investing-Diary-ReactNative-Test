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
  const {accessToken} = useContext(GlobalContext);
  const [date, setDate] = useState(new Date());
  const [diaries, setDiaries] = useState(INPUT_CONTENTS);
  const [open, setOpen] = useState(false);
  const [list, setList] = useState([]);
  const [assetsModal, setAssetsModal] = useState(false);
  const [count, setCount] = useState([0, 0, 0]);
  const URL = 'https://the-rich-coding-test1.herokuapp.com/diary_assets';
  const onPressSubit = async () => {
    try {
      const res = await axios.post(
        'https://the-rich-coding-test1.herokuapp.com/diaries',
        {
          title: diaries.title,
          contents: diaries.contents,
          date,
        },
        {headers: {Authorization: `Bearer ${accessToken}`}},
      );
      const result = await axios.post(
        'https://the-rich-coding-test1.herokuapp.com/diary_assets',
        {
          diary_id: res.data.id,
          asset_id: list[0].id,
          amount: count,
          buy_price: 110,
        },

        {headers: {Authorization: `Bearer ${accessToken}`}},
      );
      // navigation.navigate('Main');
      console.log(result.data);
    } catch (error) {
      Alert.alert(error);
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
    const temp = [];
    list.forEach(data => {
      if (data.id === invest.id) isExists = true;
    });
    if (isExists) return alert('!! 이미 담았습니다 !!.');
    if (temp.push(invest)) setList(temp);
    console.log('@@@', list);

    setAssetsModal(false);
  };

  const onClickPlus = type => () => {
    if (type === 'plus') setCount(prev => prev + 1);
    else if (type === 'minus') setCount(prev => prev - 1);
    // console.log('ss', type);
  };

  return (
    <WritePageUI
      navigation={navigation}
      date={date}
      open={open}
      setDate={setDate}
      setOpen={setOpen}
      list={list}
      assetsModal={assetsModal}
      subitAssets={subitAssets}
      setAssetsModal={setAssetsModal}
      onPressSubit={onPressSubit}
      onChangeContent={onChangeContent}
      onChangeTitle={onChangeTitle}
      onClickPlus={onClickPlus}
      count={count}
    />
  );
}
