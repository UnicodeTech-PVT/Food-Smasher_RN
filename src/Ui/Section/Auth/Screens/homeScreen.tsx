import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {AppColors, AppImages} from '../../../../Utils/AppConstants';
import {AppRoutes} from '../../../../Utils/Routes';
import {NavigationProp} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {setIsLoader, setUserData} from '../../../../Redux/Reducers/AppReducer';
import SocialAuthManager from '../../../../Hooks/SocialAuthManager';
import {
  checkUserInCollection,
  socialAuthCheckRequest,
} from '../../../../Network/Services/AuthServices';
import { setUserDataInAsync } from '../../../../Utils/AsyncStorage';

interface HomeScreenProps {
  navigation: NavigationProp<any>;
}

const HomeScreen: React.FC<HomeScreenProps> = props => {
  const {gmailLoginRequest} = SocialAuthManager();
  const dispatch = useDispatch();

  const checkUserStatusFun = (data: any) => {
    if (!data?.location) {
      props?.navigation?.navigate(AppRoutes.Auth.map, {payload: data});
    } else if (!data?.categories) {
      props?.navigation?.navigate(AppRoutes.Auth.catagory, {
        payload: data,
      });
    } else {
      dispatch(setUserData(data));
      setUserDataInAsync(data) 
    }
  };

  async function onGoogleButtonPress() {
    dispatch(setIsLoader(true));
    let socialParams: any = await gmailLoginRequest();
    if (socialParams?.token) {
      const paramsObj = {
        email: socialParams?.email?.toLocaleLowerCase() || '',
        userName: socialParams?.first_name + ' ' + socialParams?.last_name,
        socailToken: socialParams?.token,
      };

      await socialAuthCheckRequest(paramsObj, async (response: any) => {
        if (
          response?.message === 'That email address is already in use!' ||
          response?.message === 'That email address is invalid!'
        ) {
          await checkUserInCollection(paramsObj, async (res: any) => {
            dispatch(setIsLoader(false));
            if (res?.status && res?.data) {
              checkUserStatusFun(res?.data);
            } else {
              props?.navigation?.navigate(AppRoutes.Auth.SignUp, {
                payload: paramsObj,
              });
            }
          });
        } else {
          dispatch(setIsLoader(false));
          props?.navigation?.navigate(AppRoutes.Auth.SignUp, {
            payload: paramsObj,
          });
        }
      }).catch(e => {
        dispatch(setIsLoader(false));
      });
    } else {
      dispatch(setIsLoader(false));
    }
  }

  return (
    <View>
      <ImageBackground source={AppImages.Home.home} style={styles.container}>
        <ImageBackground
          source={AppImages.Home.Lineargradient}
          style={styles.container}>
          <View style={styles.viewStyle}>
            <Image source={AppImages.Home.LogoImage} style={styles.Logo} />
            <Text style={styles.textDesign}>Welcome To</Text>
            <Text style={styles.heading}>Food Smashers</Text>
            <Text style={styles.paragraph}>
              A New Way of Promoting Businesses, Learning How to Cook Food,
              Eating and Posting Delicious Food.
            </Text>
            <View style={styles.bottomView}>
              <View style={styles.line1}>
                <View style={styles.line} />
                <Text style={styles.continueText}>Sign in with</Text>
                <View style={styles.line} />
              </View>
              <View style={styles.buttons}>
                <TouchableOpacity
                  style={styles.googleButtonContainer}
                  onPress={() =>
                    onGoogleButtonPress().then(() =>
                      console.log('Signed in with Google!'),
                    )
                  }>
                  <Image
                    source={AppImages.Home.google}
                    style={styles.googleImage}
                  />
                  <Text style={styles.googleText}>Google</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.googleButtonContainer}>
                  <Image
                    source={AppImages.Home.Apple}
                    style={styles.googleImage}
                  />
                  <Text style={styles.googleText}>Apple</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                style={styles.googleButtoncontainer}
                onPress={() =>
                  props?.navigation?.navigate(AppRoutes.Auth.SignUp)
                }>
                <Text style={styles.emailorPhone}>
                  Start with Email or Phone
                </Text>
              </TouchableOpacity>
              <View style={styles.footerContainer}>
                <Text style={styles.accountText}>Already have an account!</Text>
                <TouchableOpacity
                  onPress={() =>
                    props.navigation.navigate(AppRoutes.Auth.Login)
                  }>
                  <Text style={styles.signupText}>Sign In</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ImageBackground>
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  viewStyle: {
    marginHorizontal: 25,
    flex: 1,
  },
  container: {
    height: '100%',
    width: '100%',
  },
  Logo: {
    marginTop: 30,
    height: 60,
    width: 60,
  },
  textDesign: {
    fontSize: 25,
    fontFamily: 'Poppins-Medium',
    color: AppColors.Colorz.orange,
  },
  heading: {
    marginTop: -11,
    fontSize: 27,
    color: AppColors.Colorz.orange,
    fontFamily: 'Poppins-SemiBold',
  },
  paragraph: {
    fontSize: 17,
    color: AppColors.Colorz.darkBlue,
    fontFamily: 'Poppins-Regular',
  },
  googleButtonContainer: {
    width: '46%',
    flexDirection: 'row',
    backgroundColor: AppColors.Colorz.offWhite,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 13,
    gap: 15,
  },
  googleImage: {
    height: 30,
    width: 30,
  },
  googleText: {
    fontSize: 18,
    color: AppColors.Colorz.darkBlue,
    fontFamily: 'Poppins--SemiBold',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    gap: 5,
  },
  accountText: {
    color: AppColors.Colorz.offWhite,
    fontFamily: 'Poppins-Regular',
  },
  signupText: {
    color: AppColors.Colorz.offWhite,
    fontFamily: 'Poppins-SemiBold',
  },
  googleButtoncontainer: {
    flexDirection: 'row',
    borderWidth: 2,
    marginVertical: 25,
    borderColor: AppColors.Colorz.offWhite,
    backgroundColor: '#5C5E6C',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 13,
    gap: 10,
  },
  bottomView: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  emailorPhone: {
    margin: 1,
    fontSize: 16,
    color: AppColors.Colorz.offWhite,
  },
  continueText: {
    textAlign: 'center',
    fontSize: 16,
    color: AppColors.Colorz.offWhite,
    marginBottom: 20,
  },
  line: {
    flex: 1,
    backgroundColor: AppColors.Colorz.offWhite,
    borderWidth: 0.4,
    borderColor: AppColors.Colorz.offWhite,
    marginBottom: 15,
    marginHorizontal: 20,
  },
  line1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
