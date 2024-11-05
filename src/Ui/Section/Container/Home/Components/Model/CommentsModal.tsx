import React, {useState} from 'react';
import {
  FlatList,
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import CommentItem from './CommentItem';
import {
  AppColors,
  AppImages,
  initialComments,
  normalized,
} from '../../../../../../Utils/AppConstants';

const CommentViewModal = (props: any) => {
  const [comments, setComments] = useState(initialComments);

  const handleLike = (id: number) => {
    setComments(prevComments =>
      prevComments.map(comment =>
        comment.id === id ? {...comment, likes: comment.likes + 1} : comment,
      ),
    );
  };

  return (
    <Modal transparent visible={true}>
      <View
        style={styles.container}
        >
        <View style={styles.ModalContainer}>
          <View>
            <View style={styles.Divider1}></View>
            <View style={styles.header}>
              <TouchableOpacity
                style={styles.imageBackGround}
                onPress={() => props?.onClose()}>
                <Image source={AppImages.Home.arrowBack} style={styles.Arrow} />
              </TouchableOpacity>
              <Text style={styles.TextStyle}>Comments</Text>
            </View>

            <View style={styles.Divider}></View>
          </View>
          <FlatList
            data={comments}
            showsVerticalScrollIndicator={false}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => (
              <CommentItem comment={item} onLike={handleLike} />
            )}
          />
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
  header : {
    flexDirection : 'row',
    alignItems : 'center',
    marginTop: normalized(12),
  },
  ModalContainer: {
    height: '50%',
    backgroundColor: AppColors.Colorz.offWhite,
    borderTopLeftRadius: normalized(30),
    borderTopRightRadius: normalized(30),
    padding: 10,
  },
  Arrow: {
    height: 15,
    width: 10,
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
    marginRight: normalized(50)
  },
  TextStyle: {
    alignSelf: 'center',
    fontSize: 18,
    color: AppColors.Colorz.darkBlue,
    fontFamily: 'Poppins-Medium',
    marginLeft : normalized(30)
  },
  Divider: {
    backgroundColor: '#c3c7c4',
    width: '100%',
    height: 1,
    alignSelf: 'center',
    marginVertical: normalized(12),
  },
  Divider1: {
    backgroundColor: '#c3c7c4',
    width: '20%',
    height: 4,
    alignSelf: 'center',
    borderRadius: normalized(20),
  },
});

export default CommentViewModal;
