import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import LoginPage from '../units/loginPage/LoginPage.container';
import MainPage from '../units/mainPage/MainPage.container';
const HomeStack = createNativeStackNavigator();
const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={MainPage}
        options={{
          title: 'Home',
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
      {/* <HomeStack.Screen
        name="AreaPage"
        component={AreaPage}
        options={{
          title: 'AreaPage',
          headerShown: false,
        }}
      /> */}
    </HomeStack.Navigator>
  );
};
export default HomeStackScreen;
