import React from 'react';
import { View, Text, StyleSheet, Switch, TouchableOpacity, ScrollView, Image } from 'react-native';
import { AppColors, AppImages, normalized } from '../../../../../Utils/AppConstants';
import CustomSwitch from '../../Home/Components/CustomSwitch';
import { AppRoutes } from '../../../../../Utils/Routes';

const SettingScreen = (props:any) => {
  const [isEnabled, setIsEnabled] = React.useState(true);
  
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

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
        <Text style={styles.headerText}>Settings</Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.section}>
          <View style={styles.row}>
            <Text style={styles.label}>Notifications</Text>
            {/* <CustomSwitch
          value={isEnabled}
          onToggle={toggleSwitch }
        /> */}
          </View>
          <TouchableOpacity style={styles.row}>
            <Text style={styles.itemText}>Saved Post</Text>
            <Image source={AppImages.Home.arrowForward} style={styles.arrow} />
          </TouchableOpacity>
        </View>
        <Text style={styles.sectionHeader}>Privacy settings</Text>
        <View style={styles.Divider}/>
        <View style={styles.section}>
          <TouchableOpacity style={styles.row}
          onPress={()=>{props?.navigation?.navigate(AppRoutes.Home.contentPrivacy)}}>
            <Text style={styles.itemText}>Who can see your content</Text>
            <Image source={AppImages.Home.arrowForward} style={styles.arrow} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.row}
          onPress={()=>{props?.navigation?.navigate(AppRoutes.Home.BlockContact)}}>
            <Text style={styles.itemText}>Blocked Contacts</Text>
            <Image source={AppImages.Home.arrowForward} style={styles.arrow} />
          </TouchableOpacity>
        </View>
        <Text style={styles.sectionHeader}>More info & support</Text>
        <View style={styles.Divider}/>
        <View style={styles.section}>
          <TouchableOpacity style={styles.row}>
            <Text style={styles.itemText}>Help & Support</Text>
            <Image source={AppImages.Home.arrowForward} style={styles.arrow} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.row}>
            <Text style={styles.itemText}>About us</Text>
            <Image source={AppImages.Home.arrowForward} style={styles.arrow} />
          </TouchableOpacity>
        </View>
        <Text style={styles.sectionHeader}>App Policies</Text>
        <View style={styles.Divider}/>
        <View style={styles.section}>
          <TouchableOpacity style={styles.row}>
            <Text style={styles.itemText}>Privacy Policy</Text>
            <Image source={AppImages.Home.arrowForward} style={styles.arrow} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.row}>
            <Text style={styles.itemText}>Terms & Conditions</Text>
            <Image source={AppImages.Home.arrowForward} style={styles.arrow} />
          </TouchableOpacity>
        </View>
        <Text style={styles.dangerZoneHeader}>Danger Zone</Text>
        <View style={styles.Divider}/>
        <View style={styles.section}>
          <TouchableOpacity style={styles.row}>
            <Text style={styles.itemText}>Logout</Text>
            <Image source={AppImages.Home.arrowForward} style={styles.arrow} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.row}>
            <Text style={styles.itemText}>Delete Account</Text>
            <Image source={AppImages.Home.arrowForward} style={styles.arrow} />
          </TouchableOpacity>
        </View>
      </ScrollView>
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
    gap :normalized(100)
  },
  headerText: {
    fontSize: normalized(16),
    color: AppColors.Colorz.darkBlue,
    fontFamily: 'Poppins-Medium',
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
  arrow: {
    height: 15,
    width: 10,
    resizeMode : 'contain',
  },
  scrollContainer: {
    paddingHorizontal: normalized(20),
    paddingBottom : normalized(20)
  },
  section: {
    marginVertical: normalized(4),
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
  },
  Divider : {
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  label: {
    fontSize : normalized(12),
    color : AppColors.Colorz.darkBlue
  },
  itemText: {
    fontSize : normalized(12),
    color : AppColors.Colorz.darkBlue
  },
  sectionHeader: {  
    fontSize: normalized(12),
    color: AppColors.Colorz.orange,
    marginBottom: normalized(10),
    fontFamily : 'Poppins-SemiBold'
  },
  dangerZoneHeader: {
    fontSize: normalized(12),
    color: '#FF0000',
    marginBottom: normalized(10),
    fontFamily : 'Poppins-SemiBold'
  },
});

export default SettingScreen;
