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
import React, {useContext} from 'react';
import {GlobalContext} from '../../../../App';
import {ScrollView, Text, View} from 'react-native';
import {getDate} from '../../commons/libraries/getdate';

export default function MainPageUI(props: any) {
  const {accessToken, user} = useContext(GlobalContext);
  return (
    <>
      <Container>
        {accessToken ? (
          <Head>
            <HeaderLeft>
              <SingIn>반갑습니다,</SingIn>
              <User>{user}님</User>
            </HeaderLeft>
            <HeaderBar>
              <Button onPress={props.goToSingup}>
                <SingIn></SingIn>
              </Button>
              <Button onPress={props.logOut}>
                <Login>로그아웃</Login>
              </Button>
            </HeaderBar>
          </Head>
        ) : (
          <>
            <Head>
              <HeaderLeft>
                <Text style={{fontSize: 24, color: 'gold', marginBottom: 10}}>
                  The Rich
                </Text>
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
              <InvestText>로그인이 필요합니다.</InvestText>
            </Body>
          </>
        )}
        {accessToken && (
          <>
            <Body>
              <ScrollView horizontal>
                {props.list?.map(data => (
                  <InvestList onPress={props.goToDetail(data)} key={data.id}>
                    <InvestDate>
                      <InvestText>{getDate(data.date)}</InvestText>
                    </InvestDate>
                    <InvestDetail>
                      <InvestTilte>{data.title}</InvestTilte>
                      <InvestContents>{data.contents}</InvestContents>
                    </InvestDetail>
                  </InvestList>
                ))}
              </ScrollView>
            </Body>
            <WriteBtn onPress={props.goToWrite}>
              <InvestText>+</InvestText>
            </WriteBtn>
          </>
        )}
      </Container>
    </>
  );
}
