import React from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import {AppRoutes} from '../../../../../Utils/Routes';
import {
  AppColors,
  AppImages,
  messages,
  normalized,
} from '../../../../../Utils/AppConstants';
import {MessageItem} from '../Components/Model/MessageComponent';

const MessageScreen = ({navigation}: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.blank} />
        <Text style={styles.headerText}>Messages</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate(AppRoutes.Home.Notification)}>
          <Image
            source={AppImages.HomeScreenPosts.Notification}
            style={styles.notificationStyle}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.InputContainer}>
        <Image source={AppImages.BottomScreen.Search} style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Search here..."
          placeholderTextColor="grey"
        />
      </View>
      <FlatList
        data={messages}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <MessageItem item={item} navigation={navigation} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: normalized(15),
    paddingTop: normalized(10),
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    zIndex: 2,
    width: '100%',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  headerText: {
    fontSize: normalized(16),
    fontFamily: 'Poppins-Medium',
    color: AppColors.Colorz.darkBlue,
    alignSelf: 'center',
    flex: 1,
    right: normalized(20),
  },
  blank: {
    flex: 1,
  },
  notificationStyle: {
    height: normalized(20),
    width: normalized(20),
    resizeMode: 'contain',
    marginHorizontal: normalized(10),
  },
  icon: {
    marginRight: 8,
    height: normalized(14),
    width: normalized(14),
    tintColor: 'grey',
  },
  InputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 0.3,
    borderColor: 'grey',
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: 1,
    marginHorizontal: normalized(7),
    marginBottom: normalized(5),
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: AppColors.Colorz.darkBlue,
  },
});

export default MessageScreen;
