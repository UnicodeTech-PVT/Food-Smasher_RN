import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import {
  AppColors,
  AppImages,
  cuisines,
  ScreenProps,
} from '../../../../Utils/AppConstants';
import { CategoriesHandler } from '../../../../Network/Services/AuthServices';
import { useDispatch } from 'react-redux';
import { setIsLoader, setUserData } from '../../../../Redux/Reducers/AppReducer';
import { setUserDataInAsync } from '../../../../Utils/AsyncStorage';

const CatagoriesScreen = (props: ScreenProps) => {
  const dispatch = useDispatch();
  const [selectedCuisines, setSelectedCuisines] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);
  const userPayload = props?.route.params?.payload;

  const toggleSelection = (cuisine: string) => {
    if (selectedCuisines.includes(cuisine)) {
      setSelectedCuisines(selectedCuisines.filter(item => item !== cuisine));
    } else {
      setSelectedCuisines([...selectedCuisines, cuisine]);
    }
    if (error) {
      setError(null);
    }
  };

  const handleDonePress = async () => {
    dispatch(setIsLoader(true))
    const data = {
      ...userPayload,
      categories: selectedCuisines
    }
    await CategoriesHandler(data, (resp :any)=>{
      dispatch(setIsLoader(false))
      if(resp){
        dispatch(setUserData(data));
      setUserDataInAsync(data) 
      }
      else{
        console.log('Ctegories error------->');
        
      }
    });
  };
  return (
    <View style={styles.container}>
      <View style={styles.Conatiner}>
        <TouchableOpacity
          style={styles.imageBackGround}
          onPress={() => props?.navigation?.goBack()}>
          <Image source={AppImages.Home.arrowBack} style={styles.Arrow} />
        </TouchableOpacity>

        <Text style={styles.headerText}>Cuisines Preferences</Text>
      </View>
      <FlatList
        data={cuisines}
        numColumns={3}
        keyExtractor={item => item}
        contentContainerStyle={styles.cuisinesContainer}
        renderItem={({item}) => (
          <TouchableOpacity
            activeOpacity={0.7}
            style={[
              styles.cuisineButton,
              selectedCuisines.includes(item) && styles.cuisineButtonSelected,
            ]}
            onPress={() => toggleSelection(item)}>
            <Text
              style={[
                styles.cuisineText,
                selectedCuisines.includes(item) && styles.cuisineTextSelected,
              ]}>
              {item}
            </Text>
            {!selectedCuisines.includes(item) && (
              <Text style={styles.cuisineText1}>+</Text>
            )}
          </TouchableOpacity>
        )}
      />
      {error && <Text style={styles.errorText}>{error}</Text>}
      <TouchableOpacity
        style={[
          styles.ContinueButtonWrapper,
          {opacity: selectedCuisines.length > 0 ? 1 : 0.5},
        ]}
        activeOpacity={1}
        onPress={() => {
          handleDonePress();
        }}
        disabled={selectedCuisines.length === 0}>
        <Text style={styles.ContinueText}>Done</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CatagoriesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  Conatiner: {
    flexDirection: 'row',
  },
  Arrow: {
    height: 15,
    width: 10,
  },
  imageBackGround: {
    elevation: 5,
    alignItems: 'center',
    justifyContent: 'center',
    height: 35,
    width: 35,
    backgroundColor: '#fff',
    borderRadius: 12,
  },
  headerText: {
    left: 30,
    fontSize: 22,
    marginBottom: 40,
    textAlign: 'center',
    fontFamily: 'Poppins-SemiBold',
    color: AppColors.Colorz.darkBlue,
  },
  cuisinesContainer: {
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  cuisineButton: {
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 13,
    borderWidth: 1.5,
    borderColor: AppColors.Colorz.orange,
    margin: 7,
    gap: 5,
  },
  cuisineButtonSelected: {
    backgroundColor: AppColors.Colorz.orange,
  },
  cuisineText: {
    flexDirection: 'row',
    color: AppColors.Colorz.orange,
    fontFamily: 'Poppins-Medium',
  },
  cuisineTextSelected: {
    color: '#fff',
  },
  ContinueButtonWrapper: {
    width: '65%',
    backgroundColor: AppColors.Colorz.orange,
    borderRadius: 100,
    alignSelf: 'center',
    bottom: 20,
  },
  ContinueText: {
    color: AppColors.Colorz.offWhite,
    fontSize: 17,
    fontFamily: 'Poppins-Medium',
    textAlign: 'center',
    padding: 15,
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    marginVertical: 10,
  },
  cuisineText1: {
    color: AppColors.Colorz.darkBlue,
    fontFamily: 'Poppins-Medium',
  },
});
