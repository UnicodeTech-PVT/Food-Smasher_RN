import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {AppColors, AppImages} from '../../../../Utils/AppConstants';
import HeadComp from '../Components/HeadComp';
import {AppRoutes} from '../../../../Utils/Routes';
import {StackNavigationProp} from '@react-navigation/stack';
import {useDispatch} from 'react-redux';
import {setIsLoader, setUserData} from '../../../../Redux/Reducers/AppReducer';
import SocialAuthManager from '../../../../Hooks/SocialAuthManager';
import {
  checkUserInCollection,
  loginHandler,
  socialAuthCheckRequest,
} from '../../../../Network/Services/AuthServices';
import { setUserDataInAsync } from '../../../../Utils/AsyncStorage';

type LoginScreenProps = {
  navigation: StackNavigationProp<any>;
};

type ErrorsType = {
  email: string;
  password: string;
};

const LoginScreen: React.FC<LoginScreenProps> = props => {
  const {gmailLoginRequest} = SocialAuthManager();
  const dispatch = useDispatch();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const [errors, setErrors] = useState<ErrorsType>({email: '', password: ''});

  const validate = (): boolean => {
    let valid = true;
    const newErrors: ErrorsType = {email: '', password: ''};

    const emailPattern = /\S+@\S+\.\S+/;
    if (!email) {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (!emailPattern.test(email)) {
      newErrors.email = 'Invalid email address';
      valid = false;
    }

    if (!password) {
      newErrors.password = 'Password is required';
      valid = false;
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSignIn = async () => {
    if (validate()) {
      try {
        dispatch(setIsLoader(true));
        const payload = {
          email : email.toLocaleLowerCase(),
          password :password,
        };

        await loginHandler(payload, (resp: any) => {
        dispatch(setIsLoader(false));
          
          if (resp.status) {
            if (resp.data) {
              if (!resp.data.location) {
                props?.navigation?.navigate(AppRoutes.Auth.map, {
                  payload: resp.data,
                });
              } else if (!resp.data.categories) {
                props?.navigation?.navigate(AppRoutes.Auth.catagory, {
                  payload: resp.data,
                });
              } else {
                dispatch(setUserData(resp.data));
                setUserData(resp.data);
              }
            }
          } else {
            console.log('Login failed');
          }
        });
        
      } catch (error: any) {
        dispatch(setIsLoader(false))
        if (error.code === 'auth/user-not-found') {
          setErrors(prevErrors => ({
            ...prevErrors,
            email: 'No user found with this email.',
          }));
        } else if (error.code === 'auth/wrong-password') {
          setErrors(prevErrors => ({
            ...prevErrors,
            password: 'Incorrect password.',
          }));
        } else {
          console.error('Login Error:', error);
        }
      } finally {
        dispatch(setIsLoader(false))
      }
    } else {
      console.log('Validation failed');
    }
  };
  
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
      <HeadComp />
      <View style={styles.viewStyle}>
        <Text style={styles.signupText}>Sign In</Text>
        <Text style={styles.textStyle}>E-mail</Text>
        <View
          style={[
            styles.inputContainer,
            {
              borderColor:
                selectedIndex === 0 ? AppColors.Colorz.orange : '#D0D2D1',
            },
          ]}>
          <TextInput
            style={styles.textInput}
            onFocus={() => setSelectedIndex(0)}
            onBlur={() => setSelectedIndex(-1)}
            placeholder="Enter email"
            placeholderTextColor={'#30384F'}
            onChangeText={(text: string) => setEmail(text)}
          />
        </View>
        {errors.email ? (
          <Text style={styles.errorText}>{errors.email}</Text>
        ) : null}

        <Text style={styles.textStyle}>Password</Text>
        <View
          style={[
            styles.inputContainer,
            {
              borderColor:
                selectedIndex === 1 ? AppColors.Colorz.orange : '#D0D2D1',
            },
          ]}>
          <TextInput
            style={styles.textInput}
            onFocus={() => setSelectedIndex(1)}
            onBlur={() => setSelectedIndex(-1)}
            placeholder="Enter password"
            placeholderTextColor={'#30384F'}
            onChangeText={(text: string) => setPassword(text)}
            secureTextEntry={!isPasswordVisible}
          />
          <TouchableOpacity
            onPress={() => setIsPasswordVisible(!isPasswordVisible)}
            style={styles.eyeIconContainer}>
            <Image source={AppImages.Home.EyeIcon} style={styles.eyeIcon} />
          </TouchableOpacity>
        </View>
        {errors.password ? (
          <Text style={styles.errorText}>{errors.password}</Text>
        ) : null}
        <TouchableOpacity
          onPress={() => props?.navigation.navigate(AppRoutes.Auth.Reset)}>
          <Text style={styles.forgotPasswordText}>Forgot Password ?</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.loginButtonWrapper,
            {opacity: email && password ? 1 : 0.5},
          ]}
          onPress={()=>{handleSignIn()}}
          disabled={!email || !password}>
          <Text style={styles.loginText}>Sign In</Text>
        </TouchableOpacity>

        <View style={styles.footerContainer}>
          <Text style={styles.accountText}>Don't have an account!</Text>
          <TouchableOpacity
            onPress={() => props?.navigation.navigate(AppRoutes.Auth.SignUp)}>
            <Text style={styles.signupText1}>Sign Up</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.line1}>
          <View style={styles.line} />
          <Text style={styles.continueText}>sign in with</Text>
          <View style={styles.line} />
        </View>
        <View style={styles.buttons}>
          <TouchableOpacity
            style={styles.googleButtonContainer}
            onPress={() => onGoogleButtonPress()}>
            <Image source={AppImages.Home.google} style={styles.googleImage} />
            <Text style={styles.googleText}>Google</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.googleButtonContainer}>
            <Image source={AppImages.Home.Apple} style={styles.googleImage} />
            <Text style={styles.googleText}>Apple</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default LoginScreen;

const styles = StyleSheet.create({
  viewStyle: {
    marginHorizontal: 25,
  },
  signupText: {
    fontSize: 30,
    top: -90,
    left: 13,
    fontFamily: 'Poppins-SemiBold',
    color: AppColors.Colorz.darkBlue,
  },
  loginButtonWrapper: {
    width: '65%',
    backgroundColor: AppColors.Colorz.orange,
    borderRadius: 100,
    alignSelf: 'center',
  },
  loginText: {
    color: AppColors.Colorz.offWhite,
    fontSize: 20,
    fontFamily: 'Poppins-SemiBold',
    textAlign: 'center',
    padding: 10,
  },
  forgotPasswordText: {
    textAlign: 'center',
    marginTop: -65,
    color: AppColors.Colorz.orange,
    fontFamily: 'Poppins-Medium',
    marginVertical: 20,
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
    gap: 7,
  },
  accountText: {
    color: AppColors.Colorz.darkBlue,
    fontFamily: 'Poppins-Regular',
  },
  signupText1: {
    color: AppColors.Colorz.orange,
    fontFamily: 'Poppins-SemiBold',
  },
  continueText: {
    textAlign: 'center',
    fontSize: 16,
    color: AppColors.Colorz.darkBlue,
    marginBottom: 20,
  },
  googleButtonContainer: {
    width: '46%',
    flexDirection: 'row',
    backgroundColor: '#D0D2D1',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 13,
    gap: 15,
    marginVertical: 20,
  },
  googleImage: {
    height: 30,
    width: 30,
  },
  googleText: {
    fontSize: 18,
    color: AppColors.Colorz.darkBlue,
    fontFamily: 'Poppins-SemiBold',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  line: {
    flex: 1,
    backgroundColor: AppColors.Colorz.darkBlue,
    borderWidth: 0.5,
    marginBottom: 15,
    marginHorizontal: 20,
  },
  line1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    top: -80,
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
    color: '#9796A1',
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
    top: -70,
  },
  inputContainer: {
    top: -80,
    marginBottom: 13,
    borderWidth: 2,
    borderColor: '#D0D2D1',
    borderRadius: 10,
    flexDirection: 'row',
    padding: 2,
    marginVertical: 3,
  },
  textInput: {
    fontSize: 15,
    color: AppColors.Colorz.darkBlue,
    flex: 1,
    paddingHorizontal: 20,
    fontFamily: 'Poppins-Regular',
  },
  eyeIconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  eyeIcon: {
    height: 20,
    width: 27,
    tintColor: AppColors.Colorz.orange,
  },
});
