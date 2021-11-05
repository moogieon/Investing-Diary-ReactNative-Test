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
              <InvestDetail>
                <InvestText>s</InvestText>
              </InvestDetail>
              <InvestText>투자한 종목들</InvestText>
              <InvestDetail>
                <Invests></Invests>
              </InvestDetail>
            </BodyWraaper>
          </InvestList>
        </Body>
      </Container>
    </>
  );
}
