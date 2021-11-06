import React, {useEffect} from 'react';
import {Alert} from 'react-native';
import {Props} from '../../../../App';
// import { GlobalContext } from "../../../../pages/_app";

const withAuth =
  (Component: any) =>
  ({navigation}: Props, props: any) => {
    // const { accessToken } = useContext(GlobalContext);

    useEffect(() => {
      if (!localStorage.getItem('refreshToken')) {
        // localStorage.setItem("accessToken", JSON.stringify(accessToken));
        Alert.alert('로그인이 필요한 페이지입니다.');

        navigation.navigate('Main');
      }
    }, []);

    // if (!localStorage.getItem("accessToken")) {
    //   return <></>;
    // }

    return <Component {...props} />;
  }; // 이게 자세한 설명 ..

export default withAuth;
