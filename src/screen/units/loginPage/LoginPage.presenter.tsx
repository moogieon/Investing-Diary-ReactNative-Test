import React from 'react';
import {
  TouchableOpacity,
  NativeSyntheticEvent,
  TextInputChangeEventData,
} from 'react-native';
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
} from './LoginPage.styles';

type IProps = {
  onChangeEmail: (
    e: NativeSyntheticEvent<TextInputChangeEventData>,
  ) => void | undefined;
  onChangePassword: (
    e: NativeSyntheticEvent<TextInputChangeEventData>,
  ) => void | undefined;
  onClickLogin: () => void;
  onPressSinUp: () => void;
  navigation: any;
};
export default function LoginPageUI(props: IProps) {
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

            <UserInput
              placeholder="이메일을 입력해주세요"
              onChange={props.onChangeEmail}
            />
            <UserInput
              placeholder="비밀번호를 입력해주세요"
              secureTextEntry={true} // 비밀번호 입력
              onChange={props.onChangePassword}
            />
            <LoginButtonWrapper>
              <LoginButton onPress={props.onClickLogin}>{'로그인'}</LoginButton>
            </LoginButtonWrapper>
            <TouchableOpacity onPress={props.onPressSinUp}>
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
