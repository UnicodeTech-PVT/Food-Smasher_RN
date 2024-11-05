import {Image, Modal, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {
  AppColors,
  AppImages,
  normalized,
} from '../../../../../../Utils/AppConstants';

const SaveViewModel = (props: any) => {
  return (
    <Modal transparent visible={true}>
      <View style={styles.container} pointerEvents="box-none">
        <View style={styles.ModalContainer}>
          <View style={styles.Divider1}></View>
          <TouchableOpacity
            style={styles.imageBackGround}
            onPress={() => props?.onclose()}
            activeOpacity={0.7}
          >
            <Image source={AppImages.Home.arrowBack} style={styles.Arrow} />
          </TouchableOpacity>

          <View style={styles.PaddingStyle}>
            <View style={styles.ContainerView}>
              <TouchableOpacity style={styles.BoxContainer}>
                <Image
                  source={AppImages.HomeScreenPosts.Fav}
                  style={styles.iconStyle}
                />
                <Text style={styles.textStyle}>Save</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.BoxContainer}>
                <Image
                  source={AppImages.SaveFileModel.exclaimation}
                  style={styles.IconStyle}
                />
                <Text style={styles.textStyle}>Report</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.BoxContainer1}>
              <Image
                source={AppImages.SaveFileModel.cross}
                style={styles.IconStyle1}
              />
              <Text style={styles.textStyle1}>Unfollow</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.BoxContainer1}>
              <Image
                source={AppImages.SaveFileModel.preference}
                style={styles.iconStyle1}
              />
              <Text style={styles.textStyle1}>Manage Cuisine preference</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.28)',
    justifyContent: 'flex-end',
  },
  ModalContainer: {
    height: '50%',
    width: '100%',
    backgroundColor: AppColors.Colorz.offWhite,
    borderTopLeftRadius: normalized(30),
    borderTopRightRadius: normalized(30),
    padding: 10,
  },
  Divider1: {
    backgroundColor: '#ccccca',
    width: '20%',
    height: 4,
    alignSelf: 'center',
    borderRadius: normalized(20),
    marginBottom: normalized(10),
  },
  Arrow: {
    height: 15,
    width: 10,
    resizeMode : 'contain'
  },
  imageBackGround: {
    shadowColor: 'black',
    elevation: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
    height: 35,
    width: 35,
    backgroundColor: AppColors.Colorz.offWhite,
    borderRadius: 12,
    marginRight: normalized(50),
    marginBottom: normalized(20),
  },
  iconStyle: {
    height: normalized(25),
    width: normalized(21),
    alignSelf: 'center',
    marginTop: normalized(10),
  },
  IconStyle: {
    height: normalized(24),
    width: normalized(24),
    alignSelf: 'center',
    marginTop: normalized(10),
  },
  textStyle: {
    fontSize: 17,
    color: AppColors.Colorz.darkBlue,
    fontFamily: 'Poppins-Medium',
    alignSelf: 'center',
  },
  BoxContainer: {
    height: normalized(65),
    width: normalized(150),
    backgroundColor: '#d7dade',
    borderRadius: normalized(12),
    marginBottom: normalized(7),
  },
  BoxContainer1: {
    flexDirection: 'row',
    height: normalized(65),
    width: '100%',
    backgroundColor: '#d7dade',
    borderRadius: normalized(12),
    marginVertical: normalized(7),
    paddingLeft: 20,
    gap: 20,
  },
  ContainerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  PaddingStyle: {
    marginHorizontal: normalized(10),
  },
  textStyle1: {
    fontSize: 17,
    color: AppColors.Colorz.darkBlue,
    fontFamily: 'Poppins-Medium',
    alignSelf: 'center',
  },
  IconStyle1: {
    height: normalized(21.7),
    width: normalized(22),
    alignSelf: 'center',
  },
  iconStyle1: {
    height: normalized(20.6),
    width: normalized(23),
    alignSelf: 'center',
  },
});

export default SaveViewModel;
