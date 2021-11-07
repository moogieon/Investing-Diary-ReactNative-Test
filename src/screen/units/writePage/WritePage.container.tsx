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
  const [assets, setAssets] = useState([]);
  const [list, setList] = useState([]);
  const [assetsModal, setAssetsModal] = useState(false);
  console.log(assets);
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

      console.log(assets);
      Alert.alert('등록완료', res.data.url);
      console.log('등록완료', res.data.url);
      navigation.navigate('Main');
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
    list.forEach(data => {
      if (data.id === invest.id) isExists = true;
    });
    if (isExists) return alert('!! 이미 담았습니다 !!.');
    else {
      setList(prevList => {
        return [invest, ...prevList];
      });
    }

    console.log(list);
    console.log(
      '??',
      list.map((data: any) => data.name),
    );

    setAssetsModal(false);
  };
  console.log('list', list);
  const onClick = () => {};
  return (
    <WritePageUI
      navigation={navigation}
      date={date}
      open={open}
      setDate={setDate}
      setOpen={setOpen}
      assets={assets}
      setAssets={setAssets}
      list={list}
      assetsModal={assetsModal}
      subitAssets={subitAssets}
      setAssetsModal={setAssetsModal}
      onPressSubit={onPressSubit}
      onChangeContent={onChangeContent}
      onChangeTitle={onChangeTitle}
    />
  );
}
