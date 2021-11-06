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

            <UserInput
              placeholder="이메일을 입력해주세요"
              onChange={props.onChangeEmail}
            />
            <UserInput
              placeholder="비밀번호를 입력해주세요"
              secureTextEntry={true}
              onChange={props.onChangePassword}
              // 비밀번호 입력
            />
            <UserInput
              placeholder={props.passwrodError}
              secureTextEntry={true}
              onChange={props.onChangeConfirmpassword} // 비밀번호 입력
            />
            <LoginButtonWrapper onPress={props.onClickSingUp}>
              <LoginButton>{'회원가입'}</LoginButton>
            </LoginButtonWrapper>
          </InvestList>
        </Body>
      </Container>
    </>
  );
}
