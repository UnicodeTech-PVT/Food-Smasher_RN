import React, { useState } from "react";
import { Alert, Image, Platform, StyleSheet, TouchableOpacity } from "react-native";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";
import { PERMISSIONS, request, RESULTS } from "react-native-permissions";
import { AppColors, AppImages } from "../Utils/AppConstants";

const AppImagePicker = ({ onImageSelected }: { onImageSelected: (image: any) => void }) => {
  const handleImagePickerForBackground = async () => {
    Alert.alert('Select Image', 'Choose from camera or gallery', [
      {
        text: 'Camera',
        onPress: async () => {
          const granted = await requestCameraPermission();
          if (granted) {
            launchCamera({ mediaType: 'photo' }, responseHandler(onImageSelected));
          } else {
            Alert.alert('Permission Denied', 'Camera access is required.');
          }
        },
      },
      {
        text: 'Gallery',
        onPress: async () => {
          const granted = await requestGalleryPermission();
          if (granted) {
            launchImageLibrary({ mediaType: 'photo' }, responseHandler(onImageSelected));
          } else {
            Alert.alert('Permission Denied', 'Gallery access is required.');
          }
        },
      },
      { text: 'Cancel', style: 'cancel' },
    ]);
  };

  const requestCameraPermission = async () => {
    try {
      const result = await request(
        Platform.OS === 'ios'
          ? PERMISSIONS.IOS.CAMERA
          : PERMISSIONS.ANDROID.CAMERA,
      );
      return result === RESULTS.GRANTED;
    } catch (error) {
      console.error('Failed to request camera permission:', error);
      return false;
    }
  };

  const requestGalleryPermission = async () => {
    try {
      const result = await request(
        Platform.OS === 'ios'
          ? PERMISSIONS.IOS.PHOTO_LIBRARY
          : PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
      );
      return result === RESULTS.GRANTED;
    } catch (error) {
      console.error('Failed to request gallery permission:', error);
      return false;
    }
  };

  const responseHandler = (setImage: (image: any) => void) => (response: any) => {
    if (response.didCancel) {
      console.log('User cancelled image picker');
    } else if (response.error) {
      console.error('ImagePicker Error: ', response.error);
    } else if (response.assets) {
      setImage(response.assets[0]); 
    }
  };

  return (
    <TouchableOpacity
      style={styles.cameraContainer}
      onPress={handleImagePickerForBackground}>
      <Image source={AppImages.Home.cameraIcon} style={styles.camera} />
    </TouchableOpacity>
  );
};

export default AppImagePicker;

const styles = StyleSheet.create({
  camera: {
    height: 19,
    tintColor: AppColors.Colorz.orange,
    width: 22,
  },
  cameraContainer: {
    alignSelf: 'center',
    shadowColor: 'white',
    elevation: 7,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
    marginVertical: 20,
    height: 40,
    marginTop: -20,
    width: 40,
    backgroundColor: AppColors.Colorz.offWhite,
    borderRadius: 30,
  },
});
