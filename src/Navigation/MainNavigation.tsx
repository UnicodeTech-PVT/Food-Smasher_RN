import { CardStyleInterpolators, createStackNavigator } from "@react-navigation/stack";
import { AppRoutes } from "../Utils/Routes";
import Conatiner from "../Ui/Section/Container/Screens/Container";
import TopViewedProfileRanking from "../Ui/Section/Container/Settings/Ranking/RankingScreen";
import RankingScreen from "../Ui/Section/Container/Settings/Ranking/RankingScreen";
import NotificationScreen from "../Ui/Section/Container/Home/Screens/NotificationScreen";
import ChatScreen from "../Ui/Section/Container/Home/Screens/ChatScreen";
import FollowersFollowingScreen from "../Ui/Section/Container/Settings/Follow/FollowScreen";
import SettingScreen from "../Ui/Section/Container/Settings/Settings/SettingScreen";
import ContentPrivacy from "../Ui/Section/Container/Settings/Settings/ContentPrivacy";
import BlockContactScreen from "../Ui/Section/Container/Settings/Settings/BlockContactScreen";

const Stack = createStackNavigator();

export const MainNavigation = () =>{
    return (
        <Stack.Navigator  initialRouteName={AppRoutes.Main.Container}
        screenOptions={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          gestureEnabled: false,
        }}>
            <Stack.Screen name={AppRoutes.Main.Container} component={Conatiner}/>
            <Stack.Screen name = {AppRoutes.Home.Ranking} component={RankingScreen}/>
            <Stack.Screen name={AppRoutes.Home.Notification} component={NotificationScreen}/>
            <Stack.Screen name={AppRoutes.Home.Chat} component={ChatScreen}/>
            <Stack.Screen name={AppRoutes.Home.followers} component={FollowersFollowingScreen}/>
            <Stack.Screen name= {AppRoutes.Home.Settings} component={SettingScreen}/>
            <Stack.Screen name={AppRoutes.Home.contentPrivacy} component={ContentPrivacy}/>
            <Stack.Screen name={AppRoutes.Home.BlockContact} component={BlockContactScreen}/>
        </Stack.Navigator>
    )
}