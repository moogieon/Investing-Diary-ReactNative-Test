import React from 'react';

import {
  Container,
  Head,
  User,
  Button,
  Login,
  Body,
  HeaderBar,
  InvestList,
  InvestDate,
  BodyWraaper,
  InvestTitle,
  InvestDetail,
  InvestText,
  Invests,
  SubmitBtn,
} from './WritePage.styles';
type Iprops = {
  navigation: any;
};
export default function WritePageUI(props: Iprops) {
  return (
    <>
      <Container>
        <Head>
          <Button onPress={() => props.navigation.goBack(null)}>
            <User>{'<'}</User>
          </Button>
          <HeaderBar>
            <Login>투자일지 작성</Login>
          </HeaderBar>
        </Head>
        <Body>
          <InvestList>
            <InvestText>날짜 입력</InvestText>
            <InvestDate></InvestDate>
            <BodyWraaper>
              <InvestText>제목</InvestText>
              <InvestTitle></InvestTitle>
              <InvestText>내용</InvestText>
              <InvestDetail></InvestDetail>
              <InvestText>투자한 종목들</InvestText>
              <InvestDetail>
                <Invests></Invests>
              </InvestDetail>
            </BodyWraaper>
            <SubmitBtn>
              <InvestText>투자 일지 저장</InvestText>
            </SubmitBtn>
          </InvestList>
        </Body>
      </Container>
    </>
  );
}
