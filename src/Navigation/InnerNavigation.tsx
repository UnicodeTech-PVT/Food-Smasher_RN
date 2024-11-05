import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AppRoutes } from "../Utils/Routes";
import HomeScren from "../Ui/Section/Container/Home/Screens/HomeScren";
import SearchScreen from "../Ui/Section/Container/Home/Screens/SearchScreen";
import CameraScreen from "../Ui/Section/Container/Home/Screens/CameraScreen";
import MessageScreen from "../Ui/Section/Container/Home/Screens/MessageScreen";
import ProfileScreen from "../Ui/Section/Container/Home/Screens/ProfileScreen";
import ProfileScreenComponent from "../Ui/Section/Container/Home/Components/Model/ProfileComponents";

const Stack = createNativeStackNavigator();
export const HomeStack =  ()=>{
    return(
        <Stack.Navigator
        screenOptions={{
            headerShown: false,
          }}>
            <Stack.Screen name={AppRoutes.Home.HomeScren} component={HomeScren}/>
        </Stack.Navigator>
    )
}

export const SearchStack = ()=>{
    return (
        <Stack.Navigator screenOptions={{
            headerShown :false
        }}>
            <Stack.Screen name={AppRoutes.Home.Search} component={SearchScreen}/>
        </Stack.Navigator>
    )
}

export const CameraStack = ()=>{
    return (
        <Stack.Navigator screenOptions={{
            headerShown :false
        }}>
            <Stack.Screen name={AppRoutes.Home.Camera} component={CameraScreen}/>
        </Stack.Navigator>
    )
}

export const MessageStack = ()=>{
    return (
        <Stack.Navigator screenOptions={{
            headerShown :false
        }}>
            <Stack.Screen name={AppRoutes.Home.Message} component={MessageScreen}/>
        </Stack.Navigator>
    )
}

export const  ProfileStack = ()=>{
    return (
        <Stack.Navigator screenOptions={{
            headerShown :false
        }}>
            <Stack.Screen name={AppRoutes.Home.Profile} component={ProfileScreen}/>
            <Stack.Screen name={AppRoutes.Home.profileComponent} component={ProfileScreenComponent}/>
        </Stack.Navigator>
    )
}
