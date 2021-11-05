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
  height: 40px;
  justify-content: flex-end;
`;

export const Button = styled.TouchableOpacity`
  height: 170px;
  margin-left: 20px;

`;

export const User  = styled.Text`
  font-size: 21px;
  color: white;
`;
export const SingIn  = styled.Text`
  font-size: 14px;
  color: white;
`;
export const Login = styled.Text`
  font-size: 14px;
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
  /* background-color: rgba(255, 255, 255, 0.1); */
  background-color: mintcream;
  width: 100%;
  height: 100%;
  padding: 20px;
  /* margin-top: 220px; */
  /* flex: 1; */
  /* padding-bottom: 50px; */
  /* margin-bottom: 200px; */
  /* flex-direction: column; */
  /* justify-content: center; */
  /* padding-top: 19px; */
  /* z-Index: 1000; */
`;
export const InvestList =styled.TouchableOpacity`
 border: 1px;
 width: 150px;
 height: 150px;
`
export const InvestDate =styled.View`
 width: 100%;
 height: 40px;
 align-items: center;
`
export const InvestDetail =styled.View`
 border-top-width: 1px;
 width: 100%;
 height: 110px;
 align-items: center;
`
export const InvestText  = styled.Text`
  font-size: 21px;
`;