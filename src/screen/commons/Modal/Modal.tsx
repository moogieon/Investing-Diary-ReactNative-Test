import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

function ModalTester(props: any) {
  const [list, setList] = useState([] as any);
  const [count, setCount] = useState({amount: '', buy_price: ''});
  const [datas, setDatas] = useState([] as any);

  useEffect(() => {
    const getData = async () => {
      const resultList = await axios.get(
        'https://the-rich-coding-test1.herokuapp.com/assets.json',
      );
      setDatas(resultList.data);
    };

    const answer = {};
    datas.forEach(data => {
      answer[data.ticker] = {
        id: data.id,
        name: data.name,
        amount: count.amount,
        buy_price: count.buy_price,
      };
    });

    setList(answer);
    getData();
    console.log('오?', datas);
  }, [datas]);

  const onChangeAmount = text => {
    setCount({...count, amount: text});
  };
  const onChangePrice = text => {
    setCount({...count, buy_price: text});
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000000ae',
      }}>
      <View
        style={{
          borderRadius: 10,
          width: '75%',
          height: 350,
          backgroundColor: 'white',
          justifyContent: 'space-around',
          alignItems: 'center',
          paddingTop: 32,
        }}>
        <TouchableOpacity
          onPress={() => props.setAssetsModal(false)}
          style={{position: 'absolute', right: 10, bottom: 320}}>
          <Text style={{fontSize: 20}}>❌</Text>
        </TouchableOpacity>
        <Text style={{fontSize: 14}}>목록 보기</Text>
        <View
          style={{
            flexDirection: 'row',
            height: 50,
            width: '100%',
            alignItems: 'center',
            borderBottomWidth: 1,
            paddingLeft: 30,
          }}>
          <Text style={{width: '30%', fontWeight: 'bold', color: 'darkgrey'}}>
            종목
          </Text>
          <Text style={{width: 30, fontWeight: 'bold', color: 'darkgrey'}}>
            수량
          </Text>
          <Text
            style={{
              width: '28%',
              fontWeight: 'bold',
              color: 'darkgrey',
              marginLeft: 30,
            }}>
            가격
          </Text>
          <Text>선택</Text>
        </View>
        <ScrollView>
          {/* {datas.map(data => ( */}
          {Object.values(list).map(data => (
            <View
              key={data.id}
              style={{
                height: 80,
                flexDirection: 'row',
                borderBottomWidth: 1,
                width: 320,
                alignItems: 'center',
                paddingLeft: 30,
              }}>
              <Text style={{width: '30%', fontWeight: 'bold'}}>
                {data.name}
              </Text>
              <TextInput
                onChangeText={onChangeAmount}
                style={{
                  borderBottomWidth: 1,
                  width: 30,
                  height: 40,
                  textAlign: 'center',
                }}></TextInput>
              <TextInput
                onChangeText={onChangePrice}
                style={{
                  borderBottomWidth: 1,
                  textAlign: 'center',
                  width: 50,
                  height: 40,
                  marginLeft: 30,
                  marginRight: 25,
                }}></TextInput>
              <TouchableOpacity onPress={props.subitAssets(data)}>
                <Text style={{color: '#ba8108ac'}}>추가</Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}
export default ModalTester;
