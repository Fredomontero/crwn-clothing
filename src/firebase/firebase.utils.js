import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'
import rootReducer from '../redux/root-reducer';
import { identifier } from '@babel/types';

const config = {
    apiKey: "AIzaSyARu6mGjR4QOUADR7LwcAU6t8w-xQ-Fbao",
    authDomain: "crwn-db-429a9.firebaseapp.com",
    databaseURL: "https://crwn-db-429a9.firebaseio.com",
    projectId: "crwn-db-429a9",
    storageBucket: "crwn-db-429a9.appspot.com",
    messagingSenderId: "360263821026",
    appId: "1:360263821026:web:1628b0c17eec3ff27160bb",
    measurementId: "G-F0966ZLNVD"
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapShot = await userRef.get();
    if(!snapShot.exists){
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        }catch(error){
            console.log('Error creating user', error.message);
        }
    }
    
    // console.log(snapShot);
    return userRef;
}

firebase.initializeApp(config);

export const addCollectionsAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);
    console.log(collectionRef);

    const batch = firestore.batch();
    objectsToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef, obj);
        console.log(newDocRef);
    });

    return await batch.commit();

}

export const convertCollectionsSnapshotToMap = (collections) => {
    const transformedCollection = collections.docs.map(doc => {
        const {title, items} = doc.data();

        return{
            routeName: encodeURI(title.toLowerCase()),
            id: doc.identifier,
            title,
            items
        };
    });
    
    return transformedCollection.reduce((accumulator, collection) => {
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator;
    }, {});
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;