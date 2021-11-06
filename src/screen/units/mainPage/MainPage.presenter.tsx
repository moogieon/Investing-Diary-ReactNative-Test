import {
  Container,
  Head,
  User,
  Button,
  SingIn,
  Login,
  Body,
  WriteBtn,
  HeaderLeft,
  HeaderBar,
  InvestList,
  InvestDate,
  InvestDetail,
  InvestText,
  InvestTilte,
  InvestContents,
} from './MainPage.styles';
import React from 'react';

export default function MainPageUI(props: any) {
  return (
    <>
      <Container>
        <Head>
          <HeaderLeft>
            <SingIn>반갑습니다,</SingIn>
            <User>{'창묵'}님</User>
          </HeaderLeft>
          <HeaderBar>
            <Button onPress={props.goToSingup}>
              <SingIn>회원가입</SingIn>
            </Button>
            <Button onPress={props.goToLogin}>
              <Login>로그인</Login>
            </Button>
          </HeaderBar>
        </Head>
        <Body>
          <InvestList onPress={props.goToDetail}>
            <InvestDate>
              <InvestText>2021/11/05</InvestText>
            </InvestDate>
            <InvestDetail>
              <InvestTilte>제목</InvestTilte>
              <InvestContents>내용</InvestContents>
            </InvestDetail>
          </InvestList>
        </Body>
        <WriteBtn onPress={props.goToWrite}>
          <InvestText>+</InvestText>
        </WriteBtn>
      </Container>
    </>
  );
}
