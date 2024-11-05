import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {Alert} from 'react-native';
import auth from '@react-native-firebase/auth';
import CommonDataManager from '../Utils/CommonManager';

const SocialAuthManager = () => {
  const gmailLoginRequest = async () => {
    let socialParams = {};
    try {
      await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
      const resp = await GoogleSignin.signIn();
      const googleCredential = auth.GoogleAuthProvider.credential(
        resp?.data.idToken,
      );
      await auth().signInWithCredential(googleCredential);
      const userInfo = await auth().signInWithCredential(googleCredential);
      if (userInfo?.user) {
        const splitName: any = userInfo?.user?.displayName?.split(' ');
        socialParams = {
          token: userInfo?.user?.uid,
          first_name: splitName[0]
            ? CommonDataManager.getSharedInstance().truncateString(splitName[0])
            : '',
          last_name: splitName[1]
            ? CommonDataManager.getSharedInstance().truncateString(splitName[1])
            : '',
          email: userInfo?.user?.email,
        };
      }
    } catch (error: any) {
      console.log('error------', error);
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        Alert.alert('', 'Cancelled');
      }
    }
    if (socialParams) {
      return {
        ...socialParams,
        provider_type: 'google',
      };
    } else {
      return null;
    }
  };

  return {
    gmailLoginRequest,
  };
};
export default SocialAuthManager;
