import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import HeadComp from '../Components/HeadComp';
import { AppColors } from '../../../../Utils/AppConstants'
import { NavigationProp } from '@react-navigation/native';

interface OtpScreenProps {
  navigation: NavigationProp<any>;
}
const OtpScreen: React.FC<OtpScreenProps> = (props) => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [otp, setOtp] = useState<string[]>(['', '', '', '']); 
  const handleInputChange = (index: number, value: string) => {
    const newOtp = [...otp];
    newOtp[index] = value; 
        setOtp(newOtp);
    if (value && index < 3) {
      setSelectedIndex(index + 1);
    }
    if (!value && index > 0) {
      setSelectedIndex(index - 1);
    }
  };
  const isButtonEnabled = otp.every((digit) => digit !== ''); 
  return (
    <View>
      <HeadComp />
      <View style={styles.container}>
        <Text style={styles.heading}>Verification Code</Text>
        <Text style={styles.subHeading}>
          Please type the verification code sent to prelookstudio@gmail.com
        </Text>
        <View style={styles.inputContainer}>
          {[0, 1, 2, 3].map((index) => (
            <TextInput
              key={index}
              style={[styles.inputBox, { borderColor: selectedIndex === index ? AppColors.Colorz.orange : '#D0D2D1' }]}
              maxLength={1}
              keyboardType="numeric"
              onFocus={() => setSelectedIndex(index)}
              onChangeText={(value) => handleInputChange(index, value)} 
              value={otp[index]} 
            />
          ))}
        </View>
        <View style={styles.footerContainer}>
          <Text style={styles.accountText}>I don't receive a code!</Text>
          <TouchableOpacity>
            <Text style={styles.resendText}>Please resend</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={[styles.verifyButtonWrapper, { opacity: isButtonEnabled ? 1 : 0.5 }]} 
          onPress={() => isButtonEnabled}
          disabled={!isButtonEnabled} 
        >
          <Text style={styles.verifyText}>Verify</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OtpScreen;

const styles = StyleSheet.create({
  container: {
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
  resendText: {
    color: AppColors.Colorz.orange,
    fontFamily: 'Poppins-Medium',
  },
  verifyButtonWrapper: {
    width: '65%',
    backgroundColor: AppColors.Colorz.orange,
    borderRadius: 100,
    alignSelf: 'center',
    marginVertical: 50,
  },
  verifyText: {
    color: AppColors.Colorz.offWhite,
    fontSize: 19,
    fontFamily: 'Poppins-SemiBold',
    textAlign: 'center',
    padding: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginVertical: 20,
  },
  inputBox: {
    width: 60,
    height: 60,
    borderWidth: 2,
    borderRadius: 10,
    textAlign: 'center',
    fontSize: 24,
    color: '#FF5722',
  },
});
