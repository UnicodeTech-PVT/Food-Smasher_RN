import { useSelector } from "react-redux"
import { AppRootStore } from "../Redux/Reducers/AppStore";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import AuthNavigation from "../Navigation/AuthNavigation";
import { MainNavigation } from "../Navigation/MainNavigation";

export const AppContainer = () => {
    const selector:any = useSelector(
        (state:AppRootStore) => state.SliceReducer
    );
    return (
       <NavigationContainer>
         {!selector?.userData ? <MainNavigation/> : <AuthNavigation/>}
       </NavigationContainer>
       )
    
}