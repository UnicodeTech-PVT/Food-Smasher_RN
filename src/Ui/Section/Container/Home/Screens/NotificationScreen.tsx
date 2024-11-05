import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { AppColors, AppImages, normalized, notifications } from '../../../../../Utils/AppConstants';

const NotificationScreen = (props:any) => {
  const renderItem = ({ item }:any) => (
    <View style={styles.notificationItem}>
      <Image source={item.avatar} style={styles.avatar} />
      <View style={styles.textContainer}>
        <Text style={styles.name}>{item.name} <Text style={styles.action}>{item.action}</Text></Text>
      </View>
      {item.followable && (
        <TouchableOpacity style={styles.followButton}>
          <Text style={styles.followText}>Follow</Text>
        </TouchableOpacity>
      )}
    </View>
  );

  return (
    <View style={styles.container}>
        <View style={styles.headerContainer}>
        <TouchableOpacity
          style={styles.imageBackGround}
          onPress={() => props?.navigation?.goBack()}>
          <Image source={AppImages.Home.arrowBack} style={styles.Arrow} />
        </TouchableOpacity>
      <Text style={styles.header}>Notifications</Text>
      <View style={styles.blank}/>
        </View>
      <FlatList
        data={notifications}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    padding: normalized(18),
  },
  header: {
    fontSize : normalized(16),
    fontFamily : 'Poppins-Medium',
    color : AppColors.Colorz.darkBlue,
    marginLeft : normalized(50)
  },
  notificationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
  },
  avatar: {
    width: normalized(40),
    height: normalized(40),
    marginRight: normalized(10),
  },
  textContainer: {
    flex: 1,
    flexDirection : 'row',
    alignContent: 'center',
    gap :10,
  },
  name: {
    width : normalized(210),
    fontSize : normalized(12),
    fontFamily : 'Poppins-Medium',
    color : AppColors.Colorz.darkBlue
  },
  action: {
    fontSize: normalized(10),
    color: '#808080',
  },
  followButton: {
    backgroundColor: '#e6e6e6',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 13,
  },
  followText: {
    color: AppColors.Colorz.darkBlue,
    fontFamily : 'Poppins-Medium'
  },
  Arrow: {
    height: 15,
    width: 10,
  },
  imageBackGround: {
    shadowColor: 'black',
    elevation: 5,
    alignItems: 'center',
    justifyContent: 'center',
    height: normalized(27),
    width: normalized(27),
    backgroundColor: AppColors.Colorz.offWhite,
    borderRadius: 12,
    marginRight : normalized(20)
  },
  headerContainer : {
    flexDirection: 'row',
    alignItems: 'center',
    width : '100%',
  },
  blank : {
    flex : 1
  }
});

export default NotificationScreen;
