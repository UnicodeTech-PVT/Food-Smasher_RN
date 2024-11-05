import {useSelector} from 'react-redux';
import {AppRootStore} from '../../../../Redux/Reducers/AppStore';
import {Dimensions, Platform, View} from 'react-native';
import {AppColors, BottomBarList} from '../../../../Utils/AppConstants';
import { setConatinerStack } from '../State/Index';
import BottomBar from '../../../Assets/Components/BottomBar/BottomBar';

const Conatiner = ({navigation}: any) => {
  const selector: any = useSelector(
    (state: AppRootStore) => state.SliceReducer,
  );

  const diff =
    Dimensions.get('screen').height - Dimensions.get('window').height;

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: AppColors.Colorz.offWhite,
        zIndex: 10,
      }}>

        <View
        style={[
            { borderRadius: 20 },
            Platform.OS == "android"
              ? {
                  height: Dimensions.get("screen").height - diff - 58,
                }
              : { flex: 1 },
          ]}>
            {setConatinerStack(selector?.currentTab)}
        </View>
        <BottomBar
        bottomBarList={
            BottomBarList
        }
        navigation={navigation}
        tab={selector?.currentTab}
      />
      </View>
  );
};

export default Conatiner;
