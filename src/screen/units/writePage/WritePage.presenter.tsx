import React from 'react';
import {Modal, ScrollView, useWindowDimensions} from 'react-native';
import DatePicker from 'react-native-date-picker';
import {getDate} from '../../commons/libraries/getdate';
import ModalTester from '../../commons/Modal/Modal';

import {
  Container,
  Head,
  User,
  Button,
  Login,
  Body,
  InvestList,
  InvestDate,
  InvestDatePicker,
  BodyWraaper,
  InvestTitle,
  InvestContents,
  InvestText,
  WriteBox,
  Invests,
  InvestAdd,
  InvestDetail,
  InvestText0,
  InvestText1,
  InvestText2,
  InvestText3,
  SubmitText,
  SubmitBtn,
  AmountBox,
  Add,
  Remove,
} from './WritePage.styles';
type Iprops = {
  navigation: any;
  setOpen: any;
  setDate: any;
  setAssetsModal: any;
  open: boolean | undefined;
  date: Date;
  assets: any;
  assetsModal: boolean | undefined;
  onPressAssets: () => void;
  onPressSubit: () => void;
};
export default function WritePageUI(props: Iprops) {
  return (
    <>
      <Head>
        <Button onPress={() => props.navigation.goBack(null)}>
          <User>{'<'}</User>
        </Button>
        <Login>투자일지 작성</Login>
        <SubmitBtn onPress={props.onPressSubit}>
          <SubmitText>저장</SubmitText>
        </SubmitBtn>
      </Head>
      <Container>
        <Body>
          <InvestList>
            <InvestText>날짜 선택</InvestText>
            <InvestDatePicker onPress={() => props.setOpen(true)}>
              <InvestDate> {getDate(props.date)}</InvestDate>
            </InvestDatePicker>
            <DatePicker
              mode="date"
              modal
              open={props.open}
              date={props.date}
              onConfirm={date => {
                props.setOpen(false);
                props.setDate(date);
              }}
              onCancel={() => {
                props.setOpen(false);
              }}></DatePicker>

            <BodyWraaper>
              <InvestTitle
                onChangeText={props.onChangeTitle}
                placeholder={'제목을 입력하세요'}></InvestTitle>
              <WriteBox>
                <InvestContents
                  onChangeText={props.onChangeContent}
                  placeholder={'내용을 입력하세요'}></InvestContents>
              </WriteBox>
              {/* 투자항목 추가 */}
              <InvestText>투자하기</InvestText>
              <Invests>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                  <InvestAdd
                    // onPress={props.onPressAssets}
                    onPress={() => props.setAssetsModal(true)}>
                    <InvestText>+</InvestText>
                  </InvestAdd>
                  <Modal
                    visible={props.assetsModal}
                    animationType="slide"
                    transparent={true}>
                    <ModalTester
                      onPressSubit={props.onPressSubit}
                      subitAssets={props.subitAssets}
                      setAssetsModal={props.setAssetsModal}></ModalTester>
                  </Modal>

                  {props.list?.map((data: any) => (
                    <InvestDetail key={data.id}>
                      <InvestText1>{data?.name}</InvestText1>
                      <InvestText0>수량:</InvestText0>
                      <AmountBox>
                        <SubmitBtn
                          onPress={props.onClickPlus(data.id, 'minus')}>
                          <Remove>◀︎</Remove>
                        </SubmitBtn>
                        <InvestText3>{props.count}</InvestText3>
                        <SubmitBtn onPress={props.onClickPlus('plus')}>
                          <Add>▶︎</Add>
                        </SubmitBtn>
                      </AmountBox>
                      <InvestText2>{data?.amount}</InvestText2>
                      <InvestText0></InvestText0>
                      <InvestText3>${data?.price}</InvestText3>
                    </InvestDetail>
                  ))}
                </ScrollView>
              </Invests>
            </BodyWraaper>
          </InvestList>
        </Body>
      </Container>
    </>
  );
}
