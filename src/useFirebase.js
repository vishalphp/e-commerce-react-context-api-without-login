import {useCallback, useContext, useState} from 'react';
import ProductContext from './context/ProductContext';
import CartContext from './context/CartContext';
import { useNavigate } from 'react-router-dom'

import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDoc, or, and, getDocs, query, where, setDoc, doc, addDoc, updateDoc } from 'firebase/firestore/lite';
import { getAuth, signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile, signInWithCustomToken  } from "firebase/auth";

import LoginContext from './context/LoginContext';


const useFirebase = () => {
 
   const productContextData =  useContext(ProductContext);
   const cartContextData = useContext(CartContext);
  const loginCtx = useContext(LoginContext);
  const [loginNan, setLoginNan] = useState(false);

   const navigate = useNavigate();


    const firebaseConfig = {
        apiKey: process.env.REACT_APP_APIKEY ? process.env.REACT_APP_APIKEY : '',
        authDomain: process.env.REACT_APP_AUTHDOMAIN ? process.env.REACT_APP_AUTHDOMAIN : '',
        projectId: process.env.REACT_APP_PROJECTID ? process.env.REACT_APP_PROJECTID : '',
        storageBucket: process.env.REACT_APP_STORAGEBUCKET ? process.env.REACT_APP_STORAGEBUCKET: '' ,
        messagingSenderId: process.env.REACT_APP_MESSAGESENDID ? process.env.REACT_APP_MESSAGESENDID : '',
        appId: process.env.REACT_APP_PROID ? process.env.REACT_APP_PROID : ''
      };

      const app = initializeApp(firebaseConfig);
      const db = getFirestore(app); 
      
        const getProducts = async(db) => {
          setTimeout(()=>{}, 2000);

        const collectionCol = await collection(db, 'collections');
        const collectionSnapshot = await getDocs(collectionCol);
        const collectionList = await collectionSnapshot.docs.map(doc => doc.data());

        //category
        const catArry = collectionList.map(catList => catList.category);
        const uniquecat = [...new Set(catArry)];

        const updatedProducts = {
          products: collectionList,
          category: uniquecat,
          response: 1
        }
        productContextData.setProductsList(updatedProducts);

    
        //return collectionList;
      }

      const getProductsList = useCallback(async() =>{
                await getProducts(db);
      },[]);

      const addDocument = async (billingAddress, shippingAddress) => {
        try {

          const d = new Date();
          // Replace this object with the data you want to insert
          const dataToInsert = {
            orders: cartContextData?.cartCtxData?.products, 
            billingAddress,
            shippingAddress,
            date: d
            // Add other fields as needed
          }; 
          const userid = loginCtx.logindata.token ? loginCtx.logindata.uuid : Math.floor(Math.random() * 1000000000);        
        
        /* const collectionRef = await collection(db, 'orders',);
          // Perform the insertion
          const result  = await addDoc(collectionRef, dataToInsert).then(d => d.id); 
          
           const usersRef = await collection(db, 'users',);
           const userData = {
              orderId: result,
              userID: userid,
              date: d,
          };
          await addDoc(usersRef, userData).then(d => d.id); */

          const docRef = doc(db, "users", userid);
          const colRef = collection(docRef, "orders")
          await addDoc(colRef, dataToInsert);

          //cartContextData.removeCart();
          console.log('Document inserted successfully!'); 
          //navigate("/"); 
           
        } catch (error) {
          console.error('Error inserting document:', error.message);
        }
      };

      const checkRegisterUsers = async(email, username) =>{

        let docExist = null;
        const q = query(collection(db, "users"), or(where("email", "==", email), where("username", "==", username)));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          docExist = doc.id;
          //console.log(doc.id, " => ", doc.data());
        });
         
        return docExist;
      }

      const registerUser = async(data) =>{
        
        try {
          const authentication = getAuth();
          //const collectionRef = await collection(db, 'users');      
          // Replace this object with the data you want to insert
          // Perform the insertion
         // await addDoc(collectionRef, data);
          //firebase add users
           await createUserWithEmailAndPassword(authentication, data.email, data.password);
         // if(response._tokenResponse.refreshToken){
            console.log('Document inserted successfully!'); 
            return 2;
        
        } catch (error) {
          console.error('Error inserting document:', error.message);
          return error.code;
        }

      }

      const loginUser = async(username, password) =>{
        //https://www.freecodecamp.org/news/react-firebase-authentication-and-crud-operations/
        //const q = query(collection(db, "users"), and(where("password", "==", password), where("username", "==", username)));
        try{
          const authentication = getAuth();
          //console.log(authentication.currentUser);
          signInWithEmailAndPassword(authentication, username, password)
          .then((response) => {   
            loginCtx.setLoginData({
              token: response._tokenResponse.idToken,
              email: response._tokenResponse.email,
              uuid: response.user.uid,
              expiresIn: response._tokenResponse.expiresIn
            });
            setLoginNan(false);
            //sessionStorage.setItem('token', response._tokenResponse.refreshToken)
          }).catch(function(error) {
            setLoginNan(true);
          })
       // const querySnapshot = await getDocs(q);
        /*querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          docExist = doc.id;
          loginCtx.setLoginData({
            username: doc.data().username,
            password: doc.data().password
          });
          //console.log(doc.id, " => ", doc.data());
        });*/

      }catch(e){
        setLoginNan(true);
        loginCtx.setLoginData({
          token: null,
          email: null,
          uuid: null,
          expiresIn: 0
        });

          throw e.message;
      }
 

      if(loginNan === false){
        return 1;
      }else{
         return 0;
      }
        

      }

      const LoginWithRefreshToken = async() =>{
          console.log("refersh");
         
        const auth = getAuth();
        //console.log(auth);
       const iih =  await auth.currentUser.getIdTokenResult();
       console.log(iih);
       console.log("updateToken");
         await auth.currentUser.getIdToken(true)
         .then(function(idToken) {

          console.log(idToken);
         
         }).catch(function(error) {
         
         });

      }

      const checkAuthToken = async() =>{
        const auth = getAuth();
        //console.log(auth);
       const iih =  await auth?.currentUser?.getIdTokenResult();
       return iih?.token ? iih?.token : null;
      }

      const publicProfileDataShow=async()=>{

        const auth = getAuth();
        //console.log(auth);
       const user =  await auth.currentUser;
       if (user !== null) {
        // The user object has basic properties such as display name, email, etc.
     
        const userData = {
          displayName: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
          emailVerified: user.emailVerified,
          uid: user.uid
        }
        
        return userData;

      }

      return null;

      }

      const updateUserProfile = async(displayName, photoURL) =>{
        const auth = getAuth();
        const user = auth.currentUser;
 
        let resp = null;
          await updateProfile(user,{
            displayName: displayName,
            photoURL: photoURL
          }).then(() => {
            // Update successful
              resp = 1;
          }).catch((error) => {
             throw error.message;
          }); 
       return resp;
      }

      const signOutFunction = async() =>{
        const auth = getAuth();
       await signOut(auth).then(() => {
          // Sign-out successful.
          loginCtx.setLoginData({
            token: null,
            email: null,
            uuid: null,
            expiresIn: 0
          });
        }).catch((error) => {
          // An error happened.
          throw error
        });
    

      }
     
     

  return {
    getProductsList, 
    addDocument, 
    checkRegisterUsers, 
    registerUser, 
    loginUser,
    LoginWithRefreshToken,
    checkAuthToken,
    publicProfileDataShow,
    updateUserProfile,
    signOutFunction
  }

}


export default useFirebase;