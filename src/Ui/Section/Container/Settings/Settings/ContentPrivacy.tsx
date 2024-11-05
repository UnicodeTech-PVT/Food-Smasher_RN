import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { AppColors, AppImages, normalized } from '../../../../../Utils/AppConstants';

const ContentPrivacy = (props:any) => {
  const [selectedOption, setSelectedOption] = useState('Everyone');

  const handleOptionPress = (option: string) => {
    setSelectedOption(option);
  };

  return (
    <View style={styles.container}>
        <View style={styles.header}>
      <TouchableOpacity
            style={styles.imageBackGround}
            onPress={() => props?.navigation?.goBack()}
            activeOpacity={0.7}
          >
            <Image source={AppImages.Home.arrowBack} style={styles.Arrow} />
          </TouchableOpacity>
        <Text style={styles.headerText}>Content Privacy</Text>
      </View>
      <View style={styles.Divider}/>
      <View style={styles.content}>
        <Text style={styles.sectionTitle}>Who can see your profile & content?</Text>
        <TouchableOpacity
          style={styles.optionRow}
          onPress={() => handleOptionPress('Everyone')}
        >
          <Text style={styles.optionText}>Everyone</Text>
          <View style={selectedOption === 'Everyone' ? styles.selectedCircle : styles.circle} />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.optionRow}
          onPress={() => handleOptionPress('Followers only')}
        >
          <Text style={styles.optionText}>Followers only</Text>
          <View style={selectedOption === 'Followers only' ? styles.selectedCircle : styles.circle} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    marginTop: normalized(15),
    marginHorizontal: normalized(15),
    gap :normalized(80)
  },
  headerText: {
    fontSize: normalized(16),
    color: AppColors.Colorz.darkBlue,
    fontFamily: 'Poppins-Medium',
  },
  Divider : {
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    marginTop : normalized(10)
  },
  Arrow: {
    height: 15,
    width: 10,
    resizeMode : 'contain'
  },
  imageBackGround: {
    shadowColor: 'black',
    elevation: 5,
    alignItems: 'center',
    justifyContent: 'center',
    height: 35,
    width: 35,
    backgroundColor: AppColors.Colorz.offWhite,
    borderRadius: 12,
  },
  content: {
    paddingHorizontal: normalized(20),
    marginTop : normalized(20)
  },
  sectionTitle: {
    fontSize : normalized(13),
    color : AppColors.Colorz.darkBlue,
    fontFamily : 'Poppins-Medium'
  },
  optionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: normalized(15),
  },
  optionText: {
    fontSize : normalized(12),
    color : AppColors.Colorz.darkBlue
  },
  circle: {
    height: normalized(16),
    width: normalized(16),
    borderRadius: normalized(10),
    borderWidth: 1,
    backgroundColor: '#fff',
  },
  selectedCircle: {
    height: normalized(16),
    width: normalized(16),
    borderRadius: normalized(10),
    backgroundColor : AppColors.Colorz.orange
  },
});

export default ContentPrivacy;
