import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { AppColors, AppImages, normalized } from "../../../../../Utils/AppConstants";


 export const HomeComponent = ( props:any ) => {
    const item=props?.singleItem

    
return(
  <View style={styles.postContainer}>
      <View style={styles.userContainer}>
        <Image source={ item.user.image} style={styles.profileImage} />
        <View style={styles.userInfo}>
          <Text style={styles.userName}>{item.user.name}</Text>
          <Text style={styles.userLocation}>{item.user.location}</Text>
        </View>
       <View style ={styles.PostHeader}>
       <TouchableOpacity style={styles.followButton}>
          <Text style={styles.followText}>Follow</Text>
        </TouchableOpacity>
        <TouchableOpacity>
            <Image source={AppImages.HomeScreenPosts.dots} style={styles.dotImage}></Image>
        </TouchableOpacity>
       </View>
      </View>

      <Image source={ item.postImage } style={styles.postImage} />
      <View style ={styles.BottomBar}>
        <TouchableOpacity
        onPress={()=>{
          props?.atFavPress();
        }}
       >
          <Image source={AppImages.HomeScreenPosts.Fav} style = {styles.FavIcon}></Image>  
        </TouchableOpacity>
      <View style={styles.postActions}>
        <TouchableOpacity>
          <Image source={AppImages.HomeScreenPosts.heart} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity
        onPress={()=>{
          props?.atComentPress()
        }}
        >
          <Image source={AppImages.HomeScreenPosts.Chat} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={AppImages.HomeScreenPosts.Share} style={styles.icon} />
        </TouchableOpacity>
      </View>
      </View>

      <View style={styles.likeInfo}>
        <Text style={styles.likesText}>Liked by</Text>
        <Text style={styles.LikedText}>{item.likes.join(', ')}</Text>
      </View>

      <Text style={styles.postDescription}>
        <Text style={styles.userName}>{item.user.name.toLowerCase()}</Text> {item.description}
      </Text>

      <Text style={styles.timeAgo}>{item.timeAgo}</Text>

      <TouchableOpacity
      onPress={()=>{
          props?.atComentPress()
        }}>
        <Text style={styles.viewComments}>Show all comments ({item.commentsCount})</Text>
      </TouchableOpacity>
    </View>
)
  }
  export const ProfileInfo = (props:any) =>{
    const item=props?.singleItem
    return(
      <View style={styles.postContainer}>
          <View style={styles.userContainer}>
            <Image source={ item.user.image} style={styles.profileImage} />
            <View style={styles.userInfo}>
              <Text style={styles.userName}>{item.user.name}</Text>
              <Text style={styles.userLocation}>{item.user.location}</Text>
            </View>
           <View style ={styles.PostHeader}>
           <TouchableOpacity style={styles.followButton}>
              <Text style={styles.followText}>Follow</Text>
            </TouchableOpacity>
            <TouchableOpacity
             onPress={()=>{
              props?.atEditButton();
            }}>
                <Image source={AppImages.HomeScreenPosts.dots} style={styles.dotImage}></Image>
            </TouchableOpacity>
           </View>
          </View>
    
          <Image source={ item.postImage } style={styles.postImage} />
          <TouchableOpacity 
          onPress={()=>{
            props?.atSponsorPress();
          }}>
            <Text style={styles.SponsorText}>Sponsored</Text>
          </TouchableOpacity>
          <View style={styles.LineStyle}/>
          <View style ={styles.BottomBar}>
            <TouchableOpacity
            onPress={()=>{
              props?.atFavPress();
            }}
           >
              <Image source={AppImages.HomeScreenPosts.Fav} style = {styles.FavIcon}></Image>  
            </TouchableOpacity>
          <View style={styles.postActions}>
            <TouchableOpacity>
              <Image source={AppImages.HomeScreenPosts.heart} style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity
            onPress={()=>{
              props?.atComentPress()
            }}
            >
              <Image source={AppImages.HomeScreenPosts.Chat} style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={AppImages.HomeScreenPosts.Share} style={styles.icon} />
            </TouchableOpacity>
          </View>
          </View>
    
          <View style={styles.likeInfo}>
            <Text style={styles.likesText}>Liked by</Text>
            <Text style={styles.LikedText}>{item.likes.join(', ')}</Text>
          </View>
    
          <Text style={styles.postDescription}>
            <Text style={styles.userName}>{item.user.name.toLowerCase()}</Text> {item.description}
          </Text>
    
          <Text style={styles.timeAgo}>{item.timeAgo}</Text>
    
          <TouchableOpacity
          onPress={()=>{
              props?.atComentPress()
            }}>
            <Text style={styles.viewComments}>Show all comments ({item.commentsCount})</Text>
          </TouchableOpacity>
        </View>
    )
  }
const styles = StyleSheet.create({
    postContainer: {
        marginTop :10,
      marginBottom: 50,
    },
    SponsorText : {
      alignSelf : 'flex-end',
      color : AppColors.Colorz.offWhite,
      backgroundColor :AppColors.Colorz.orange,
      borderRadius : normalized(12),
      paddingHorizontal : normalized(10),
      fontFamily : 'Poppins-Medium',
      marginTop : normalized(2),
      paddingVertical :normalized(3),
      fontSize : normalized(10),
      paddingTop : 4,
      marginBottom : normalized(7)
    },
    LineStyle : {
      height : 0.5,
      width : '100%',
      backgroundColor : '#cccdcf',
      marginBottom : normalized(5)
    },
    userContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 10,
    },
    profileImage: {
      height: 40,
      width: 40,
      borderRadius: 20,
    },
    userInfo: {
      flex: 1,
      marginLeft: 10,
    },
    userName: {
      fontWeight: 'bold',
      color: '#333',
    },
    userLocation: {
      color: '#777',
      fontSize: 12,
    },
    followButton: {
      backgroundColor: '#f3f3f3',
      borderRadius: 12,
      paddingHorizontal: 10,
      paddingVertical: 4,
    },
    followText: {
      fontSize: 12,
      color: AppColors.Colorz.darkBlue,
      fontFamily :'Poppins-SemiBold'
    },
    postImage: {
      width: '100%',
      height: 300,
      borderRadius: 10,
    },
    postActions: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '30%',
    },
    icon: {
      height: 22,
      width: 23,
      resizeMode : "contain"
    },
    FavIcon : {
        height: 22,
        width: 18,
    },
    likeInfo: {
      marginBottom: 5,
      flexDirection : 'row',
      gap : 5
    },
    likesText: {
      color: '#333',
    },
    LikedText : {
        fontWeight :'bold',
        color: '#333',
    },
    postDescription: {
      color: '#333',
      marginBottom: 5,
    },
    timeAgo: {
      fontSize: 12,
      color: '#777',
      marginBottom: 5,
    },
    viewComments: {
      color: '#777',
      fontSize: 12,
    },
    PostHeader:{
        gap :10,
        flexDirection : 'row',
    },
    dotImage : {
        height: 24,
        width: 24,
        marginTop :4
    },
    BottomBar : {
        flexDirection : 'row',
        justifyContent : 'space-between',
        marginVertical :10,
        marginHorizontal :2
    }
  });
  