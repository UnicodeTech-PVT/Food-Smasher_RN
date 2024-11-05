import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  Alert,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Modal,
} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {useWindowDimensions} from 'react-native';
import {
  AppColors,
  AppImages,
  followersData,
  followingData,
  normalized,
} from '../../../../../Utils/AppConstants';

const FollowersList = () => {
  const [followers, setFollowers] = useState(followersData);
  const [selectedFollower, setSelectedFollower] = useState<any>(null);
  const [modalVisible, setModalVisible] = useState(false);

  const confirmRemoveFollower = (follower: any) => {
    setSelectedFollower(follower);
    setModalVisible(true);
  };

  const removeFollower = () => {
    setFollowers(followers.filter(f => f.id !== selectedFollower.id));
    setModalVisible(false);
  };
  const renderItem = ({item}: any) => (
    <View>
      <View style={styles.listItem}>
        <View style={styles.Name}>
          <Image source={item.image} style={styles.avatar} />
          <View style={styles.followText}>
            <Text style={styles.name}>{item.name}</Text>
            <TouchableOpacity style={styles.button} onPress={() => {}}>
              <Text style={styles.buttonText}>Follow</Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity
          style={styles.removeButton}
          onPress={() => confirmRemoveFollower(item)}>
          <Text style={styles.removeButtonText}>Remove</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.Divider} />
    </View>
  );

  return (
    <View style={{flex: 1}}>
      <View style={styles.InputContainer}>
        <Image source={AppImages.BottomScreen.Search} style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Search here..."
          placeholderTextColor="grey"
        />
      </View>
      <FlatList
        data={followers}
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
            <View style={styles.Divider1} />
            <Image
              source={selectedFollower?.image}
              style={styles.SetImageModal}
            />
            <Text style={styles.modalText}>
              Are you sure you want to remove {selectedFollower?.name}?
            </Text>
            <View style={styles.divider} />
            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={styles.modalCancelButton}
                onPress={() => setModalVisible(false)}>
                <Text style={styles.modalCancelText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.modalRemoveButton}
                onPress={removeFollower}>
                <Text style={styles.modalRemoveText}>Remove</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const FollowingList = () => {
  const [following, setFollowing] = useState(followingData);
  const [selectedFollowing, setSelectedFollowing] = useState<any>(null);
  const [modalVisible, setModalVisible] = useState(false);

  const confirmRemoveFollowing = (following: any) => {
    setSelectedFollowing(following);
    setModalVisible(true);
  };

  const removeFollowing = () => {
    setFollowing(following.filter(f => f.id !== selectedFollowing.id));
    setModalVisible(false);
  };

  const renderItem = ({item}: any) => (
    <View>
      <View style={styles.listItem}>
        <Image source={item.image} style={styles.avatar} />
        <Text style={styles.name}>{item.name}</Text>
        <TouchableOpacity
          style={styles.followingButton}
          onPress={() => confirmRemoveFollowing(item)}>
          <Text style={styles.buttonText1}>Following</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.Divider} />
    </View>
  );

  return (
    <View style={{flex: 1}}>
      <View style={styles.InputContainer}>
        <Image source={AppImages.BottomScreen.Search} style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Search here..."
          placeholderTextColor="grey"
        />
      </View>
      <FlatList
        data={following}
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
            <View style={styles.Divider1} />
            <Image
              source={selectedFollowing?.image}
              style={styles.SetImageModal}
            />
            <Text style={styles.modalText}>
              Do you really wish to unfollow {selectedFollowing?.name}?
            </Text>
            <View style={styles.divider} />
            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={styles.modalCancelButton}
                onPress={() => setModalVisible(false)}>
                <Text style={styles.modalCancelText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.modalRemoveButton}
                onPress={removeFollowing}>
                <Text style={styles.modalRemoveText}>unFollow</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const renderScene = SceneMap({
  followers: FollowersList,
  following: FollowingList,
});

const FollowersFollowingScreen = (props: any) => {
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'followers', title: 'Followers'},
    {key: 'following', title: 'Following'},
  ]);

  return (
    <View style={{flex: 1}}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.imageBackGround}
          onPress={() => props?.navigation?.goBack()}
          activeOpacity={0.7}>
          <Image source={AppImages.Home.arrowBack} style={styles.Arrow} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Add Caption</Text>
      </View>
      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{width: layout.width}}
        renderTabBar={props => (
          <TabBar
            {...props}
            indicatorStyle={styles.indicator}
            style={styles.tabBar}
            renderLabel={({route, focused}) => (
              <Text
                style={[
                  styles.label,
                  {
                    color: focused
                      ? AppColors.Colorz.orange
                      : AppColors.Colorz.darkBlue,
                  },
                ]}>
                {route.title}
              </Text>
            )}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: AppColors.Colorz.offWhite,
  },
  label: {
    color: AppColors.Colorz.darkBlue,
    fontSize: normalized(11),
    fontFamily: 'Poppins-Medium',
  },
  indicator: {
    backgroundColor: AppColors.Colorz.orange,
    width: '30%',
    left: normalized(35),
  },
  Divider: {
    height: 1,
    width: '70%',
    backgroundColor: '#dee0e0',
    alignSelf: 'center',
  },
  divider: {
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
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: normalized(10),
    justifyContent: 'space-between',
  },
  followText: {
    flexDirection: 'row',
    width: normalized(140),
    height: normalized(30),
    marginTop: normalized(5),
  },
  Name: {
    flexDirection: 'row',
    alignContent: 'center',
  },
  avatar: {
    width: normalized(40),
    height: normalized(40),
    marginRight: normalized(8),
  },
  name: {
    flex: 1,
    color: AppColors.Colorz.darkBlue,
    fontFamily: 'Poppins-SmeiBold',
    fontSize: normalized(13),
    top: 5,
  },
  button: {
    borderColor: '#dee0e0',
    borderWidth: 1,
    paddingHorizontal: normalized(10),
    paddingVertical: normalized(5),
    borderRadius: normalized(12),
    bottom: 3,
  },
  buttonText: {
    color: AppColors.Colorz.orange,
  },
  buttonText1: {
    color: AppColors.Colorz.darkBlue,
  },
  removeButton: {
    backgroundColor: '#dee0e0',
    paddingHorizontal: normalized(10),
    paddingVertical: normalized(5),
    borderRadius: normalized(12),
  },
  removeButtonText: {
    color: AppColors.Colorz.darkBlue,
  },
  followingButton: {
    backgroundColor: '#dee0e0',
    paddingHorizontal: normalized(10),
    paddingVertical: normalized(5),
    borderRadius: normalized(13),
  },
  header: {
    flexDirection: 'row',
    marginTop: 20,
    marginHorizontal: 15,
    marginBottom: 10,
    gap: normalized(90),
  },
  headerText: {
    fontSize: 22,
    color: AppColors.Colorz.darkBlue,
    fontFamily: 'Poppins-Medium',
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
    height: 35,
    width: 35,
    backgroundColor: AppColors.Colorz.offWhite,
    borderRadius: 12,
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
    borderRadius: normalized(10),
    paddingHorizontal: 10,
    paddingVertical: 1,
    marginHorizontal: normalized(7),
    marginBottom: normalized(5),
    marginTop: normalized(8),
    backgroundColor: '#D9D9D9',
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: AppColors.Colorz.darkBlue,
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
    height: '40%',
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
  modalRemoveButton: {
    paddingVertical: normalized(7),
  },
  modalCancelText: {
    color: AppColors.Colorz.darkBlue,
    fontSize: normalized(12),
    fontFamily: 'Poppins-Medium',
    alignSelf: 'center',
  },
  modalRemoveText: {
    color: AppColors.Colorz.orange,
    fontSize: normalized(12),
    fontFamily: 'Poppins-Medium',
    alignSelf: 'center',
  },
  SetImageModal: {
    height: normalized(50),
    width: normalized(50),
    alignSelf: 'center',
    marginVertical: normalized(10),
  },
});

export default FollowersFollowingScreen;
