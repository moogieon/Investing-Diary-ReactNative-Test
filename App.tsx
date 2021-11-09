import {NavigationContainer} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from 'react';
import DetailPage from './src/screen/units/detailPage/DetailPage.container';
import LoginPage from './src/screen/units/loginPage/LoginPage.container';
import MainPage from './src/screen/units/mainPage/MainPage.container';
import SingUpPage from './src/screen/units/singUpPage/SinUpPage.container';
import WritePage from './src/screen/units/writePage/WritePage.container';

import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

export type ParamList = {
  Main: undefined;
  Login: undefined;
  Signup: undefined;
  Detail: undefined;
  Write: undefined;
};
export type Props = NativeStackScreenProps<ParamList>;
interface IContext {
  accessToken?: any;
  setAccessToken?: Dispatch<SetStateAction<undefined>>;
  setUser?: Dispatch<SetStateAction<undefined>>;
  user?: number;
  assetsCount?: any;
  setAssetsCount?: React.Dispatch<any>;
}

export const GlobalContext = createContext<IContext>({});
const HomeStack = createNativeStackNavigator<ParamList>();

const App = () => {
  useEffect(() => {
    async function bbb() {
      const aaa = await AsyncStorage.getItem('accessToken');
      const ccc = await AsyncStorage.getItem('userInfo');
      const resultList = await axios.get(
        'https://the-rich-coding-test1.herokuapp.com/assets.json',
      );
      setAccessToken(aaa);
      setAssets(resultList.data);
      setUser(ccc);
    }

    bbb();
  }, []);

  const [accessToken, setAccessToken] = useState();

  const [assets, setAssets] = useState([]);
  const [user, setUser] = useState();

  const value = {
    accessToken: accessToken,
    setAccessToken: setAccessToken,
    user: user,
    setUser: setUser,
    setAssets: setAssets,
    assets: assets,
  };
  console.log('Token', accessToken);
  return (
    <>
      <GlobalContext.Provider value={value}>
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
      </GlobalContext.Provider>
    </>
  );
};
export default App;
