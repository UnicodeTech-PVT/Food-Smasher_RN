import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import { collection } from '../../Utils/AppStrings';
import { Alert } from 'react-native';
import { useDispatch } from 'react-redux';
import { setIsLoader } from '../../Redux/Reducers/AppReducer';
import { AppRoutes } from '../../Utils/Routes';

export const socialAuthCheckRequest = async (
  userInput: any,
  onComplete: any,
) => {
  await auth()
    .createUserWithEmailAndPassword(
      userInput.email.toLocaleLowerCase(),
      userInput.socailToken,
    )
    .then(async () => {
      onComplete({status: true, message: 'user not Exist'});
    })
    .catch(error => {
      let errorMsg = '';
      if (error.code === 'auth/email-already-in-use') {
        errorMsg = 'That email address is already in use!';
      } else if (error.code === 'auth/invalid-email') {
        errorMsg = 'That email address is invalid!';
      } else if (error.code === 'auth/user-not-found') {
        errorMsg = 'User not found against this Email.';
      }
      onComplete({status: false, message: errorMsg});
    });
};

export const checkUserInCollection = async (
  userInput: any,
  onComplete: any,
) => {
  firestore()
    .collection(collection.Users)
    .where('socailToken', '==', userInput.socailToken)
    .get()
    .then((querySnapshot: any) => {
      if (querySnapshot?._docs?.length == 0) {
        onComplete({status: false, message: ''});
      } else {
        querySnapshot.forEach(async (doc: any) => {
          let loginObj = {
            ...doc.data(),
          };
          onComplete({status: true, data: loginObj});
        });
      }
    })
    .catch(error => {
      onComplete({status: false, message: error});
    });
};

export const CategoriesHandler = async (data:any, onComplete :any) =>{
  await firestore()
  .collection(collection.Users)
  .doc(data.userId)
  .update({categories: data.categories})
  .then(() => {
    Alert.alert('user created Successfully!');
    onComplete({status: true})
  })
  .catch(error => {
    onComplete({status: false})

  });
}

export const loginHandler = async (data:any, onComplete:any) =>{
 try {
  const userCredential = await auth().signInWithEmailAndPassword(
    data.email,
    data.password,
  );
  let userData:any =null;
       await firestore()
          .collection(collection.Users)
          .where('email', '==', data.email.toLocaleLowerCase())
          .get()
          .then(snapShot => {
            snapShot.forEach(querySnapShot => {
               userData = querySnapShot.data();
            });
            onComplete({status :true, data:userData})
          });
 } catch (error) {
  onComplete({status:false})
 }
}


export const MapHandler = async (payload: any, onComplete:any) => {
  try {
    await firestore()
      .collection(collection.Users)
      .doc(payload.userId)
      .update({ location: payload.location });

    onComplete({ status: true });

  } catch (error) {
    console.error('Error in MapHandler:', error);

    onComplete({ status: false });
  }
};



export const SignUpHandler = async (data:any,onComplete:any) => {
  try {
    await firestore().collection(collection.Users).doc(data.userId).set(data);
    onComplete({status :true})
  } catch (error) {
    onComplete({status: false})
  }
}