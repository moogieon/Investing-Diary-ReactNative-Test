import React from 'react';
import {
  Container,
  Head,
  User,
  Button,
  UserInput,
  Login,
  Body,
  HeaderBar,
  InvestList,
  InvestDate,
  LoginButtonWrapper,
  LoginButton,
} from './SinUpPage.styles';
export default function SinUpPageUI(props: any) {
  return (
    <>
      <Container>
        <Head>
          <Button onPress={() => props.navigation.goBack(null)}>
            <User>{'<'}</User>
          </Button>
          <HeaderBar>
            <Login>회원가입</Login>
          </HeaderBar>
        </Head>
        <Body>
          <InvestList>
            <InvestDate></InvestDate>

            <UserInput placeholder="이메일을 입력해주세요" />
            <UserInput
              placeholder="비밀번호를 입력해주세요"
              secureTextEntry={true} // 비밀번호 입력
            />
            <UserInput
              placeholder="비밀번호를 확인"
              secureTextEntry={true} // 비밀번호 입력
            />
            <LoginButtonWrapper>
              <LoginButton>{'회원가입'}</LoginButton>
            </LoginButtonWrapper>
          </InvestList>
        </Body>
      </Container>
    </>
  );
}
