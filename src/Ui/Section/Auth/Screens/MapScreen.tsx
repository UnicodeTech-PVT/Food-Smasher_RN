import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  Platform,
  PermissionsAndroid,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {AppColors, AppImages} from '../../../../Utils/AppConstants';
import {NavigationProp} from '@react-navigation/native';
import Geocoder from 'react-native-geocoding';
import {useDispatch} from 'react-redux';
import {setIsLoader} from '../../../../Redux/Reducers/AppReducer';
import { MapHandler } from '../../../../Network/Services/AuthServices';
import { AppRoutes } from '../../../../Utils/Routes';

interface MapScreenProps {
  navigation: NavigationProp<any>;
  route: any;
}

const MapScreen: React.FC<MapScreenProps> = props => {
  const dispatch = useDispatch();
  const [location, setLocation] = useState<{
    latitude: number;
    longitude: number;
  }>({
    latitude: 30.3753,
    longitude: 69.3451,
  });

  const userPayload = props.route.params.payload;
  const [address, setAddress] = useState<any>({});
  const [markerLocation, setMarkerLocation] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);

  const onContinue = async () => {
    try {
      dispatch(setIsLoader(true));
      const payload = {
        ...userPayload,
        location: address
      };
      await MapHandler(payload, (resp: any) => {
        console.log('resp---->',resp);
        
        if (resp.status) {
          props?.navigation?.navigate(AppRoutes.Auth.catagory, {
            payload
          });
        }
        dispatch(setIsLoader(false));
      });
    } catch (error) {
      console.error('Error in onContinue:', error);
      dispatch(setIsLoader(false)); 
    }
  };
  useEffect(() => {
    const requestLocationPermission = async () => {
      if (Platform.OS === 'android') {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
              title: 'Location Permission',
              message:
                'App needs access to your location to show your current position on the map',
              buttonNeutral: 'Ask Me Later',
              buttonNegative: 'Cancel',
              buttonPositive: 'OK',
            },
          );
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            getCurrentLocation();
          } else {
            console.log('Location permission denied');
          }
        } catch (err) {
          console.warn(err);
        }
      } else {
        getCurrentLocation();
      }
    };

    const getCurrentLocation = () => {
      Geolocation.getCurrentPosition(
        position => {
          const {latitude, longitude} = position.coords;
          setLocation({
            latitude,
            longitude,
          });
        },
        error => console.error('Error getting location', error),
        {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
      );
    };

    requestLocationPermission();
  }, []);

  const handleLocationSearch = (data: any, details: any) => {
    const {lat, lng} = details.geometry.location;

    setAddress({
      address: details?.formatted_address,
      lng: lng,
      lat: lat,
    });

    setLocation({
      latitude: lat,
      longitude: lng,
    });
    setMarkerLocation({latitude: lat, longitude: lng});
  };

  const handleMapPress = (event: any) => {
    const {latitude, longitude} = event.nativeEvent.coordinate;
    setMarkerLocation({latitude, longitude});
    reverseGeocodingForAddress({
      coords: {
        latitude: latitude,
        longitude: longitude,
      },
    });
  };

  const reverseGeocodingForAddress = (position: any) => {
    Geocoder.from([position?.coords?.latitude, position?.coords?.longitude])
      .then((json: any) => {
        if (json.results[0]?.geometry?.location?.lat) {
          setAddress({
            lat: json.results[0]?.geometry?.location?.lat,
            lng: json.results[0]?.geometry?.location?.lng,
            address: json.results[0].formatted_address,
          });
        }
      })
      .catch((error: any) => console.warn('WARNING', error));
  };

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={StyleSheet.absoluteFillObject}
        region={{
          latitude: location.latitude,
          longitude: location.longitude,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
        showsUserLocation={true}
        onPress={handleMapPress}>
        {markerLocation && (
          <Marker coordinate={markerLocation} title="Selected Location" />
        )}
      </MapView>

      <View style={styles.header}>
        <TouchableOpacity
          style={styles.imageBackGround}
          onPress={() => props?.navigation?.goBack()}>
          <Image source={AppImages.Home.arrowBack} style={styles.Arrow} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Add Your Location</Text>
      </View>

      <GooglePlacesAutocomplete
        placeholder="Search for a location"
        onPress={handleLocationSearch}
        query={{
          key: 'AIzaSyDcUbAMWfOS0WzCT-iuNOQftri6QIjv7zU',
          language: 'en',
        }}
        styles={{
          container: {
            position: 'absolute',
            width: '75%',
            zIndex: 1,
            top: 80,
            alignSelf: 'center',
          },
          textInputContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: 'white',
            elevation: 5,
            paddingHorizontal: 10,
            borderRadius: 13,
          },
          textInput: {
            flex: 1,
            height: 45,
            margin: 0,
            padding: 0,
            borderRadius: 5,
            paddingLeft: 10,
          },
          poweredContainer: {
            display: 'none',
          },
        }}
        fetchDetails={true}
        renderLeftButton={() => (
          <Image source={AppImages.BottomScreen.Search} style={styles.inputImage} />
        )}
      />

      {address?.address && (
       <TouchableOpacity
       activeOpacity={1}
       style={[styles.ContinueButtonWrapper, { zIndex: 1 }]}
       onPress={onContinue}>
       <Text style={styles.ContinueText}>Continue</Text>
     </TouchableOpacity>
     
      )}
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    position: 'absolute',
    top: 20,
    left: 10,
    flexDirection: 'row',
    alignItems: 'center',
    zIndex: 2,
  },
  headerText: {
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold',
    marginLeft: 50,
    color: 'black',
  },
  inputImage: {
    left: 3,
    width: 20,
    height: 20,
    marginRight: 10,
  },
  Arrow: {
    height: 15,
    width: 10,
  },
  imageBackGround: {
    shadowColor: 'white',
    elevation: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
    height: 35,
    width: 35,
    backgroundColor: AppColors.Colorz.offWhite,
    borderRadius: 12,
  },
  ContinueButtonWrapper: {
    position: 'absolute',
    bottom: 20,
    width: '65%',
    backgroundColor: AppColors.Colorz.orange,
    borderRadius: 100,
    alignSelf: 'center',
    zIndex: 3,
  },
  ContinueText: {
    color: AppColors.Colorz.offWhite,
    fontSize: 17,
    fontFamily: 'Poppins-Medium',
    textAlign: 'center',
    padding: 15,
  },
});
