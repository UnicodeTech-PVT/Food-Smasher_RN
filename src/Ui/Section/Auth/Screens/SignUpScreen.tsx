import React, {useState} from 'react';
import {
  Alert,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {
  AppColors,
  AppImages,
  normalized,
  ScreenProps,
} from '../../../../Utils/AppConstants';
import {setIsLoader} from '../../../../Redux/Reducers/AppReducer';
import {AppRoutes} from '../../../../Utils/Routes';
import auth from '@react-native-firebase/auth';
import {uploadImage} from '../../../../Network/Services/GeneralServices';
import AppImagePicker from '../../../../Components/AppImagePicker';
import {makeid} from '../../../../Utils/Helpers';
import {ScrollView} from 'react-native-gesture-handler';
import CustomInput from '../Components/CustomInput';
import { SignUpHandler } from '../../../../Network/Services/AuthServices';

type ErrorsType = {
  email: string;
  password: string;
  fullName: string;
  bio: string;
};

const SignUpScreen = (props: ScreenProps) => {
  const payload = props?.route?.params?.payload;

  const dispatch = useDispatch();
  const [bio, setBio] = useState('');
  const [email, setEmail] = useState( props?.route?.params?.payload.email);
  const [password, setPassword] = useState<string>('');
  const [fullName, setFullName] = useState<string>( props?.route?.params?.payload.userName);
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

  const [errors, setErrors] = useState<ErrorsType>({
    email: '',
    password: '',
    fullName: '',
    bio: '',
  });
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);
  const [backgroundImage, setBackgroundImage] = useState<any>(null);
  const [profileimage, setProfileimage] = useState<any>(null);

  const validate = (): boolean => {
    if (!backgroundImage && !profileimage) {
      Alert.alert('Error', 'BackgroundImage is required');
      return false;
    }
    let valid = true;
    const newErrors: ErrorsType = {
      email: '',
      password: '',
      fullName: '',
      bio: '',
    };

    if (payload?.socailToken) {
      if (!bio) {
        newErrors.bio = 'Bio is required';
        valid = false;
      }
      if (!profileimage) {
        Alert.alert('Error', 'Profile image is required.');
        valid = false;
      }
      if (!backgroundImage) {
        Alert.alert('Error', 'Background image is required.');
        valid = false;
      }
    } else {
      if (!fullName) {
        newErrors.fullName = 'Full name is required';
        valid = false;
      }
      if (!bio) {
        newErrors.bio = 'Bio is required';
        valid = false;
      }

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

      if (!profileimage) {
        Alert.alert('Error', 'Profile image is required.');
        valid = false;
      }

      if (!backgroundImage) {
        Alert.alert('Error', 'Background image is required.');
        valid = false;
      }
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSignUp = async () => {
    if (!validate()) {
      console.log('Validation failed');
      return;
    }
  
    dispatch(setIsLoader(true)); 
    try {
      if (!payload?.socailToken && password) {
        await auth().createUserWithEmailAndPassword(email, password);
      }

      const [backgroundImageUrl, profileImageUrl] = await Promise.all([
        uploadImage(backgroundImage),
        uploadImage(profileimage),
      ]);
      const params: any = {
        bio,
        fullName,
        email: email.toLowerCase(),
        profileImageUrl,
        backgroundImageUrl,
        userId: makeid(6),
      };
      if (payload?.socailToken) {
        params.socailToken = payload.socailToken;
      } else {
        params.password = password;
      }
      
      SignUpHandler(params, (resp: any) => {
        dispatch(setIsLoader(false)); 
        if (resp.status) {
          console.log('Sign Up Successful: ', resp);
          props?.navigation?.navigate(AppRoutes.Auth.map, { payload:params });
        } else {
          Alert.alert('Error', 'Failed to sign up. Please try again.');
        }
      });
  
    } catch (error) {
      Alert.alert('Error', 'Failed to sign up. Please try again.');
    } finally {
      dispatch(setIsLoader(false));
    }
  };
  
  return (
    <View style={{flex: 1}}>
      <View style={styles.container}>
        <ImageBackground
          source={backgroundImage ? {uri: backgroundImage.uri} : null}
          style={styles.imagebackground}>
          <TouchableOpacity
            style={styles.arrowBackGround}
            onPress={() => props?.navigation?.goBack()}>
            <Image source={AppImages.Home.arrowBack} style={styles.arrow} />
          </TouchableOpacity>
          <AppImagePicker onImageSelected={setBackgroundImage} />
          <Text style={styles.subHeading}>Add Cover Image</Text>
        </ImageBackground>
      </View>

      <TouchableOpacity
        activeOpacity={1}
        style={{
          height: normalized(150),
          position: 'absolute',
          alignSelf: 'center',
          marginTop: normalized(120),
        }}>
        {profileimage ? (
          <Image source={{uri: profileimage.uri}} style={styles.profile} />
        ) : (
          <Image source={AppImages.Home.profle} style={styles.profile} />
        )}
        <View style={styles.CameraIcon}>
          <AppImagePicker onImageSelected={setProfileimage} />
        </View>
      </TouchableOpacity>

      <ScrollView style={styles.ScrolContainer}>
        <View style={styles.BorderContainer}>
          <Text style={styles.EmaiText}>E-mail</Text>
          <CustomInput
            value={email}
            placeholder={'Enter email'}
            onChangeText={(text: string) => setEmail(text)}
          />
          {errors.email ? (
            <Text style={styles.errorText}>{errors.email}</Text>
          ) : null}
          {!payload?.socailToken && (
            <>
              <Text style={styles.PasswordText}>Password</Text>
              <View
                style={[
                  styles.passwordContainer,
                  {
                    borderColor:
                      selectedIndex === 2 ? AppColors.Colorz.orange : '#D0D2D1',
                  },
                ]}>
                <TextInput
                  style={styles.enterPasswordText}
                  onFocus={() => setSelectedIndex(2)}
                  onBlur={() => setSelectedIndex(-1)}
                  placeholder="Enter password"
                  placeholderTextColor={'#30384F'}
                  onChangeText={(text: string) => setPassword(text)}
                  secureTextEntry={!isPasswordVisible}
                />
                <TouchableOpacity
                  onPress={() => setIsPasswordVisible(!isPasswordVisible)}
                  style={styles.eyeIconContainer}>
                  <Image
                    source={AppImages.Home.EyeIcon}
                    style={styles.eyeIcon}
                  />
                </TouchableOpacity>
              </View>
              {errors.password ? (
                <Text style={styles.errorText}>{errors.password}</Text>
              ) : null}
            </>
          )}
          {errors.password ? (
            <Text style={styles.errorText}>{errors.password}</Text>
          ) : null}
          <View>
            <Text style={styles.Namelabel}>Full Name</Text>
            <View
              style={[
                styles.NameInputContainer,
                {
                  borderColor:
                    selectedIndex === 0 ? AppColors.Colorz.orange : '#D0D2D1',
                },
              ]}>
              <TextInput
                style={styles.NameInput}
                onFocus={() => setSelectedIndex(0)}
                onBlur={() => setSelectedIndex(-1)}
                placeholder="Enter your Name"
                placeholderTextColor={'#30384F'}
                value={fullName}
                onChangeText={text => setFullName(text)}
              />
            </View>
            {errors.fullName ? (
              <Text style={styles.errorText}>{errors.fullName}</Text>
            ) : null}
          </View>
          <View>
            <Text style={styles.Biolabel}>Bio</Text>
            <View
              style={[
                styles.BioInputContainer,
                {
                  borderColor:
                    selectedIndex === 1 ? AppColors.Colorz.orange : '#D0D2D1',
                },
              ]}>
              <TextInput
                style={styles.BioConatiner}
                onFocus={() => setSelectedIndex(1)}
                onBlur={() => setSelectedIndex(-1)}
                placeholder="Tell us about yourself.."
                placeholderTextColor={'#30384F'}
                keyboardType="default"
                value={bio}
                onChangeText={setBio}
                multiline={true}
              />
            </View>
            {errors.fullName ? (
              <Text style={styles.errorText}>{errors.fullName}</Text>
            ) : null}
          </View>
          <TouchableOpacity
            style={[
              styles.SignUpButtonWrapper,
              {
                opacity: payload?.socailToken
                  ? bio && profileimage && backgroundImage
                    ? 1
                    : 0.5
                  : email &&
                    password &&
                    fullName &&
                    bio &&
                    profileimage &&
                    backgroundImage
                  ? 1
                  : 0.5,
              },
            ]}
            onPress={handleSignUp}
            disabled={
              payload?.socailToken
                ? !(bio && profileimage && backgroundImage)
                : !(
                    email &&
                    password &&
                    fullName &&
                    bio &&
                    profileimage &&
                    backgroundImage
                  )
            }>
            <Text style={styles.SignUpText}>Sign up</Text>
          </TouchableOpacity>

          <View style={styles.footerContainer}>
            <Text style={styles.accountText}>Already have an account!</Text>
            <TouchableOpacity
              onPress={() => props?.navigation.navigate(AppRoutes.Auth.Login)}>
              <Text style={styles.LoginText}>Log In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    zIndex: -1,
    height: normalized(230),
    width: '100%',
    backgroundColor: AppColors.Colorz.orange,
  },
  imagebackground: {
    flex: 1,
    width: '100%',
    height: 300,
  },
  arrow: {
    height: 15,
    width: 10,
  },
  subHeading: {
    alignSelf: 'center',
    color: AppColors.Colorz.offWhite,
    fontSize: 19,
    fontFamily: 'Poppins-Medium',
  },
  arrowBackGround: {
    shadowColor: 'white',
    elevation: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
    marginVertical: 20,
    height: 35,
    width: 35,
    backgroundColor: AppColors.Colorz.offWhite,
    borderRadius: 12,
  },
  profile: {
    height: normalized(120),
    width: normalized(120),
    borderRadius: 50,
    alignSelf: 'center',
    shadowColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 10,
    borderColor: AppColors.Colorz.offWhite,
  },
  CameraIcon: {
    position: 'absolute',
    bottom: normalized(10),
    right: normalized(-20),
  },
  ScrolContainer: {
    flex: 1,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    backgroundColor: AppColors.Colorz.offWhite,
    zIndex: -1,
    marginTop: -50,
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
  EmaiText: {
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
    color: '#9796A1',
  },
  BorderContainer: {
    top: 80,
    marginHorizontal: 30,
    marginBottom: 80,
  },
  Namelabel: {
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
    color: '#9796A1',
  },
  NameInputContainer: {
    borderWidth: 2,
    borderColor: 'red',
    borderRadius: 10,
    flexDirection: 'row',
    padding: 2,
    marginVertical: 3,
  },
  NameInput: {
    fontSize: 15,
    color: AppColors.Colorz.darkBlue,
    flex: 1,
    paddingHorizontal: 20,
    fontFamily: 'Poppins-Regular',
  },
  passwordContainer: {
    borderWidth: 2,
    borderColor: '#D0D2D1',
    borderRadius: 10,
    flexDirection: 'row',
    padding: 2,
    marginVertical: 3,
  },
  enterPasswordText: {
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
  PasswordText: {
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
    color: '#9796A1',
  },
  BioInputContainer: {
    borderWidth: 2,
    borderColor: '#D0D2D1',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 2,
    minHeight: 70,
    maxHeight: 70,
  },
  Biolabel: {
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
    color: '#9796A1',
  },
  BioConatiner: {
    fontSize: 13,
    color: AppColors.Colorz.darkBlue,
    flex: 1,
    paddingHorizontal: 20,
    alignSelf: 'flex-start',
    fontFamily: 'Poppins-Regular',
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
  LoginText: {
    color: AppColors.Colorz.orange,
    fontFamily: 'Poppins-SemiBold',
  },
  SignUpButtonWrapper: {
    width: '65%',
    backgroundColor: AppColors.Colorz.orange,
    borderRadius: 100,
    alignSelf: 'center',
    marginTop: 30,
  },
  SignUpText: {
    color: AppColors.Colorz.offWhite,
    fontSize: 20,
    fontFamily: 'Poppins-SemiBold',
    textAlign: 'center',
    padding: 12,
  },
});
