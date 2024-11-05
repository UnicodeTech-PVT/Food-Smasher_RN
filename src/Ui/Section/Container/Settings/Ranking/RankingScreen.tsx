import { FlatList, Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { profiles, renderItem } from "./Component";
import { AppColors, AppImages, normalized } from "../../../../../Utils/AppConstants";
import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";

type RankingScreenProps = {
  navigation :StackNavigationProp<any>
}
const RankingScreen:React.FC<RankingScreenProps> = props =>{
    return (
        <SafeAreaView style={styles.container}>
           <View  style={styles.HeaderContainer}>
           <TouchableOpacity
          style={styles.imageBackGround}
          onPress={() => props?.navigation?.goBack()}>
          <Image source={AppImages.Home.arrowBack} style={styles.Arrow} />
        </TouchableOpacity>
        <Text style={styles.header}>Top Viewed Profile Ranking</Text>
           </View>
        <FlatList
          data={profiles}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
        />
      </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        paddingVertical: 20,
      },
      header: {
        fontSize: 19,
        textAlign: 'center',
        right: 50,
        fontFamily : 'Poppins-SemiBold',
        color :AppColors.Colorz.darkBlue,
        marginBottom :20
      },
      Arrow: {
        height: normalized(13),
        width: normalized(10),
      },
      imageBackGround: {
        elevation: 5,
        alignItems: 'center',
        justifyContent: 'center',
        height: 35,
        width: 35,
        backgroundColor: '#fff',
        borderRadius: 12,
      },
      HeaderContainer :{
        flexDirection :'row',
        justifyContent : 'space-between'
      }
});
 export default RankingScreen;