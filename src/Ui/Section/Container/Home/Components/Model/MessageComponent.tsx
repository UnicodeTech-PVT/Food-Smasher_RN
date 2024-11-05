import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {AppRoutes} from '../../../../../../Utils/Routes';
import {AppColors, normalized} from '../../../../../../Utils/AppConstants';

export const MessageItem = ({item, navigation}: any) => {
  return (
    <TouchableOpacity
      style={styles.messageContainer}
      onPress={() => navigation.navigate(AppRoutes.Home.Chat)}>
      <Image source={item.avatar} style={styles.avatar} />
      <View style={styles.textContainer}>
        <View style={styles.nameTimeContainer}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.time}>{item.time}</Text>
        </View>
        <View style={styles.messageStatusContainer}>
          <Text
            style={[
              styles.message,
              item.unread ? styles.unreadMessage : styles.readMessage,
            ]}>
            {item.message}
          </Text>
          {item.unread && <View style={styles.unreadIndicator} />}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export const ChatsShow = ({item}: any) => (
  <View>
    <View
      style={[
        styles.messageContainer1,
        item.isSender ? styles.senderContainer : styles.receiverContainer,
      ]}>
      <Text style={styles.messageText}>{item.message}</Text>
    </View>
    <Text
      style={[
        styles.messageTime,
        item.isSender ? styles.senderTime : styles.receiverTime,
      ]}>
      {item.time}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  messageContainer: {
    flexDirection: 'row',
    paddingVertical: normalized(10),
  },
  avatar: {
    width: normalized(40),
    height: normalized(40),
    marginRight: normalized(10),
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  nameTimeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  name: {
    fontSize: normalized(13),
    fontFamily: 'Poppins-Medium',
    color: AppColors.Colorz.darkBlue,
  },
  time: {
    fontSize: normalized(10),
    color: '#666',
  },
  messageStatusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  message: {
    fontSize: normalized(10),
    color: 'red',
  },
  unreadMessage: {
    color: AppColors.Colorz.orange,
  },
  readMessage: {
    color: '#888',
  },
  unreadIndicator: {
    width: normalized(15),
    height: normalized(15),
    borderRadius: normalized(20),
    backgroundColor: AppColors.Colorz.orange,
    marginRight: normalized(8),
  },
  senderContainer: {
    alignSelf: 'flex-end',
    backgroundColor: AppColors.Colorz.darkBlue,
  },
  receiverContainer: {
    alignSelf: 'flex-start',
    backgroundColor: AppColors.Colorz.orange,
  },
  messageText: {
    color: AppColors.Colorz.offWhite,
    fontSize: 16,
  },
  messageTime: {
    fontSize: normalized(10),
    color: AppColors.Colorz.darkBlue,
    alignSelf: 'flex-end',
    width: '100%',
    marginBottom: normalized(5),
  },
  messageContainer1: {
    padding: 10,
    borderRadius: normalized(18),
    maxWidth: '75%',
    marginRight: normalized(10),
    marginLeft: normalized(10),
    marginTop: normalized(10),
  },
  senderTime: {
    textAlign: 'right',
    right: normalized(10),
  },
  receiverTime: {
    textAlign: 'left',
    left: normalized(10),
  },
});
