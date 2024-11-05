import { useState } from "react";
import { Image, Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { AppColors, AppImages, normalized } from "../../../../../../Utils/AppConstants";

const EditViewPost = (props: any) => {
    const [modalVisible, setModalVisible] = useState(props?.isShow);
    return (
        <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => props?.onClose()}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View style={styles.Divider1} />
            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={styles.modalCancelButton}
                onPress={() => props?.onClose()}>
                    <Image source={AppImages.HomeScreenPosts.Edit} style={styles.ImageStyle}></Image>
                <Text style={styles.EditText}>Edit Post</Text>
              </TouchableOpacity>
              <View style={styles.divider} />
              <TouchableOpacity
                style={styles.modalRemoveButton}
                onPress={() => props?.onClose()}
                >
                    <Image source={AppImages.HomeScreenPosts.Delete} style={styles.ImageStyle}></Image>
                <Text style={styles.DeleteText}>Delete Post</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    )
}

const styles = StyleSheet.create ({
    modalContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      },
      modalContent: {
        backgroundColor: AppColors.Colorz.offWhite,
        borderTopLeftRadius: normalized(20),
        borderTopRightRadius: normalized(20),
        padding: normalized(20),
        height: '30%',
      },
      modalButtons: {
        justifyContent: 'space-around',
      },
      modalCancelButton: {
        flexDirection : 'row',
        justifyContent : 'center',
        gap : normalized(10),
        marginTop : normalized(30)
      },
      modalRemoveButton: {
        flexDirection : 'row',
        justifyContent : 'center',
        gap : normalized(10),
        marginTop : normalized(25)
      },
      EditText: {
        color: AppColors.Colorz.darkBlue,
        fontSize: normalized(12),
        fontFamily: 'Poppins-Medium',
      },
      DeleteText: {
        color: AppColors.Colorz.orange,
        fontSize: normalized(12),
        fontFamily: 'Poppins-Medium',
      },
      SetImageModal: {
        height: normalized(50),
        width: normalized(50),
        alignSelf: 'center',
        marginVertical: normalized(10),
      },
      Divider1: {
        backgroundColor: '#ccccca',
        width: '20%',
        height: 4,
        alignSelf: 'center',
        borderRadius: normalized(20),
        marginBottom: normalized(10),
      },
      divider: {
        borderBottomWidth: 2,
        borderBottomColor: '#E0E0E0',
        marginTop: normalized(15),
      },
      ImageStyle : {
        height : normalized(20),
        width : normalized(20),
        resizeMode : 'contain'
      }
})
export default EditViewPost;