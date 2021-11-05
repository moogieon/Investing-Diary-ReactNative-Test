import React from 'react';
import {TouchableOpacity} from 'react-native';
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
  SignUpWrapper,
  SignUp,
} from './SingupPage.styles';
export default function SingUpPageUI(props) {
  return (
    <>
      <Container>
        <Head>
          <Button onPress={() => props.navigation.goBack(null)}>
            <User>{'<'}</User>
          </Button>
          <HeaderBar>
            <Login>로그인</Login>
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
            <LoginButtonWrapper>
              <LoginButton>{'로그인'}</LoginButton>
            </LoginButtonWrapper>
            <TouchableOpacity>
              <SignUpWrapper>
                <SignUp>{'이메일로 회원가입'}</SignUp>
              </SignUpWrapper>
            </TouchableOpacity>
          </InvestList>
        </Body>
      </Container>
    </>
  );
}
