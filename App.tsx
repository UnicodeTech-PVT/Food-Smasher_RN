import { StyleSheet, View} from 'react-native';
import React, {useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useDispatch, useSelector} from 'react-redux';
import {AppColors} from './src/Utils/AppConstants';
import {AppRootStore} from './src/Redux/Reducers/AppStore';
import AppLoader from './src/Components/AppLoader';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import { AppContainer } from './src/Utils/AppContainer';
import { getUserDataAsync } from './src/Utils/AsyncStorage';
import { setUserData } from './src/Redux/Reducers/AppReducer';

const Stack = createNativeStackNavigator();

const App = () => {
  const dispatch = useDispatch();
  const selector: any = useSelector(
    (state: AppRootStore) => state.SliceReducer,
  );
  const isLoading = useSelector(
    (state: AppRootStore) => state.SliceReducer?.isLoaderStart,
  );
  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '424845266046-f8f31538rao2ufu00cgfd56p2h42mkn1.apps.googleusercontent.com',
    });
    StoreUserData();
  }, []);

  const StoreUserData = async () => {
    
    try {
      let userData = await getUserDataAsync(); 
      dispatch(setUserData(userData)); 
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };
  return (
    <View style={{flex: 1}}>
      {selector?.isLoaderStart && <AppLoader />}
      <AppContainer/>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  loaderContainer: {
    top: '50%',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loader: {
    height: 100,
    width: 100,
    borderRadius: 10,
    backgroundColor: AppColors.Colorz.offWhite,
  },
});
