import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Comment } from './CommentsModal';
import { AppColors, AppImages, normalized } from '../../../../../../Utils/AppConstants';

interface CommentItemProps {
  comment: Comment;
  onLike: (id: number) => void;
}

const CommentItem: React.FC<CommentItemProps> = ({ comment, onLike }) => {
  const [isLiked, setIsLiked] = useState(false);

  const handleLikePress = () => {
    setIsLiked(!isLiked); 
    // onLike(comment.id); 
  };
  return (
    <View style = {styles.commentContainer}>
      <Image source={ comment.avatarUrl } style={styles.avatar} />
      <View style={styles.commentBody}>
        <View>
        <View style = {styles.NameText}>
      <Text style={styles.author}>{comment.author}</Text>
      <Text style={styles.timeAgo}>{comment.timeAgo}</Text>
      </View>
      <View style={styles.ContentText}>
      <Text style={styles.content}>{comment.content}</Text>
      <TouchableOpacity style={styles.HeartContent} onPress={handleLikePress}>
        <Image
          source={isLiked ? AppImages.Home.redHeart : AppImages.Home.heartOutline}
          style={styles.heartStyle}
        />
        <Text style={styles.likeText}>{comment.likes}</Text>
      </TouchableOpacity>
    </View>
      <TouchableOpacity onPress={() => {}}>
            <Text style={styles.replyText}>Reply</Text>
           </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  commentContainer: {
    flexDirection: 'row',
    padding: 10,
    alignItems : 'center'
  },
  avatar: {
   height :  normalized(40),
   width : normalized(40),
    borderRadius: normalized(20),
    marginRight: 10,
  },
  commentBody: {
    flex: 1,
  },
  author: {
    fontSize: 14,
    fontFamily : 'Poppins-SemiBold',
    color : AppColors.Colorz.darkBlue
  },
  timeAgo: {
    fontSize: normalized(10),
    color: '#888',
  },
  NameText : {
    flexDirection : 'row',
    alignItems : 'center',
    gap : normalized(12)
  },
  content : {
    fontSize :normalized(9),
    flex: 1
  },
  likeText : {

  },
  ContentText  : {
    flexDirection : 'row',
    alignContent : 'space-between',
  },
  replyText : {
    color : AppColors.Colorz.orange,
    marginTop : -20,
    width :normalized(35)
  },
  heartStyle : {
    height  : normalized(19),
    width : normalized(20),
    resizeMode : 'contain'

  },
  HeartContent : {
    alignItems : 'center',
  }
});

export default CommentItem;
