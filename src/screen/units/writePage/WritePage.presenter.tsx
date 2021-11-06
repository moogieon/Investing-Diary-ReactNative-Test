import React from 'react';
import DatePicker from 'react-native-date-picker';
import {getDate} from '../../commons/libraries/getdate';

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
} from './WritePage.styles';
type Iprops = {
  navigation: any;
  setOpen: any;
  setDate: any;
  open: boolean | undefined;
  date: Date;
};
export default function WritePageUI(props: Iprops) {
  return (
    <>
      <Head>
        <Button onPress={() => props.navigation.goBack(null)}>
          <User>{'<'}</User>
        </Button>

        <Login>투자일지 작성</Login>

        <SubmitBtn>
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
              <InvestTitle placeholder={'제목을 입력하세요'}></InvestTitle>
              <WriteBox>
                <InvestContents
                  placeholder={'내용을 입력하세요'}></InvestContents>
              </WriteBox>
              <InvestText>투자하기</InvestText>
              <Invests>
                <InvestAdd>
                  <InvestText>+</InvestText>
                </InvestAdd>
                <InvestDetail>
                  <InvestText1>Apple</InvestText1>
                  <InvestText0>수량:</InvestText0>
                  <InvestText2>10</InvestText2>
                  <InvestText0>가격:</InvestText0>
                  <InvestText3>110$</InvestText3>
                </InvestDetail>
              </Invests>
            </BodyWraaper>
          </InvestList>
        </Body>
      </Container>
    </>
  );
}
