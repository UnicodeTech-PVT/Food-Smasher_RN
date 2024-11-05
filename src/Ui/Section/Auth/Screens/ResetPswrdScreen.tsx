import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import auth from '@react-native-firebase/auth'; 
import HeadComp from '../Components/HeadComp';
import { AppColors, AppImages } from '../../../../Utils/AppConstants';
import { AppRoutes } from '../../../../Utils/Routes';
import { NavigationProp } from '@react-navigation/native';

interface ResetPswrdScreenProps {
  navigation: NavigationProp<any>;
}

const ResetPswrdScreen: React.FC<ResetPswrdScreenProps> = (props) => {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (input: string) => {
    setEmail(input);
    if (validateEmail(input)) {
      setEmailError('');
    } else {
      setEmailError('Please enter a valid email address');
    }
  };

  const handleSendEmail = async () => {
    if (validateEmail(email)) {
      try {
        await auth().sendPasswordResetEmail(email);

        setSuccessMessage('Password reset email sent successfully.');
        
        setTimeout(() => {
          setSuccessMessage('');
          props?.navigation?.navigate(AppRoutes.Auth.OTP); 
        }, 2000);
      } catch (error) {
        setEmailError('Failed to send email. Please try again.');
      }
    }
  };

  const isButtonEnabled = validateEmail(email);

  return (
    <View>
      <HeadComp />
      <TouchableOpacity
        style={styles.imageBackGround}
        onPress={() => props?.navigation?.goBack()}>
        <Image source={AppImages.Home.arrowBack} style={styles.Arrow} />
      </TouchableOpacity>
      <View style={styles.container}>
        <Text style={styles.heading}>Reset Password</Text>
        <Text style={styles.subHeading}>
          Please enter your email address to receive a password reset link
        </Text>
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
            placeholder="Enter your email"
            placeholderTextColor={'#30384F'}
            keyboardType="email-address"
            value={email}
            onChangeText={handleEmailChange}
          />
        </View>
        {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}

        {successMessage ? (
          <Text style={styles.successText}>{successMessage}</Text>
        ) : null}

        <TouchableOpacity
          style={[
            styles.VerifyButtonWrapper,
            { opacity: isButtonEnabled ? 1 : 0.5 },
          ]}
          onPress={handleSendEmail}
          disabled={!isButtonEnabled}>
          <Text style={styles.VerifyText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ResetPswrdScreen;

const styles = StyleSheet.create({
  Arrow: {
    height: 15,
    width: 10,
  },
  imageBackGround: {
    shadowColor: '#000',
    elevation: 5,
    top: -165,
    left: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
    marginVertical: 20,
    height: 35,
    width: 35,
    backgroundColor: AppColors.Colorz.offWhite,
    borderRadius: 12,
  },
  container: {
    top: -50,
    marginHorizontal: 45,
  },
  heading: {
    fontSize: 34,
    fontFamily: 'Poppins-SemiBold',
    color: AppColors.Colorz.darkBlue,
  },
  subHeading: {
    marginTop: -3,
    fontSize: 14,
    color: '#9796A1',
    textAlign: 'left',
  },
  inputContainer: {
    borderWidth: 2,
    borderColor: '#D0D2D1',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 2,
    marginVertical: 40,
  },
  textInput: {
    fontSize: 13,
    color: AppColors.Colorz.darkBlue,
    flex: 1,
    paddingHorizontal: 20,
    alignSelf: 'center',
    fontFamily: 'Poppins-Regular',
  },
  VerifyButtonWrapper: {
    width: '75%',
    backgroundColor: AppColors.Colorz.orange,
    borderRadius: 100,
    alignSelf: 'center',
    marginVertical: 40,
  },
  VerifyText: {
    color: AppColors.Colorz.offWhite,
    fontSize: 17,
    fontFamily: 'Poppins-Medium',
    textAlign: 'center',
    padding: 13,
  },
  errorText: {
    color: 'red',
    fontSize: 14,
    textAlign: 'center',
  },
  successText: {
    color: 'green',
    fontSize: 14,
    textAlign: 'center',
    marginTop: 10,
  },
});
