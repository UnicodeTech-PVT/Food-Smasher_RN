import { Image, StyleSheet, Text, View } from "react-native";
import { AppColors, AppImages, normalized } from "../../../../../Utils/AppConstants";

  export const profiles = [
    { id: '1', name: 'James Walker', text : 'View',views: ': 1.8M views', rank: 1, image: AppImages.RankScreenPics.rank },
    { id: '2', name: 'Lisa Harmon', text : 'View', views: ': 825k views', rank: 2, image: AppImages.RankScreenPics.rank1 },
    { id: '3', name: 'Paul Smith', text : 'View', views: ': 768k views', rank: 3, image: AppImages.RankScreenPics.rank2 },
    { id: '4', name: 'Foodie World', text : 'View', views: ': 705k views', rank: 4, image: AppImages.RankScreenPics.rank3 },
    { id: '5', name: 'Emma Watson', text : 'View', views: ': 684k views', rank: 5, image: AppImages.RankScreenPics.rank4 },
    { id: '6', name: 'Eat Sleep Repeat', text : 'View', views: ': 623k views', rank: 6, image: AppImages.RankScreenPics.rank5},
    { id: '7', name: 'Hannah Mayers', text : 'View', views: ': 570k views', rank: 7, image: AppImages.RankScreenPics.rank6 },
    { id: '8', name: 'Sandy Williams', text : 'View', views: ': 501k views', rank: 8, image: AppImages.RankScreenPics.rank7 },
    { id: '9', name: 'Food & Fun', text : 'View', views: ': 405k views', rank: 9, image: AppImages.RankScreenPics.rank8 },
    { id: '10', name: 'Victor Vandrof', text : 'View', views: ': 326k views', rank: 10, image: AppImages.RankScreenPics.rank9 },
    { id: '11', name: 'Hannah Mayers', text : 'View', views: ': 570k views', rank: 11, image: AppImages.RankScreenPics.rank6 },
    { id: '12', name: 'Sandy Williams', text : 'View', views: ': 501k views', rank: 12, image: AppImages.RankScreenPics.rank7 },
    { id: '13', name: 'Food & Fun', text : 'View', views: ': 405k views', rank: 13, image: AppImages.RankScreenPics.rank8 },
    { id: '14', name: 'Victor Vandrof', text : 'View', views: ': 326k views', rank: 14, image: AppImages.RankScreenPics.rank9 },
  ];
 
  export const renderItem = ({ item }:any) => (
    <View style={styles.profileItem}>
      <View style={styles.profileLeft}>
        <Image source={item.image } style={styles.profileImage} />
        <View>
          <Text style={styles.profileName}>{item.name}</Text>
         <View style ={styles.ProfileText}>
         <Text style={styles.profileViews}>{item.text}</Text>
         <Text style={styles.profileView}>{item.views}</Text>
         </View>
        </View>
      </View>
      <View style={styles.rankCircle}>
        <Text style={styles.rankText}>{item.rank}</Text>
      </View>
    </View>
  );

  const styles = StyleSheet.create({
    profileItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 10,
      },
      profileLeft: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      profileImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
      },
      profileName: {
        fontSize: 16,
        fontWeight: 'bold',
      },
      profileViews: {
        fontSize: 14,
        color: 'gray',
      },
      profileView: {
        fontSize: 14,
        color: AppColors.Colorz.orange,
      },
      rankCircle: {
        width: 30,
        height: 30,
        borderRadius: 15,
        backgroundColor: AppColors.Colorz.orange,
        justifyContent: 'center',
        alignItems: 'center',
      },
      rankText: {
        color: '#fff',
        fontWeight: 'bold',
      },
      ProfileText : {
        flexDirection : 'row'
      },
  })