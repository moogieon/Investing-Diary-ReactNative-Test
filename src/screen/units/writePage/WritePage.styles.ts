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
  font-size: 30px;
  color: white;
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
  /* padding: 20px; */
  align-items: center;
  justify-content: center;
`;
export const InvestList = styled.View`
  width: 100%;
  height: 100%;
  border: 1px;
`;
export const InvestDate = styled.TextInput`
  width: 100%;
  height: 40px;
  border: 1px;
  align-items: center;
  justify-content: center;
`;

export const BodyWraaper = styled.View`
  width: 100%;
  height: 100%;
  justify-content: flex-start;
  padding: 20px;
`;
export const InvestTitle = styled.TextInput`
  border: 1px;
  width: 100%;
  height: 40px;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;
export const InvestDetail = styled.View`
  border: 1px;
  width: 100%;
  height: 110px;
  align-items: center;
  justify-content: center;
  margin-bottom: 80px;
`;
export const Invests = styled.View`
  border: 1px;
  width: 30%;
  height: 110px;
  justify-content: space-between;
`;
export const InvestText = styled.Text`
  font-size: 21px;
`;
export const SubmitBtn = styled.TouchableOpacity`
  border: 1px;
  width: 100px;
  height: 110px;
  background-color: red;
`;
