import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import DetailPage from './src/screen/units/detailPage/DetailPage.container';
import LoginPage from './src/screen/units/loginPage/LoginPage.container';
import MainPage from './src/screen/units/mainPage/MainPage.container';
import SingUpPage from './src/screen/units/singUpPage/SinUpPage.container';
import WritePage from './src/screen/units/writePage/WritePage.container';

const HomeStack = createNativeStackNavigator();
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
