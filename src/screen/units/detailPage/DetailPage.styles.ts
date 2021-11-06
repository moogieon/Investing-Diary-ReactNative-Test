import styled from '@emotion/native';

export const Container = styled.View`
  width: 100%;
  height: 100%;
`;
export const Head = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding: 20px;
  background-color: black;
`;
export const HeaderBar = styled.View`
  width: 60%;
  height: 40px;
  flex-direction: row;
  justify-content: center;
  align-self: center;
`;

export const Button = styled.TouchableOpacity`
  width: 20%;
  align-self: center;
`;

export const User = styled.Text`
  font-size: 35px;
  color: white;
`;

export const Login = styled.Text`
  font-size: 20px;
  color: white;
  line-height: 45px;
`;

export const WriteBtn = styled.TouchableOpacity`
  position: absolute;
  width: 55px;
  height: 55px;
  align-items: center;
  justify-content: center;
  right: 28px;
  bottom: 80px;
  border-radius: 30px;
`;

// ------------
export const Body = styled.View`
  background-color: mintcream;
  width: 100%;
  height: 100%;
  padding: 10px;
  align-items: center;
  justify-content: center;
`;
export const InvestList = styled.View`
  width: 100%;
  height: 100%;
`;
export const InvestDate = styled.View`
  width: 100%;
  height: 40px;
  border-bottom-width: 1px;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;
`;
export const BodyWraaper = styled.View`
  width: 100%;
  height: 90%;
  justify-content: flex-start;
`;
export const InvestTitle = styled.View`
  border-bottom-width: 1px;
  width: 100%;
  height: 40px;

  justify-content: center;
  margin-bottom: 20px;
`;
export const InvestDetail = styled.View`
  border: 1px;
  width: 30%;
  height: 100%;
  padding: 10px;
  border-radius: 30px;
  margin-right: 10px;
`;
export const InvestsContents = styled.View`
  border: 1px;
  width: 100%;
  height: 38%;
  /* padding-left: 10px; */
`;
export const Invests = styled.View`
  border: 1px;
  width: 100%;
  height: 160px;

  justify-content: space-between;
`;
export const InvestText = styled.Text`
  font-size: 21px;
`;
export const InvestText1 = styled.Text`
  font-size: 15px;
`;
export const InvestText2 = styled.Text`
  font-size: 15px;
`;
export const InvestText3 = styled.Text`
  font-size: 15px;
`;
export const InvestText0 = styled.Text`
  font-size: 12px;
  color: #bdbdbd;
`;
