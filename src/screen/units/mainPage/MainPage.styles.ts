import styled from '@emotion/native';

export const Container = styled.View`
  width: 100%;
`;
export const Head = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
  background-color: black;
`;
export const HeaderBar = styled.View`
  width: 60%;
  height: 40px;
  flex-direction: row;
  justify-content: flex-end;
`;

export const HeaderLeft = styled.View`
  width: 40%;
  height: 43px;
  justify-content: flex-end;
`;

export const Button = styled.TouchableOpacity`
  height: 170px;
  margin-left: 20px;
`;

export const User = styled.Text`
  font-size: 21px;
  color: white;
`;
export const SingIn = styled.Text`
  font-size: 14px;
  color: white;
`;
export const Login = styled.Text`
  font-size: 14px;
  color: white;
`;

export const WriteBtn = styled.TouchableOpacity`
  position: absolute;
  width: 80px;
  height: 80px;
  align-items: center;
  justify-content: center;
  right: 28px;
  bottom: 100px;
  border-radius: 80px;
  background-color: gold;
`;

// ------------
export const Body = styled.View`
  width: 100%;
  height: 100%;
  padding: 20px;
  flex-direction: column;
  padding-bottom: 200px;
  /* background-color: black; */
`;
export const InvestList = styled.TouchableOpacity`
  border: 1px;
  width: 180px;
  height: 170px;
  border-radius: 20px;
  margin-right: 10px;
  margin-top: 10px;
  elevation: 2;
  background-color: #fff;
`;

export const InvestDate = styled.View`
  width: 100%;
  height: 30px;
  align-items: center;
  justify-content: center;
  /* border-bottom-width: 1px; */
`;
export const InvestDetail = styled.View`
  padding-top: 10px;
  width: 100%;
  height: 110px;
  padding-left: 10px;
`;
export const InvestText = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;
export const InvestTilte = styled.Text`
  font-size: 14px;
  font-weight: bold;
`;
export const InvestContents = styled.Text`
  font-size: 12px;
`;
