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
  InvestsContents,
  InvestDetail,
  InvestText,
  Invests,
  InvestText0,
  InvestText1,
  InvestText2,
  InvestText3,
} from './DetailPage.styles';
type Iprops = {
  navigation: any;
};
export default function DetailPageUI(props: Iprops) {
  return (
    <>
      <Container>
        <Head>
          <Button onPress={() => props.navigation.goBack(null)}>
            <User>{'<'}</User>
          </Button>
          <HeaderBar>
            <Login>내 투자일지</Login>
          </HeaderBar>
        </Head>
        <Body>
          <InvestList>
            <InvestDate>
              <InvestText>2021/11/05</InvestText>
            </InvestDate>
            <BodyWraaper>
              <InvestTitle>
                <InvestText>제목</InvestText>
              </InvestTitle>
              <InvestsContents>
                <InvestText>s</InvestText>
              </InvestsContents>
              <InvestText>투자한 종목들</InvestText>
              <Invests>
                <InvestDetail>
                  <InvestText1>Apple</InvestText1>
                  <InvestText0>매수가:</InvestText0>
                  <InvestText2>200$</InvestText2>
                  <InvestText0>현재가:</InvestText0>
                  <InvestText3>110$</InvestText3>
                  <InvestText0>수익률:</InvestText0>
                  <InvestText3>-10%</InvestText3>
                </InvestDetail>
              </Invests>
            </BodyWraaper>
          </InvestList>
        </Body>
      </Container>
    </>
  );
}
