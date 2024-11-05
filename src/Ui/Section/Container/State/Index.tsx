import { useSelector } from "react-redux"
import { AppRootStore } from "../../../../Redux/Reducers/AppStore"
import { CameraStack, HomeStack, MessageStack, ProfileStack, SearchStack } from "../../../../Navigation/InnerNavigation";

export const setConatinerStack = (index :any)=>{
    const selector:any=useSelector(
        (state: AppRootStore)=>state.SliceReducer
    );
   if(index == 0 ){
    return <HomeStack/>;
   } else if (index == 1 ){
    return <SearchStack/>;
   }else if (index == 2 ){
    return <CameraStack/>;
   }else if (index == 3 ){
    return <MessageStack/>;
   }else if (index == 4 ){
    return <ProfileStack/>;
   }
}