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

  useEffect(() => {
    const getData = async () => {
      const resultList = await axios.get(
        'https://the-rich-coding-test1.herokuapp.com/assets.json ',
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
              <TouchableOpacity onPress={props.subitAssets(data)}>
                <Text style={{color: '#ba8108ac'}}>추가하기</Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
        {/* <Text style={{fontSize: 20, color: 'black', marginBottom: 10}}>
          종목 추가
        </Text>
        <View style={{width: '100%', height: '80%', padding: 10}}>
          <Text style={{fontSize: 16, color: 'darkgrey'}}>종목 티커명</Text>
          <TextInput
            onChangeText={onChangeName}
            style={{
              fontSize: 14,
              borderBottomWidth: 1,
              width: '100%',
              height: 40,
              marginBottom: 10,
            }}></TextInput>
          <Text style={{fontSize: 16, color: 'darkgrey'}}>수량:</Text>
          <TextInput
            onChangeText={onChangeAmount}
            style={{
              fontSize: 14,
              borderBottomWidth: 1,
              width: '100%',
              height: 40,
              marginBottom: 10,
            }}></TextInput>

          <Text style={{fontSize: 16, color: 'darkgrey'}}>매수가격:</Text>
          <TextInput
            onChangeText={onChangePrice}
            style={{
              fontSize: 14,
              borderBottomWidth: 1,
              width: '100%',
              height: 40,
            }}></TextInput>
        </View> */}

        {/* <TouchableOpacity
          onPress={props.subitAssets}
          style={{
            width: '100%',
            height: '20%',
            borderTopWidth: 1,
            borderTopColor: '#ECECEC',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{fontSize: 17, color: 'gold'}}>등록</Text>
        </TouchableOpacity> */}
      </View>
    </View>
  );
}
export default ModalTester;
