import styled from '@emotion/native';

export const Container = styled.View`
  width: 100%;
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
  color: green;
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
  padding: 20px;

  align-items: center;
  justify-content: center;
`;
export const InvestList = styled.View`
  width: 100%;
  height: 100%;

  justify-content: flex-start;
`;
export const InvestDate = styled.View`
  width: 100%;
  height: 40px;
  align-items: center;
`;
export const InvestDetail = styled.View`
  width: 100%;
  height: 110px;
  align-items: center;
  justify-content: center;
`;

export const UserInput = styled.TextInput`
  width: 100%;
  height: 45px;
  padding: 10px;
  border-bottom-color: #bdbdbd;
  border-bottom-width: 1px;
  font-size: 12px;
`;
export const ButtonWrapper = styled.View`
  align-items: center;
  justify-content: center;
`;

export const LoginButtonWrapper = styled.TouchableOpacity`
  width: 97%;
  margin-top: 45px;
  margin-bottom: 10px;
  margin-left: 5px;
  background-color: black;
  height: 40px;
  border-radius: 10px;
  justify-content: center;
`;
export const LoginButton = styled.Text`
  color: white;
  line-height: 40px;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
`;
export const SignUpWrapper = styled.View`
  padding-top: 20px;
  margin: auto;
`;

export const SignUp = styled.Text``;
