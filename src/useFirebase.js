import {useCallback, useContext} from 'react';
import ProductContext from './context/ProductContext';
import CartContext from './context/CartContext';
import { useNavigate } from 'react-router-dom'

import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, setDoc, doc, addDoc } from 'firebase/firestore/lite';

const useFirebase = () => {

   const productContextData =  useContext(ProductContext);
   const cartContextData = useContext(CartContext);
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

          const collectionRef = await collection(db, 'orders',);
      
          // Replace this object with the data you want to insert
          const dataToInsert = {
            orders: cartContextData?.cartCtxData?.products, 
            billingAddress,
            shippingAddress,
            // Add other fields as needed
          };

          //console.log(dataToInsert);
      
          // Perform the insertion
          await addDoc(collectionRef, dataToInsert);
          cartContextData.removeCart();
          console.log('Document inserted successfully!'); 
          navigate("/"); 
           
        } catch (error) {
          console.error('Error inserting document:', error.message);
        }
      };
     
     

  return {getProductsList, addDocument}
}


export default useFirebase;