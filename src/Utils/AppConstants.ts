import {StackScreenProps} from '@react-navigation/stack';
export type ScreenProps = StackScreenProps<any, any>;

export const ScreenSize = Dimensions.get("screen");
export const AppImages = {
  Home: {
    pic: require('../Ui/Assets/imges/Auth/bgPic.png'),
    home: require('../Ui/Assets/imges/Auth/HomeImg.png'),
    Lineargradient: require('../Ui/Assets/imges/Auth/shadow.png'),
    LogoImage: require('../Ui/Assets/imges/Auth/logo.png'),
    google: require('../Ui/Assets/imges/Auth/Google.png'),
    Apple: require('../Ui/Assets/imges/Auth/Applelogo.png'),
    EyeIcon: require('../Ui/Assets/imges/Auth/eye.png'),
    MapScreenLogo: require('../Ui/Assets/imges/Auth/mapScreenLogo.png'),
    profle: require('../Ui/Assets/imges/Auth/profile.png'),
    arrowBack: require('../Ui/Assets/imges/Auth/arrowBack.png'),
    cameraIcon: require('../Ui/Assets/imges/Auth/cameraicon.png'),
    heartOutline : require('../Ui/Assets/imges/Home/heartOutline.png'),
    redHeart : require('../Ui/Assets/imges/Home/redHeart.png'),
    arrowForward  : require('../Ui/Assets/imges/Home/arrowForward.png')
  },

  BottomScreen : {
    HomeIcon: require('../Ui/Assets/imges/Auth/Home.png'),
    CameraIcon: require('../Ui/Assets/imges/Auth/Camera.png'),
    Search: require('../Ui/Assets/imges/Auth/Search.png'),
    Message: require('../Ui/Assets/imges/Auth/message.png'),
    Profile: require('../Ui/Assets/imges/Auth/bottomNavProfile.png'),
  },
  CommonPics: {
    Header: require('../Ui/Assets/imges/Common/headerPic.png'),
  },
  HomeScreenPosts : {
    ProfilePic : require('../Ui/Assets/imges/Home/profilePic.png'),
    heart : require('../Ui/Assets/imges/Home/Heart.png'),
    Share : require('../Ui/Assets/imges/Home/ShareIcon.png'),
    Fav : require('../Ui/Assets/imges/Home/FavIcon.png'),
    Notification : require('../Ui/Assets/imges/Home/Notification.png'),
    Star : require('../Ui/Assets/imges/Home/Star.png'),
    Chat : require('../Ui/Assets/imges/Home/Chat.png'),
    Food1 : require('../Ui/Assets/imges/Home/FoodPic1.png'),
    Food : require('../Ui/Assets/imges/Home/FoodPic.png'),
    Profile1 : require('../Ui/Assets/imges/Home/profilePic2.png'),
    dots : require('../Ui/Assets/imges/Home/dots.png'),
    block : require ('../Ui/Assets/imges/SearchPage/block.png'),
    Edit : require ('../Ui/Assets/imges/Home/Edit.png'),
    Delete : require('../Ui/Assets/imges/Home/Delete.png')
  },
  RankScreenPics : {
    rank : require ('../Ui/Assets/imges/Home/rankPic.png'),
    rank1 : require ('../Ui/Assets/imges/Home/rankPic1.png'),
    rank2 : require ('../Ui/Assets/imges/Home/rankPic2.png'),
    rank3 : require ('../Ui/Assets/imges/Home/rankPic3.png'),
    rank4 : require ('../Ui/Assets/imges/Home/rankPic4.png'),
    rank5 : require ('../Ui/Assets/imges/Home/rankPic5.png'),
    rank6 : require ('../Ui/Assets/imges/Home/rankPic6.png'),
    rank7 : require ('../Ui/Assets/imges/Home/rankPic7.png'),
    rank8 : require ('../Ui/Assets/imges/Home/rankPic8.png'),
    rank9 : require ('../Ui/Assets/imges/Home/rankPic9.png'),
  }, 
  SaveFileModel : {
    cross : require('../Ui/Assets/imges/Home/cross.png'),
    exclaimation : require ('../Ui/Assets/imges/Home/exclaimation.png'),
    preference : require('../Ui/Assets/imges/Home/preference.png')
  },
  PopularPage : {
    image: require('../Ui/Assets/imges/SearchPage/PopularImage.png'),
    image1: require('../Ui/Assets/imges/SearchPage/PopularImage1.png'),
    image2 :require('../Ui/Assets/imges/SearchPage/PopularImage2.png'),
    image3 : require('../Ui/Assets/imges/SearchPage/PopularImage3.png'),
    image4 :require('../Ui/Assets/imges/SearchPage/PopularImage4.png'),
    image5 :require('../Ui/Assets/imges/SearchPage/PopularImage5.png'),
    image6 :require('../Ui/Assets/imges/SearchPage/PopularImage6.png'),
    image7 :require('../Ui/Assets/imges/SearchPage/PopularImage7.png'),
    image8 :require('../Ui/Assets/imges/SearchPage/PopularImage8.png'),
    image9 :require('../Ui/Assets/imges/SearchPage/PopularImage9.png'),
    image10 :require('../Ui/Assets/imges/SearchPage/PopularImage10.png'),
    image11 :require('../Ui/Assets/imges/SearchPage/PopularImage11.png'),
  },
  TrendingPage : {
    image: require('../Ui/Assets/imges/SearchPage/TrendingImage.png'),
    image1: require('../Ui/Assets/imges/SearchPage/TrendingImage1.png'),
    image2 :require('../Ui/Assets/imges/SearchPage/TrendingImage2.png'),
    image3 : require('../Ui/Assets/imges/SearchPage/TrendingImage3.png'),
    image4 :require('../Ui/Assets/imges/SearchPage/TrendingImage4.png'),
    image5 :require('../Ui/Assets/imges/SearchPage/TrendingImage5.png'),
    image6 :require('../Ui/Assets/imges/SearchPage/TrendingImage6.png'),
    image7 :require('../Ui/Assets/imges/SearchPage/TrendingImage7.png'),
    image8 :require('../Ui/Assets/imges/SearchPage/TrendingImage8.png'),
    image9 :require('../Ui/Assets/imges/SearchPage/TrendingImage9.png'),
    image10 :require('../Ui/Assets/imges/SearchPage/TrendingImage10.png'),
    image11 :require('../Ui/Assets/imges/SearchPage/TrendingImage11.png'),
  },
  ProfileScreen : {
    play : require ('../Ui/Assets/imges/SearchPage/Play.png'),
    category : require('../Ui/Assets/imges/SearchPage/Category.png'),
    Settings : require('../Ui/Assets/imges/Home/Setting.png')
  }
};

export const cuisines = [
  'French',
  'Italian',
  'Thai',
  'Japanese',
  'Indian',
  'Chinese',
  'American',
  'Spanish',
  'Greek',
  'African',
];

export const AppColors = {
  Colorz: {
    orange: '#FE724C',
    offWhite: '#F0F1F5',
    darkBlue: '#30384F',
    green : '#01D079'
  },
};

import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');
const baseWidth = 375;
const baseHeight = 812;

export const normalized = (size: number) => (width / baseWidth) * size;

export const BottomBarList = [
  {
    icon : AppImages.BottomScreen.HomeIcon,
    title : "Home"
  },
  {
    icon : AppImages.BottomScreen.Search,
    title : "Search"
  },
  {
    icon : AppImages.BottomScreen.CameraIcon,
    title : "Camera"
  },
  {
    icon : AppImages.BottomScreen.Message,
    title : "Message"
  },
  {
    icon : AppImages.BottomScreen.Profile,
    title : "Profile"
  }
]


export const peopleData = [
  { id: '1', name: 'Paityn Bergson', avatar: AppImages.RankScreenPics.rank},
  { id: '2', name: 'Adison George', avatar: AppImages.RankScreenPics.rank1 },
  { id: '3', name: 'Bruce Lee', avatar: AppImages.RankScreenPics.rank2 },
  { id: '4', name: 'Adam John', avatar: AppImages.RankScreenPics.rank3 },
  { id: '5', name: 'Hussain Ali', avatar: AppImages.RankScreenPics.rank4 },
  { id: '6', name: 'John cina', avatar: AppImages.RankScreenPics.rank5 },
  { id: '7', name: 'Joe Buttler', avatar: AppImages.RankScreenPics.rank6 },
  { id: '8', name: 'Brandan Mclum', avatar: AppImages.RankScreenPics.rank7 },
  { id: '9', name: 'Bristaw', avatar: AppImages.RankScreenPics.rank8 },
  { id: '10', name: 'Moin Ali', avatar: AppImages.RankScreenPics.rank9 },
  { id: '0', name: 'Kris Gayle', avatar: AppImages.RankScreenPics.rank },
  { id: '11', name: 'Adison George', avatar: AppImages.RankScreenPics.rank1 },
];

export const trendingImages = [
  { id: '0', imageUrl:  AppImages.TrendingPage.image },
  { id: '1', imageUrl:  AppImages.TrendingPage.image1},
  { id: '2', imageUrl:  AppImages.TrendingPage.image2},
  { id: '3', imageUrl:  AppImages.TrendingPage.image3},
  { id: '4', imageUrl:  AppImages.TrendingPage.image4},
  { id: '5', imageUrl:  AppImages.TrendingPage.image5},
  { id: '6', imageUrl:  AppImages.TrendingPage.image6},
  { id: '7', imageUrl:  AppImages.TrendingPage.image7},
  { id: '8', imageUrl:  AppImages.TrendingPage.image8},
  { id: '9', imageUrl:  AppImages.TrendingPage.image9},
  { id: '10', imageUrl:  AppImages.TrendingPage.image10},
  { id: '11', imageUrl:  AppImages.TrendingPage.image11},
];

export const popularImages = [
  { id: '1', imageUrl:AppImages.PopularPage.image },
  { id: '2', imageUrl:  AppImages.PopularPage.image1},
  { id: '3', imageUrl:  AppImages.PopularPage.image2},
  { id: '4', imageUrl:  AppImages.PopularPage.image3},
  { id: '5', imageUrl:  AppImages.PopularPage.image4},
  { id: '6', imageUrl:  AppImages.PopularPage.image5},
  { id: '7', imageUrl:  AppImages.PopularPage.image6},
  { id: '8', imageUrl:  AppImages.PopularPage.image7},
  { id: '9', imageUrl:  AppImages.PopularPage.image8},
  { id: '10', imageUrl:  AppImages.PopularPage.image9},
  { id: '11', imageUrl:  AppImages.PopularPage.image10},
  { id: '0', imageUrl:  AppImages.PopularPage.image11},
];

export const notifications = [
  { id: '1', name: 'James Walker', action: 'started following you', avatar: AppImages.RankScreenPics.rank, followable: true },
  { id: '2', name: 'Lisa Harmon', action: 'liked your post', avatar: AppImages.RankScreenPics.rank1, followable: false },
  { id: '3', name: 'Paul Smith', action: 'commented on your post', avatar: AppImages.RankScreenPics.rank4, followable: false },
  { id: '4', name: 'Foodie World', action: 'started following you', avatar: AppImages.RankScreenPics.rank3, followable: true },
  { id: '5', name: 'Emma Watson', action: 'started following you', avatar: AppImages.RankScreenPics.rank2, followable: true },
  { id: '6', name: 'Eat Sleep Repeat', action: 'liked your post', avatar: AppImages.RankScreenPics.rank5, followable: false },
  { id: '7', name: 'Hannah Mayers', action: 'started following you', avatar: AppImages.RankScreenPics.rank7, followable: true },
  { id: '8', name: 'Sandy Williams', action: 'liked your post', avatar: AppImages.RankScreenPics.rank6, followable: false },
  { id: '9', name: 'Food & Fun', action: 'started following you', avatar: AppImages.RankScreenPics.rank8, followable: true },
  { id: '10', name: 'Victor Vandroff', action: 'liked your post', avatar: AppImages.RankScreenPics.rank9, followable: false },
];


export const mockData = [
  {
    id: '0',
    user: {
      name: 'Lisa Martinez',
      location: 'Palm & Pine, San Francisco',
      image: AppImages.HomeScreenPosts.Profile1,
    },
    postImage:  AppImages.HomeScreenPosts.Food1,
    description: 'Like this restaurant so much!',
    likes: ['Jerry', 'Spencer', 'others'],
    timeAgo: '2 hours ago',
    commentsCount: 125,
  },
  {
      id: '1',
      user: {
        name: 'Tisha Walker',
        location: 'Herbivoria, Florida',
        image:AppImages.HomeScreenPosts.ProfilePic,
      },
      postImage:  AppImages.HomeScreenPosts.Food,
      description: 'Like this restaurant so much!',
      likes: ['Jerry', 'Spencer', 'others'],
      timeAgo: '2 hours ago',
      commentsCount: 80,
    },
    {
      id: '2',
      user: {
        name: 'Tisha Walker',
        location: 'Herbivoria, Florida',
        image:AppImages.RankScreenPics.rank2,
      },
      postImage:  AppImages.HomeScreenPosts.Food,
      description: 'Like this restaurant so much!',
      likes: ['Jerry', 'Spencer', 'others'],
      timeAgo: '2 hours ago',
      commentsCount: 100,
    },
    {
      id: '3',
      user: {
        name: 'Tisha Walker',
        location: 'Herbivoria, Florida',
        image:AppImages.RankScreenPics.rank4,
      },
      postImage:  AppImages.HomeScreenPosts.Food,
      description: 'Like this restaurant so much!',
      likes: ['Jerry', 'Spencer', 'others'],
      timeAgo: '2 hours ago',
      commentsCount: 205,
    },
];

export const profileData = [
  {
    id: '0',
    user: {
      name: 'Lisa Martinez',
      location: 'Palm & Pine, San Francisco',
      image: AppImages.HomeScreenPosts.Profile1,
    },
    postImage:  AppImages.TrendingPage.image,
    description: 'Like this restaurant so much!',
    likes: ['Jerry', 'Spencer', 'others'],
    timeAgo: '2 hours ago',
    commentsCount: 125,
  },
  {
      id: '1',
      user: {
        name: 'Tisha Walker',
        location: 'Herbivoria, Florida',
        image:AppImages.HomeScreenPosts.ProfilePic,
      },
      postImage:  AppImages.TrendingPage.image1,
      description: 'Like this restaurant so much!',
      likes: ['Jerry', 'Spencer', 'others'],
      timeAgo: '2 hours ago',
      commentsCount: 80,
    },
    {
      id: '2',
      user: {
        name: 'Tisha Walker',
        location: 'Herbivoria, Florida',
        image:AppImages.RankScreenPics.rank2,
      },
      postImage:  AppImages.TrendingPage.image2,
      description: 'Like this restaurant so much!',
      likes: ['Jerry', 'Spencer', 'others'],
      timeAgo: '2 hours ago',
      commentsCount: 100,
    },
    {
      id: '3',
      user: {
        name: 'Tisha Walker',
        location: 'Herbivoria, Florida',
        image:AppImages.RankScreenPics.rank4,
      },
      postImage:  AppImages.TrendingPage.image3,
      description: 'Like this restaurant so much!',
      likes: ['Jerry', 'Spencer', 'others'],
      timeAgo: '2 hours ago',
      commentsCount: 205,
    },
    {
      id: '4',
      user: {
        name: 'Lisa Martinez',
        location: 'Palm & Pine, San Francisco',
        image: AppImages.HomeScreenPosts.Profile1,
      },
      postImage:  AppImages.TrendingPage.image4,
      description: 'Like this restaurant so much!',
      likes: ['Jerry', 'Spencer', 'others'],
      timeAgo: '2 hours ago',
      commentsCount: 125,
    },
    {
        id: '5',
        user: {
          name: 'Tisha Walker',
          location: 'Herbivoria, Florida',
          image:AppImages.HomeScreenPosts.ProfilePic,
        },
        postImage:  AppImages.TrendingPage.image5,
        description: 'Like this restaurant so much!',
        likes: ['Jerry', 'Spencer', 'others'],
        timeAgo: '2 hours ago',
        commentsCount: 80,
      },
      {
        id: '6',
        user: {
          name: 'Tisha Walker',
          location: 'Herbivoria, Florida',
          image:AppImages.RankScreenPics.rank2,
        },
        postImage:  AppImages.TrendingPage.image6,
        description: 'Like this restaurant so much!',
        likes: ['Jerry', 'Spencer', 'others'],
        timeAgo: '2 hours ago',
        commentsCount: 100,
      },
      {
        id: '7',
        user: {
          name: 'Tisha Walker',
          location: 'Herbivoria, Florida',
          image:AppImages.RankScreenPics.rank4,
        },
        postImage:  AppImages.TrendingPage.image7,
        description: 'Like this restaurant so much!',
        likes: ['Jerry', 'Spencer', 'others'],
        timeAgo: '2 hours ago',
        commentsCount: 205,
      },
      {
        id: '8',
        user: {
          name: 'Lisa Martinez',
          location: 'Palm & Pine, San Francisco',
          image: AppImages.HomeScreenPosts.Profile1,
        },
        postImage:  AppImages.TrendingPage.image8,
        description: 'Like this restaurant so much!',
        likes: ['Jerry', 'Spencer', 'others'],
        timeAgo: '2 hours ago',
        commentsCount: 125,
      },
      {
          id: '9',
          user: {
            name: 'Tisha Walker',
            location: 'Herbivoria, Florida',
            image:AppImages.HomeScreenPosts.ProfilePic,
          },
          postImage:  AppImages.TrendingPage.image9,
          description: 'Like this restaurant so much!',
          likes: ['Jerry', 'Spencer', 'others'],
          timeAgo: '2 hours ago',
          commentsCount: 80,
        },
        {
          id: '10',
          user: {
            name: 'Tisha Walker',
            location: 'Herbivoria, Florida',
            image:AppImages.RankScreenPics.rank2,
          },
          postImage:  AppImages.TrendingPage.image10,
          description: 'Like this restaurant so much!',
          likes: ['Jerry', 'Spencer', 'others'],
          timeAgo: '2 hours ago',
          commentsCount: 100,
        },
        {
          id: '11',
          user: {
            name: 'Tisha Walker',
            location: 'Herbivoria, Florida',
            image:AppImages.RankScreenPics.rank4,
          },
          postImage:  AppImages.TrendingPage.image11,
          description: 'Like this restaurant so much!',
          likes: ['Jerry', 'Spencer', 'others'],
          timeAgo: '2 hours ago',
          commentsCount: 205,
        },
];

export const initialComments= [
  {
    id: 0,
    author: 'Victor',
    avatarUrl: AppImages.RankScreenPics.rank,
    content: 'Dit aut fugiat, sed quia consequuntur magni.',
    likes: 5,
    timeAgo: '3h ago',
    replies: [],
  },
  {
    id: 1,
    author: 'Debra',
    avatarUrl: AppImages.RankScreenPics.rank2,
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    likes: 85,
    timeAgo: '3h ago',
    replies: [],
  },
  {
    id: 2,
    author: 'Victor',
    avatarUrl: AppImages.RankScreenPics.rank1,
    content: 'Dit aut fugiat, sed quia consequuntur magni.',
    likes: 5,
    timeAgo: '3h ago',
    replies: [],
  },
  {
    id: 3,
    author: 'Debra',
    avatarUrl: AppImages.RankScreenPics.rank3,
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    likes: 85,
    timeAgo: '3h ago',
    replies: [],
  },
];

export const messages = [
  {
    id: '1',
    name: 'Debra William',
    message: 'okay sure!!',
    time: '12:25 PM',
    avatar: AppImages.RankScreenPics.rank,
    unread: true,
    status: 'sent',
  },
  {
    id: '2',
    name: 'Victor Vandroff',
    message: "I'll send it over an email",
    time: '10:15 AM',
    avatar: AppImages.RankScreenPics.rank1,
    unread: false,
    status: 'sent',
  },
  {
    id: '3',
    name: 'James Walker',
    message: 'Done!',
    time: '09:14 AM',
    avatar: AppImages.RankScreenPics.rank2,
    unread: true,
    status: 'delivered',
  },
  {
    id: '4',
    name: 'Jenny',
    message: 'thanks man',
    time: 'Yesterday',
    avatar: AppImages.RankScreenPics.rank3,
    unread: false,
    status: 'read',
  },
  {
    id: '5',
    name: 'Alexander Mitchel',
    message: "Don't forget to drink water",
    time: 'Tuesday',
    avatar: AppImages.RankScreenPics.rank4,
    unread: false,
    status: 'none',
  },
  {
    id: '6',
    name: 'Jack Miller',
    message: 'See you soon...',
    time: 'Tuesday',
    avatar: AppImages.RankScreenPics.rank5,
    unread: false,
    status: 'none',
  },
  {
    id: '7',
    name: 'Debra William',
    message: 'okay sure!!',
    time: '12:25 PM',
    avatar: AppImages.RankScreenPics.rank,
    unread: true,
    status: 'sent',
  },
  {
    id: '8',
    name: 'Victor Vandroff',
    message: "I'll send it over an email",
    time: '10:15 AM',
    avatar: AppImages.RankScreenPics.rank1,
    unread: false,
    status: 'sent',
  },
  {
    id: '9',
    name: 'James Walker',
    message: 'Done!',
    time: '09:14 AM',
    avatar: AppImages.RankScreenPics.rank2,
    unread: true,
    status: 'delivered',
  },
  {
    id: '10',
    name: 'Jenny',
    message: 'thanks man',
    time: 'Yesterday',
    avatar: AppImages.RankScreenPics.rank3,
    unread: false,
    status: 'read',
  },
  {
    id: '11',
    name: 'Alexander Mitchel',
    message: "Don't forget to drink water",
    time: 'Tuesday',
    avatar: AppImages.RankScreenPics.rank4,
    unread: false,
    status: 'none',
  },
  {
    id: '12',
    name: 'Jack Miller',
    message: 'See you soon...',
    time: 'Tuesday',
    avatar: AppImages.RankScreenPics.rank5,
    unread: false,
    status: 'none',
  },
];

export const chatMessages = [
  { id: '1', message: 'Hey! How have you been?', time: '12:15 PM', isSender: false },
  { id: '2', message: 'Wanna catch up for a beer?', time: '12:15 PM', isSender: false },
  { id: '3', message: "Awesome! Let's meet up", time: '12:20 PM', isSender: true },
  { id: '4', message: 'Can I also get my cousin along? Will that be okay?', time: '12:20 PM', isSender: true },
  { id: '5', message: 'Yeah sure! get him too.', time: '12:22 PM', isSender: false },
  { id: '6', message: 'Alright! See you soon!', time: '12:25 PM', isSender: true },
  { id: '7', message: 'Btw how was your trip?', time: '12:25 PM', isSender: false },
  { id: '8', message: 'It was awesome bro. We had a lot of fun.', time: '12:25 PM', isSender: true },
  { id: '9', message: 'Hey! How have you been?', time: '12:15 PM', isSender: false },
  { id: '10', message: 'Wanna catch up for a beer?', time: '12:15 PM', isSender: false },
  { id: '11', message: "Awesome! Let's meet up", time: '12:20 PM', isSender: true },
  { id: '12', message: 'Can I also get my cousin along? Will that be okay?', time: '12:20 PM', isSender: true },
  { id: '13', message: 'Yeah sure! get him too.', time: '12:22 PM', isSender: false },
  { id: '14', message: 'Alright! See you soon!', time: '12:25 PM', isSender: true },
  { id: '15', message: 'Btw how was your trip?', time: '12:25 PM', isSender: false },
  { id: '16', message: 'It was awesome bro. We had a lot of fun.', time: '12:25 PM', isSender: true },
];

export const followingData = [
  { id: '0', name: 'Jane Smith', image: AppImages.RankScreenPics.rank },
  { id: '1', name: 'John Doe', image: AppImages.RankScreenPics.rank1 },
  { id: '2', name: 'Jane Smith', image: AppImages.RankScreenPics.rank2 },
  { id: '3', name: 'John Doe', image: AppImages.RankScreenPics.rank3 },
  { id: '4', name: 'Jane Smith', image: AppImages.RankScreenPics.rank4 },
  { id: '5', name: 'John Doe', image: AppImages.RankScreenPics.rank5 },
  { id: '6', name: 'Jane Smith', image: AppImages.RankScreenPics.rank6 },
  { id: '7', name: 'John Doe', image: AppImages.RankScreenPics.rank7 },
  { id: '8', name: 'Jane Smith', image: AppImages.RankScreenPics.rank8 },
  { id: '9', name: 'John Doe', image: AppImages.RankScreenPics.rank9 },
  { id: '10', name: 'John Doe', image: AppImages.RankScreenPics.rank },
  { id: '11', name: 'Jane Smith', image: AppImages.RankScreenPics.rank1 },
  { id: '12', name: 'John Doe', image: AppImages.RankScreenPics.rank2 },
  { id: '13', name: 'Jane Smith', image: AppImages.RankScreenPics.rank3},
  { id: '14', name: 'John Doe', image: AppImages.RankScreenPics.rank4 },
  { id: '15', name: 'Jane Smith', image: AppImages.RankScreenPics.rank5 }
];

export const followersData  = [
  { id: '0', name: 'Jane Smith', image: AppImages.RankScreenPics.rank },
  { id: '1', name: 'John Doe', image: AppImages.RankScreenPics.rank1 },
  { id: '2', name: 'Jane Smith', image: AppImages.RankScreenPics.rank2 },
  { id: '3', name: 'John Doe', image: AppImages.RankScreenPics.rank3 },
  { id: '4', name: 'Jane Smith', image: AppImages.RankScreenPics.rank4 },
  { id: '5', name: 'John Doe', image: AppImages.RankScreenPics.rank5 },
  { id: '6', name: 'Jane Smith', image: AppImages.RankScreenPics.rank6 },
  { id: '7', name: 'John Doe', image: AppImages.RankScreenPics.rank7 },
  { id: '8', name: 'Jane Smith', image: AppImages.RankScreenPics.rank8 },
  { id: '9', name: 'John Doe', image: AppImages.RankScreenPics.rank9 },
  { id: '10', name: 'John Doe', image: AppImages.RankScreenPics.rank },
  { id: '11', name: 'Jane Smith', image: AppImages.RankScreenPics.rank1 },
  { id: '12', name: 'John Doe', image: AppImages.RankScreenPics.rank2 },
  { id: '13', name: 'Jane Smith', image: AppImages.RankScreenPics.rank3},
  { id: '14', name: 'John Doe', image: AppImages.RankScreenPics.rank4 },
  { id: '15', name: 'Jane Smith', image: AppImages.RankScreenPics.rank5 },
];