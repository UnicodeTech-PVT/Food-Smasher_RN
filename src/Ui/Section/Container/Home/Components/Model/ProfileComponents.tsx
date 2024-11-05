import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AppColors, AppImages, normalized, profileData } from '../../../../../../Utils/AppConstants';
import  { ProfileInfo } from '../HomeComponents';
import CommentViewModal from './CommentsModal';
import SaveViewModel from './SaveFiles';
import SponsorViewModal from './SponsorComponent';
import EditViewPost from './EditPost';

const ProfileScreenComponent = ({ route, navigation }: any) => {
  const { id } = route.params;
  const [iscommentsModal, setIsCommentModal] = useState<boolean>(false);
  const [isFavModal, setIsFavModal] = useState<boolean>(false);
  const [isSponsor, setIsSponsor] = useState<boolean>(false);
  const [isEditPost, setIsEditPost] = useState<boolean>(false);


  
  const matchedIndex = profileData.findIndex(item => item.id === id);
  const numOfPostsToShow = 2; 
  const dataToShow = [
    ...profileData.slice(Math.max( matchedIndex + numOfPostsToShow), matchedIndex),
    profileData[matchedIndex],
    ...profileData.slice(matchedIndex + 1, matchedIndex + 1 + numOfPostsToShow)
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
      <TouchableOpacity
            style={styles.imageBackGround}
            onPress={() => navigation?.goBack()}
            activeOpacity={0.7}
          >
            <Image source={AppImages.Home.arrowBack} style={styles.Arrow} />
          </TouchableOpacity>
        <Text style={styles.headerText}>Post</Text>
      </View>
      <FlatList
        data={dataToShow} 
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => {
          return (
            <ProfileInfo
              singleItem={item}
              atComentPress={() => {
                setIsCommentModal(true);
              }}
              atFavPress={() => {
                setIsFavModal(true);
              }}
              atSponsorPress = {()=>
               {
                setIsSponsor(true)
               }
              }
              atEditButton = {()=>
                {
                 setIsEditPost(true)
                }
               }
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
      {isFavModal && (
        <SaveViewModel
          onclose={() => {
            setIsFavModal(false);
          }}
        />
      )}
       {isSponsor && (
        <SponsorViewModal
          onClose={() => {
            setIsSponsor(false);
          }}
        />
      )}
      {isEditPost && (
        <EditViewPost
        isShow = {isEditPost}
          onClose={() => {
            setIsEditPost(false);
          }}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal : normalized(7)
  },
  header: {
    flexDirection: 'row',
    marginTop: 20,
    marginHorizontal: 15,
    marginBottom: 10,
    gap :normalized(120)
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

export default ProfileScreenComponent;
