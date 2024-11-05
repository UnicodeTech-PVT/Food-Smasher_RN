import { StyleSheet, Text, View, FlatList, Image, Dimensions, TouchableOpacity, TextInput } from 'react-native';
import React, { useState } from 'react';
import { SceneMap, TabView, TabBar } from 'react-native-tab-view'; 
import { AppColors, AppImages, normalized, peopleData, popularImages, trendingImages } from '../../../../../Utils/AppConstants';
import { AppRoutes } from '../../../../../Utils/Routes';

const PeopleRoute = () => (
  <FlatList
    data={peopleData}
    keyExtractor={(item) => item.id}
    showsVerticalScrollIndicator = {false}
    renderItem={({ item }) => (
      <View style={styles.peopleItem}>
        <Image source={item.avatar} style={styles.avatar} />
        <Text style={styles.name}>{item.name}</Text>
      </View>
    )}
  />
);

const TrendingRoute = () => (
  <FlatList
    data={trendingImages}
    showsVerticalScrollIndicator = {false}
    keyExtractor={(item) => item.id}
    numColumns={3}
    renderItem={({ item }) => (
      <Image source={item.imageUrl} style={styles.image} />
    )}
  />
);

const PopularRoute = () => (
  <FlatList
    data={popularImages}
    showsVerticalScrollIndicator = {false}
    keyExtractor={(item) => item.id}
    numColumns={3}
    renderItem={({ item }) => (
      <Image source={item.imageUrl} style={styles.image} />
    )}
  />
);

const SearchScreen = (props:any) => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'people', title: 'People' },
    { key: 'trending', title: 'Trending' },
    { key: 'popular', title: 'Popular' },
  ]);

  const renderScene = SceneMap({
    people: PeopleRoute,
    trending: TrendingRoute,
    popular: PopularRoute,
  });

  const renderTabBar = (props: any) => (
    <TabBar
      {...props}
      style={styles.tabBar}
      indicatorStyle={styles.indicator}
      renderLabel={({ route, focused }) => (
        <Text style={[styles.label, focused ? styles.labelFocused : null]}>
          {route.title}
        </Text>
      )}
    />
  );

  return (
    <View style={styles.container}>
       <View style={styles.header}>
        <View style={styles.blank}/>
        <Text style={styles.headerText}>Search</Text>
        <TouchableOpacity
          onPress={() =>props?.navigation?.navigate(AppRoutes.Home.Notification)}>
          <Image source={AppImages.HomeScreenPosts.Notification} style={styles.notificationStyle}/>
        </TouchableOpacity>
      </View>
      <View style={styles.InputContainer}>
      <Image source={AppImages.BottomScreen.Search} style={styles.icon}/>
      <TextInput
        style={styles.input}
        placeholder="Find people, restaurant and more..."
        placeholderTextColor= "grey"
      />
    </View>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: Dimensions.get('window').width }}
        renderTabBar={renderTabBar}
      />
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: normalized(10),
    marginBottom: normalized(40),
    backgroundColor : AppColors.Colorz.offWhite,
    marginHorizontal : normalized(10)
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    zIndex: 2,
    width : '100%',
    justifyContent : 'space-between',
    marginVertical : 10
  },
  headerText: {
    fontSize: normalized(16),
    fontFamily: 'Poppins-Medium',
    color : AppColors.Colorz.darkBlue,
    alignSelf : 'center',
    flex :1,
    right : normalized(12)
  },
  blank : {flex:1

  },
  peopleItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: normalized(8),
  },
  avatar: {
    width: normalized(42),
    height: normalized(42),
    marginRight: 10,
  },
  name: {
    fontSize: normalized(13),
  },
  image: {
    width: normalized(117),
    height: normalized(113),
    margin: 5,
  },
  tabBar: {
    backgroundColor: AppColors.Colorz.offWhite
  },
  indicator: {
    backgroundColor: AppColors.Colorz.offWhite,
  },
  label: {
    color: AppColors.Colorz.darkBlue,
  },
  labelFocused: {
    color: AppColors.Colorz.orange,
  },
  notificationStyle : {
    height : normalized(20),
    width : normalized(20),
    resizeMode : 'contain',
    marginHorizontal : normalized(10)
  },
  InputContainer : {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 0.3,
    borderColor: 'grey',
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: 1,
    marginHorizontal : normalized(7),
    marginBottom : normalized(5)
  },
  icon: {
    marginRight: 8, 
    height : normalized(16),
    width :normalized(16),
    tintColor : 'grey'
  },
  input: {
    flex: 1,
    fontSize: 16,
    color : AppColors.Colorz.darkBlue
  },
});
