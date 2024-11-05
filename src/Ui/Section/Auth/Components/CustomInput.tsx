import React, {useState} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
import {AppColors,} from '../../../../Utils/AppConstants';

interface CustomInputProps {
  value: string;
  placeholder: string;
  onChangeText: (text: string) => void;
}

const CustomInput: React.FC<CustomInputProps> = ({
  value,
  placeholder,
  onChangeText,
}) => {
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);
  return (
    <View>
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
          placeholder={placeholder}
          placeholderTextColor={'#30384F'}
          keyboardType="email-address"
          value={value}
          onChangeText={onChangeText}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    borderWidth: 2,
    borderColor: '#D0D2D1',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 2,
    marginVertical: 3,
    marginBottom: 15,
  },
  textInput: {
    fontSize: 15,
    color: AppColors.Colorz.darkBlue,
    flex: 1,
    paddingHorizontal: 20,
    alignSelf: 'center',
    fontFamily: 'Poppins-Regular',
  },
});

export default CustomInput;
