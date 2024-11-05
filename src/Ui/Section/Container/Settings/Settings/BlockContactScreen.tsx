import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
  Modal,
  Dimensions,
} from 'react-native';
import {
  AppColors,
  AppImages,
  followersData,
  normalized,
} from '../../../../../Utils/AppConstants';

const {height: screenHeight} = Dimensions.get('window');

const BlockContactScreen = (props: any) => {
  const [contacts, setContacts] = useState(followersData);
  const [selectedContact, setSelectedContact] = useState<any>(null);
  const [modalVisible, setModalVisible] = useState(false);
  const handleUnblock = (id: string) => {
    setContacts(contacts.filter(contact => contact.id !== id));
    setModalVisible(false);
  };
  const openUnblockModal = (contact: any) => {
    setSelectedContact(contact);
    setModalVisible(true);
  };
  const renderItem = ({item}: any) => (
    <View style={styles.contactRow}>
      <View style={styles.contactInfo}>
        <Image source={item.image} style={styles.avatar} />
        <Text style={styles.name}>{item.name}</Text>
      </View>
      <TouchableOpacity
        style={styles.unblockButton}
        onPress={() => openUnblockModal(item)}>
        <Text style={styles.unblockText}>Unblock</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.imageBackGround}
          onPress={() => props?.navigation?.goBack()}
          activeOpacity={0.7}>
          <Image source={AppImages.Home.arrowBack} style={styles.Arrow} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Blocked Contacts</Text>
      </View>
      <View style={styles.Divider} />
      <FlatList
        data={contacts}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View style={styles.Divider1}/>
            <Image source={selectedContact?.image} style={styles.SetImageModal}/>
            <Text style={styles.modalText}>
              Are you sure you want to unblock {selectedContact?.name}?
            </Text>
            <View style={styles.Divider}/>
            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={styles.modalCancelButton}
                onPress={() => setModalVisible(false)}>
                <Text style={styles.modalCancelText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.modalUnblockButton}
                onPress={() => handleUnblock(selectedContact?.id)}>
                <Text style={styles.modalUnblockText}>Unblock</Text>
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
  Divider: {
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    marginTop: normalized(10),
  },
  Divider1: {
    backgroundColor: '#ccccca',
    width: '20%',
    height: 4,
    alignSelf: 'center',
    borderRadius: normalized(20),
    marginBottom: normalized(10),
  },
  header: {
    flexDirection: 'row',
    marginTop: normalized(20),
    marginHorizontal: normalized(15),
    marginBottom: normalized(10),
    gap: normalized(70),
  },
  headerText: {
    fontSize: normalized(15),
    color: AppColors.Colorz.darkBlue,
    fontFamily: 'Poppins-Medium',
  },
  Arrow: {
    height: 15,
    width: 10,
    resizeMode: 'contain',
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
  contactRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: normalized(16),
    paddingVertical: normalized(8),
  },
  contactInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: normalized(35),
    height: normalized(35),
    marginRight: normalized(10),
  },
  name: {
    fontSize: normalized(12),
    color: AppColors.Colorz.darkBlue,
  },
  unblockButton: {
    backgroundColor: AppColors.Colorz.orange,
    paddingHorizontal: normalized(13),
    paddingVertical: normalized(5),
    borderRadius: normalized(15),
  },
  unblockText: {
    color: AppColors.Colorz.offWhite,
    fontSize: normalized(11),
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: AppColors.Colorz.offWhite,
    borderTopLeftRadius: normalized(20),
    borderTopRightRadius: normalized(20),
    padding: normalized(20),
    height: screenHeight * 0.4,
  },
  modalText: {
    fontSize: normalized(14),
    color: AppColors.Colorz.darkBlue,
    marginBottom: normalized(10),
    textAlign: 'center',
  },
  modalButtons: {
    justifyContent: 'space-around',
  },
  modalCancelButton: {
    paddingTop: normalized(20),
  },
  modalUnblockButton: {
    paddingVertical: normalized(7),
  },
  modalCancelText: {
    color: AppColors.Colorz.darkBlue,
    fontSize : normalized(12),
    fontFamily : 'Poppins-Medium',
    alignSelf : 'center'
  },
  modalUnblockText: {
    color: AppColors.Colorz.orange,
    fontSize : normalized(12),
    fontFamily : 'Poppins-Medium',
    alignSelf : 'center'
  },
  SetImageModal : {
    height : normalized(50),
    width : normalized(50),
    alignSelf : 'center',
    marginVertical : normalized(10)
  }
});

export default BlockContactScreen;
