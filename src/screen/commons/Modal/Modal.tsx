import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';

function ModalTester(props: any) {
  const [list, setList] = useState([] as any);

  useEffect(() => {
    const getData = async () => {
      const resultList = await axios.get(
        'https://the-rich-coding-test1.herokuapp.com/assets.json',
      );
      setList(resultList.data);
    };
    console.log(list);
    getData();
  }, []);
  const onChangeName = text => {
    props.setAssets({...props.assets, name: text});
  };
  const onChangeAmount = text => {
    props.setAssets({...props.assets, amount: text});
  };
  const onChangePrice = text => {
    props.setAssets({...props.assets, price: text});
  };
  console.log('오?', props.assets);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000000ae',
      }}>
      <TouchableOpacity
        onPress={() => props.setAssetsModal(false)}
        style={{position: 'absolute', left: 370, top: 100}}>
        <Text style={{fontSize: 60}}>x</Text>
      </TouchableOpacity>
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
        <View
          style={{
            flexDirection: 'row',
            height: 50,
            width: '100%',
            alignItems: 'center',
            borderBottomWidth: 1,
            paddingLeft: 30,
          }}>
          <Text style={{width: '37%', fontWeight: 'bold', color: 'darkgrey'}}>
            종목
          </Text>
          <Text style={{width: '37%', fontWeight: 'bold', color: 'darkgrey'}}>
            가격
          </Text>
          <Text>선택</Text>
        </View>
        <ScrollView>
          {list.map(data => (
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
              <Text style={{width: '37%', fontWeight: 'bold'}}>
                {data.name}
              </Text>
              <Text style={{width: '30%'}}>${data.price}</Text>
              <TouchableOpacity onPress={props.onPressSubit(data)}>
                <Text style={{color: '#ba8108ac'}}>추가하기</Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}
export default ModalTester;
