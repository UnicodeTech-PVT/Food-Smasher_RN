import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Image,
} from 'react-native';
import {
  AppColors,
  AppImages,
  chatMessages,
  normalized,
} from '../../../../../Utils/AppConstants';
import {ChatsShow} from '../Components/Model/MessageComponent';

const ChatScreen = (props: any) => {
  const [messageText, setMessageText] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.imageBackGround}
          onPress={() => props?.navigation?.goBack()}>
          <Image source={AppImages.Home.arrowBack} style={styles.Arrow} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.headerText}>James Walker</Text>
          <View style={styles.onlineText}>
            <View style={styles.GreenColor} />
            <Text style={styles.statusText}>Online</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.blockButton}
          onPress={() => setModalVisible(true)}>
          <Image
            source={AppImages.HomeScreenPosts.block}
            style={styles.blockImage}
          />
        </TouchableOpacity>
      </View>

      <FlatList
        data={chatMessages}
        keyExtractor={item => item.id}
        renderItem={ChatsShow}
        style={styles.chatList}
        showsVerticalScrollIndicator={false}
      />

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Say something..."
          value={messageText}
          onChangeText={setMessageText}
        />
        <TouchableOpacity style={styles.sendButton}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>

      <Modal visible={modalVisible} transparent={true} animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Image
              source={AppImages.RankScreenPics.rank2}
              style={styles.modalImage}
            />
            <Text style={styles.modalText}>
              Do you really wish to block James Walker?
            </Text>
            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={styles.blockButtonConfirm}
                onPress={() => {
                  setModalVisible(false);
                }}>
                <Text style={styles.blockButtonText}>Block</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.cancelButton}
                onPress={() => setModalVisible(false)}>
                <Text style={styles.cancelButtonText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ececec',
    marginHorizontal: normalized(10),
    marginTop: normalized(10),
  },
  onlineText: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
  },
  GreenColor: {
    height: normalized(9),
    width: normalized(9),
    backgroundColor: 'green',
    borderRadius: 20,
    marginBottom: normalized(4),
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
    marginBottom: normalized(10),
  },
  headerText: {
    fontSize: normalized(14),
    color: AppColors.Colorz.darkBlue,
    fontFamily: 'Poppins-Medium',
  },
  statusText: {
    fontSize: normalized(10),
    marginBottom: normalized(5),
  },
  blockImage: {
    height: normalized(20),
    width: normalized(20),
    resizeMode: 'contain',
  },
  blockButton: {
    marginHorizontal: normalized(10),
    marginBottom: normalized(10),
  },
  chatList: {
    flex: 1,
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 16,
    backgroundColor: '#fff',
    borderTopColor: '#ececec',
    alignItems: 'center',
  },
  textInput: {
    flex: 1,
    backgroundColor: '#f1f3f6',
    borderRadius: normalized(10),
    paddingHorizontal: normalized(13),
    height: normalized(40),
    fontSize: normalized(13),
  },
  sendButton: {
    marginLeft: 10,
    backgroundColor: AppColors.Colorz.orange,
    borderRadius: 20,
    paddingHorizontal: normalized(15),
    paddingVertical: normalized(7),
  },
  sendButtonText: {
    color: AppColors.Colorz.offWhite,
    fontFamily: 'Poppins-Medium',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: normalized(10),
    padding: normalized(15),
    alignItems: 'center',
  },
  modalImage: {
    width: normalized(60),
    height: normalized(60),
  },
  modalText: {
    fontSize: normalized(13),
    textAlign: 'center',
    marginVertical: normalized(15),
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  blockButtonConfirm: {
    backgroundColor: AppColors.Colorz.orange,
    padding: 12,
    borderRadius: 10,
    flex: 1,
    alignItems: 'center',
    marginRight: 10,
  },
  blockButtonText: {
    color: AppColors.Colorz.offWhite,
    fontWeight: 'bold',
  },
  cancelButton: {
    backgroundColor: '#ddd',
    padding: 12,
    borderRadius: 10,
    flex: 1,
    alignItems: 'center',
  },
  cancelButtonText: {
    color: AppColors.Colorz.darkBlue,
    fontWeight: 'bold',
  },
});

export default ChatScreen;
