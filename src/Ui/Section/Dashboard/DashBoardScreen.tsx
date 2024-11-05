import { StyleSheet, Text, View, Button } from 'react-native';
import React from 'react';
import { NavigationProp } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { setUserData } from '../../../Redux/Reducers/AppReducer';
import { clearUserData } from '../../../Utils/AsyncStorage';

interface DashBoardScreenProps {
  navigation: NavigationProp<any>;
};

const DashBoardScreen: React.FC<DashBoardScreenProps> = (props) => {
  const dispatch = useDispatch();

  const handleSignOut = () => {
    dispatch(setUserData(null));
    clearUserData();
  };

  return (
    <View style={styles.container}>
      <Text>DashBoardScreen</Text>
      <Button title="Sign Out" onPress={handleSignOut} />
    </View>
  );
}

export default DashBoardScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
