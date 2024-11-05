import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  AppColors,
  AppImages,
  mockData,
} from '../../../../../Utils/AppConstants';

import {StackNavigationProp} from '@react-navigation/stack';
import {AppRoutes} from '../../../../../Utils/Routes';
import CommentViewModal from '../Components/Model/CommentsModal';
import SaveViewModel from '../Components/Model/SaveFiles';
import { HomeComponent } from '../Components/HomeComponents';

type HomeScrenProps = {
  navigation: StackNavigationProp<any>;
};

const HomeScren: React.FC<HomeScrenProps> = props => {
  const [iscommentsModal, setIsCommentModal] = useState<boolean>(false);
  const [isFavModal , setIsFavModal] = useState<boolean>(false);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image source={AppImages.Home.LogoImage} style={styles.LogoIcon} />
        <TouchableOpacity
        activeOpacity={1}
        onPress={()=>{}}>
        <Text style={styles.headerText}>Home</Text>
        </TouchableOpacity>
        <View style={styles.headerIconList}>
          <TouchableOpacity
            onPress={() => {
              props?.navigation?.navigate(AppRoutes.Home.Ranking);
            }}>
            <Image
              source={AppImages.HomeScreenPosts.Star}
              style={styles.headerIcon1}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              props?.navigation?.navigate(AppRoutes.Home.Notification);
            }}>
            <Image
              source={AppImages.HomeScreenPosts.Notification}
              style={styles.headerIcon}
            />
          </TouchableOpacity>
        </View>
      </View>
      <FlatList
        data={mockData}
        keyExtractor={item => item.id}
        renderItem={({item, index}: any) => {
          return (
            <HomeComponent
              singleItem={item}
              atComentPress={() => {
                setIsCommentModal(true);
              }}
              atFavPress= {()=>{
                setIsFavModal(true);
              }}
            />
          );
        }}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />
      {iscommentsModal && (
        <CommentViewModal
          onClose={() => {
            setIsCommentModal(false);
          }}
        />
      )}

      {isFavModal&&(
        <SaveViewModel
        onclose = {()=>{
          setIsFavModal(false)
        }}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginHorizontal: 15,
    marginBottom: 10,
  },
  headerText: {
    fontSize: 22,
    color: AppColors.Colorz.darkBlue,
    fontFamily: 'Poppins-Medium',
    marginTop: -5,
  },
  headerIcon: {
    height: 22,
    width: 20,
  },
  LogoIcon: {
    marginTop: 3,
    height: 26,
    width: 25,
  },
  headerIcon1: {
    height: 22,
    width: 23,
  },
  listContainer: {
    paddingHorizontal: 15,
  },
  headerIconList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 20,
  },
});

export default HomeScren;
