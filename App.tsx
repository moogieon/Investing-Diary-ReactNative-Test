import {NavigationContainer} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import DetailPage from './src/screen/units/detailPage/DetailPage.container';
import LoginPage from './src/screen/units/loginPage/LoginPage.container';
import MainPage from './src/screen/units/mainPage/MainPage.container';
import SingUpPage from './src/screen/units/singUpPage/SinUpPage.container';
import WritePage from './src/screen/units/writePage/WritePage.container';

export type ParamList = {
  Main: undefined;
  Login: undefined;
  Signup: undefined;
  Detail: undefined;
  Write: undefined;
};
export type Props = NativeStackScreenProps<ParamList>;

const HomeStack = createNativeStackNavigator<ParamList>();
const App = () => {
  const [accessToken, setAccessToken] = useState('');
  const [userInfo, setUserInfo] = useState<IUserInfo>();

  return (
    <>
      <NavigationContainer>
        <HomeStack.Navigator>
          <HomeStack.Screen
            name="Main"
            component={MainPage}
            options={{
              title: 'Main',
              headerShown: false,
            }}
          />
          <HomeStack.Screen
            name="Login"
            component={LoginPage}
            options={{
              title: 'Login',
              headerShown: false,
            }}
          />
          <HomeStack.Screen
            name="Signup"
            component={SingUpPage}
            options={{
              title: 'Signup',
              headerShown: false,
            }}
          />
          <HomeStack.Screen
            name="Detail"
            component={DetailPage}
            options={{
              title: 'Detail',
              headerShown: false,
            }}
          />
          <HomeStack.Screen
            name="Write"
            component={WritePage}
            options={{
              title: 'Write',
              headerShown: false,
            }}
          />
        </HomeStack.Navigator>
      </NavigationContainer>
    </>
  );
};
export default App;
