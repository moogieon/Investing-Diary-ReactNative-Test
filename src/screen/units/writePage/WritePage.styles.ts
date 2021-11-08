import styled from '@emotion/native';

export const Container = styled.View`
  width: 100%;
  height: 100%;
`;
export const Head = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: black;
`;

export const Button = styled.TouchableOpacity`
  align-self: center;
`;

export const User = styled.Text`
  font-size: 35px;
  color: white;
`;

export const Login = styled.Text`
  font-size: 20px;
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

  align-items: center;
  justify-content: space-between;
`;
export const InvestList = styled.View`
  width: 100%;
  height: 100%;
  align-items: center;
  margin-top: 10px;
  padding-left: 10px;
  padding-right: 10px;
`;
export const InvestDate = styled.Text`
  color: gold;
`;
export const InvestDatePicker = styled.TouchableOpacity`
  height: 40px;
  width: 100%;
  border-bottom-color: #bdbdbd;
  border-bottom-width: 1px;
  align-items: center;
  justify-content: center;
`;

export const BodyWraaper = styled.View`
  width: 100%;
  height: 100%;
  justify-content: flex-start;
  /* padding: 20px; */

  margin-top: 20px;
`;
export const InvestTitle = styled.TextInput`
  width: 100%;
  height: 45px;
  border-bottom-color: #bdbdbd;
  border-bottom-width: 1px;
  font-size: 12px;
  margin-bottom: 10px;
`;
export const InvestContents = styled.TextInput`
  width: 100%;
  font-size: 12px;
  margin-bottom: 20px;
`;
export const WriteBox = styled.View`
  width: 100%;
  height: 30%;
`;
export const InvestDetail = styled.View`
  border: 1px;
  width: 100px;
  height: 160px;
  padding: 10px;
  border-radius: 30px;
  margin-right: 10px;
`;
export const InvestAdd = styled.TouchableOpacity`
  border: 1px;
  width: 100px;
  height: 160px;
  padding: 10px;
  border-radius: 30px;
  margin-right: 10px;
  justify-content: center;
  align-items: center;
`;
export const Invests = styled.View`
  margin-top: 10px;
  width: 100%;
  height: 160px;
`;
export const AmountBox = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10px;
  width: 100%;
  height: 20px;
`;
export const InvestText = styled.Text`
  font-size: 16px;
`;
export const SubmitText = styled.Text`
  font-size: 15px;
  color: white;
  /* line-height: 45px; */
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
export const Add = styled.Text`
  font-size: 18px;
  color: blue;
`;
export const Remove = styled.Text`
  font-size: 18px;
  color: red;
`;
export const SubmitBtn = styled.TouchableOpacity``;
