import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AppImages } from '../../../../Utils/AppConstants'

const HeadComp = () => {
  return (
    <View>
      <ImageBackground
        source={AppImages.CommonPics.Header} 
        style={styles.backgroundImage}
        resizeMode="contain"
      >
      </ImageBackground>
    </View>
  )
}

export default HeadComp

const styles = StyleSheet.create({
    backgroundImage: {
        width: '115%',
        height: 200,
        top : -120,
        left : -65, 
        justifyContent: 'center',
        alignItems: 'center',
      },
})