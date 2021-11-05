import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import LoginPage from './src/screen/units/loginPage/LoginPage.container';
import MainPage from './src/screen/units/mainPage/MainPage.container';

import SingUpPage from './src/screen/units/singUpPage/SingUpPage.container';

export type StackList = {
  Main: undefined;
  Login: undefined;
  Singup: undefined;
};
const HomeStack = createNativeStackNavigator<StackList>();
const App = () => {
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
            name="Singup"
            component={SingUpPage}
            options={{
              title: 'Singup',
              headerShown: false,
            }}
          />
        </HomeStack.Navigator>
      </NavigationContainer>
    </>
  );
};
export default App;
