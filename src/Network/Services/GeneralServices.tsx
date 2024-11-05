import { Platform, Alert } from "react-native";
import storage from '@react-native-firebase/storage';


export const uploadImage = async (image: any) => {
    try {
      const {uri} = image;

      const filename = `${Date.now()}_${uri.substring(
        uri.lastIndexOf('/') + 1,
      )}`;

      const uploadUri =
        Platform.OS === 'ios' ? uri.replace('file://', '') : uri;

      const storageRef = storage().ref(filename);

      const task = storageRef.putFile(uploadUri);

      await task;

      const url = await storageRef.getDownloadURL();
      return url;
    } catch (e) {
      console.error('Image upload failed', e);
      Alert.alert('Upload Error', 'Image upload failed. Please try again.');
      return null;
    }
  };