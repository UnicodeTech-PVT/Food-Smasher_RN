import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  FlatList,
} from 'react-native';
import {
  AppColors,
  AppImages,
  normalized,
  popularImages,
  trendingImages,
} from '../../../../../Utils/AppConstants';
import {AppRoutes} from '../../../../../Utils/Routes';

const screenWidth = Dimensions.get('window').width;

const ProfileScreen = (props: any) => {
  const [activeTab, setActiveTab] = useState(0);
  const scrollViewRef = useRef(null);
  const handleTabChange = tabIndex => {
    setActiveTab(tabIndex);
    scrollViewRef.current.scrollTo({x: tabIndex * screenWidth, animated: true});
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.profileTitle}>Profile</Text>
       <View style={styles.SettingsStyle}>
       <TouchableOpacity 
       onPress={()=>{props?.navigation?.navigate(AppRoutes.Home.Notification)}}>
       <Image  source ={AppImages.HomeScreenPosts.Notification} style={styles.headerIcons}></Image>
       </TouchableOpacity>
       <TouchableOpacity
       onPress={()=>{props?.navigation?.navigate(AppRoutes.Home.Settings)}}>
       <Image  source ={AppImages.ProfileScreen.Settings} style={styles.headerIcons}></Image>
       </TouchableOpacity>
       </View>
      </View>
      <View style={styles.profileInfo}>
        <Image
          source={AppImages.RankScreenPics.rank1}
          style={styles.profileImage}
        />
        <Text style={styles.profileName}>Mark Spencer</Text>
        <Text style={styles.profileHandle}>@spencer_mark</Text>
        <Text style={styles.profileBio}>
          Feasting my way through life, one bite at a time.
        </Text>

        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>90</Text>
            <Text style={styles.statLabel}>Posts</Text>
          </View>
         <TouchableOpacity onPress={()=>props?.navigation?.navigate(AppRoutes.Home.followers)}>
         <View style={styles.statItem}>
            <Text style={styles.statNumber}>20.5k</Text>
            <Text style={styles.statLabel}>Followers</Text>
          </View>
         </TouchableOpacity>
         <TouchableOpacity onPress={()=>props?.navigation?.navigate(AppRoutes.Home.followers)}>
         <View style={styles.statItem}>
            <Text style={styles.statNumber}>105</Text>
            <Text style={styles.statLabel}>Following</Text>
          </View>
         </TouchableOpacity>
        </View>
      </View>
      <View style={styles.tabContainer}>
        <TouchableOpacity
          onPress={() => handleTabChange(0)}
          style={styles.tabButton}>
          <Image
            source={AppImages.ProfileScreen.category}
            style={[
              styles.TabButtons,
              {tintColor: activeTab === 0 ? AppColors.Colorz.orange : 'black'},
            ]}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleTabChange(1)}
          style={styles.tabButton}>
          <Image
            source={AppImages.ProfileScreen.play}
            style={[
              styles.TabButtons,
              {tintColor: activeTab === 1 ? AppColors.Colorz.orange : 'black'},
            ]}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleTabChange(2)}
          style={styles.tabButton}>
          <Image
            source={AppImages.HomeScreenPosts.Fav}
            style={[
              styles.TabButtons,
              {tintColor: activeTab === 2 ? AppColors.Colorz.orange : 'black'},
            ]}
          />
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal
        pagingEnabled
        ref={scrollViewRef}
        onMomentumScrollEnd={event => {
          const pageIndex = Math.round(
            event.nativeEvent.contentOffset.x / screenWidth,
          );
          setActiveTab(pageIndex);
        }}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}>
        <View style={[styles.page, {width: screenWidth}]}>
          <View style={styles.photoGrid}>
            <FlatList
              data={trendingImages}
              showsVerticalScrollIndicator={false}
              keyExtractor={item => item.id}
              numColumns={3}
              renderItem={({item}) => (
                <TouchableOpacity
                  onPress={() => {
                    props?.navigation?.navigate(
                      AppRoutes.Home.profileComponent,
                      {
                        imge: item.imageUrl,
                        id: item.id,
                      },
                    );
                  }}>
                  <Image source={item.imageUrl} style={styles.image} />
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
        <View style={[styles.page, {width: screenWidth}]}>
          <FlatList
            data={popularImages}
            showsVerticalScrollIndicator={false}
            keyExtractor={item => item.id}
            numColumns={3}
            renderItem={({item}) => (
              <Image source={item.imageUrl} style={styles.image} />
            )}
          />
        </View>
        <View style={[styles.page, {width: screenWidth}]}>
          <Text style={styles.tabContent}>Favorites content here</Text>
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
    flexDirection : "row",
    justifyContent : 'center',
    alignItems : 'center',
    marginTop : normalized(15),
  },
  SettingsStyle :{
    flexDirection : 'row',
    left : normalized(90)
  },
  headerIcons: {
    height : normalized(20),
    width : normalized(20),
    resizeMode : 'contain',
    marginLeft :10
  },
  profileTitle: {
    color: AppColors.Colorz.darkBlue,
    fontSize: normalized(16),
    fontFamily: 'Poppins-SemiBold',
    alignSelf: 'center',
    marginLeft : normalized(47)
  },
  profileInfo: {
    alignItems: 'center',
  },
  profileImage: {
    height: normalized(60),
    width: normalized(60),
    marginBottom: normalized(5),
    borderWidth: 1.5,
    borderColor: AppColors.Colorz.orange,
    borderRadius: 50,
  },
  profileName: {
    fontFamily: 'Poppins-Medium',
    color: AppColors.Colorz.darkBlue,
    fontSize: normalized(13),
  },
  profileHandle: {
    fontSize: normalized(11),
    color: AppColors.Colorz.orange,
    backgroundColor: '#dee0e0',
    borderRadius: normalized(14),
    padding: normalized(7),
  },
  profileBio: {
    fontSize: normalized(10),
    marginVertical: normalized(10),
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginVertical: 20,
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    color: AppColors.Colorz.darkBlue,
    fontFamily: 'Poppins-SemiBold',
    fontSize: normalized(14),
  },
  statLabel: {
    fontSize: normalized(13),
    fontFamily: 'Poppins-Medium',
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderBottomWidth: 1,
    borderColor: '#e6e6e6',
  },
  tabButton: {
    paddingBottom: normalized(10),
  },
  TabButtons: {
    height: normalized(25),
    width: normalized(25),
    resizeMode: 'contain',
  },
  page: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  photoGrid: {},
  tabContent: {
    fontSize: 16,
    textAlign: 'center',
  },
  image: {
    width: normalized(117),
    height: normalized(113),
    margin: 5,
  },
});

export default ProfileScreen;
