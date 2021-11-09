import {filter} from 'domutils';
import React from 'react';
import {ScrollView} from 'react-native';
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
  BodyWraaper,
  InvestTitle,
  InvestsContents,
  InvestDetail,
  InvestText,
  InvestTextTitle,
  Invests,
  InvestText0,
  InvestText1,
  InvestText2,
  InvestText3,
  InvestDelete,
  SubmitText,
  SubmitBtn,
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
          <Login>내 투자일지</Login>
          <SubmitBtn onPress={props.onPressDelete(props.itemDetail.url)}>
            <SubmitText>삭제</SubmitText>
          </SubmitBtn>
        </Head>
        <Body>
          <InvestList>
            <InvestDate>
              <InvestTextTitle>
                {getDate(props.itemDetail.date)}
              </InvestTextTitle>
            </InvestDate>
            <BodyWraaper>
              <InvestTitle>
                <InvestTextTitle>{props.itemDetail.title}</InvestTextTitle>
              </InvestTitle>
              <InvestsContents>
                <InvestText>{props.itemDetail.contents}</InvestText>
              </InvestsContents>
              <InvestTextTitle>투자한 종목들</InvestTextTitle>

              <Invests>
                <ScrollView horizontal>
                  {props.assetList?.map(data => (
                    <InvestDetail>
                      <SubmitBtn onPress={props.onPressDeleteAsset(data)}>
                        <InvestDelete>삭제</InvestDelete>
                      </SubmitBtn>
                      <InvestText1>
                        {props.assets
                          .filter(el => [data.asset_id].includes(el.id))
                          .map(res => res.name)}
                      </InvestText1>
                      <InvestText0>매수가:</InvestText0>
                      <InvestText2>${data.buy_price}</InvestText2>
                      <InvestText0>현재가:</InvestText0>
                      <InvestText3>
                        $
                        {props.assets
                          .filter(el => [data.asset_id].includes(el.id))
                          .map(res => res.price)}
                      </InvestText3>
                      <InvestText0>수익률:</InvestText0>
                      <InvestText3>
                        {Math.floor(
                          (props.assets
                            .filter(el => [data.asset_id].includes(el.id))
                            .map(res => res.price) /
                            data.buy_price) *
                            100 -
                            100,
                        )}
                        %
                      </InvestText3>
                    </InvestDetail>
                  ))}
                </ScrollView>
              </Invests>
            </BodyWraaper>
          </InvestList>
        </Body>
      </Container>
    </>
  );
}
