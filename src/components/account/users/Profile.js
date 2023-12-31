import React, {useRef, useReducer, useContext, useEffect, useState} from 'react';
import Input from '../../input/Input';
import useFirebase from '../../../useFirebase';

const prErFunction = (state, action) => {

  if(action.type === 'disp'){
    return {
      displayName: action.value, 
      mobile: state.mobile, 
      photpurl: state.photpurl
    } 
  }
 
  if(action.type === 'mobile'){
    return {
      displayName: state.displayName, 
      mobile: action.value, 
      photpurl: state.photpurl
    } 
  }
  
  if(action.type === 'photourl'){
    return {
      displayName: state.displayName, 
      mobile: state.mobile, 
      photpurl: action.value
    } 
  }

  if(action.type === 'all'){
    return {
      displayName: action.value, 
      mobile: action.value, 
      photpurl: action.value
    } 
  }

  return {
    displayName: state.displayName, 
    mobile: state.mobile, 
    photpurl: state.photpurl
  }

}

export default function Profile() {

  const dispRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const mobileRef = useRef();
  const photourlRef = useRef();
  const initialState = {displayName: false, mobile: false, photpurl: false}
  const [prErState, prErReducer] =useReducer(prErFunction, initialState);
  const firbase = useFirebase();
  const [userPhoto, setUserPhoto] = useState('');


  const submitProfileData = async(e) =>{
     e.preventDefault();

     if((dispRef.current.inputChangeValue === '' || dispRef.current.inputChangeValue === undefined) && (mobileRef.current.inputChangeValue === '' || mobileRef.current.inputChangeValue === undefined) && (photourlRef.current.inputChangeValue === '' || photourlRef.current.inputChangeValue === undefined)){
      prErReducer({type: 'all', value: true});
      return false;
     }

     if(dispRef.current.inputChangeValue === '' || dispRef.current.inputChangeValue === undefined){
      dispRef.current.focusOutside();
      prErReducer({type: 'disp', value: true});
      return false;
     }
     if(dispRef.current.inputChangeValue !== '' || dispRef.current.inputChangeValue !== undefined){
      prErReducer({type: 'disp', value: false});
     }
    
     if(mobileRef.current.inputChangeValue === '' || mobileRef.current.inputChangeValue === undefined){
      mobileRef.current.focusOutside();
      prErReducer({type: 'mobile', value: true});
      return false;
     }
     if(mobileRef.current.inputChangeValue !== '' || mobileRef.current.inputChangeValue !== undefined){
      prErReducer({type: 'mobile', value: false});
     }
     if(photourlRef.current.inputChangeValue === '' || photourlRef.current.inputChangeValue === undefined){
      photourlRef.current.focusOutside();
      prErReducer({type: 'photourl', value: true});
      return false;
     }
      if(photourlRef.current.inputChangeValue === '' || photourlRef.current.inputChangeValue === undefined){
      prErReducer({type: 'photourl', value: false});
     }

   const result =  await firbase.updateUserProfile(dispRef.current.inputChangeValue, photourlRef.current.inputChangeValue);

  }

  const prfRun = async() =>{
    const data = await firbase.publicProfileDataShow();
    dispRef?.current?.setInputValueFromOutside(data?.displayName);
    emailRef?.current?.setInputValueFromOutside(data?.email);
    photourlRef?.current?.setInputValueFromOutside(data?.photoURL);
    setUserPhoto(data?.photoURL);
  }

  useEffect(()=>{
    prfRun();
  },[]);
 

  return (
    <div className='container'>
      
      <h2 className='heading c6'>Public profile</h2>
      {
        Object.entries(prErState).map((err, i, arr) => {
          const text = err[0] === 'photpurl' ? 'Photo URL is Required' : err[0]+' is Required';
          return err[1] === true ? <div className='err c2'>{text}</div> : ''
        })
      }
      <form onSubmit={submitProfileData}>
     <div className='dpflex'>
      <div className='c6'>
        <Input type="text" ref={dispRef} className="displayname" id="displayname" label="Display Name" />
      </div>
      <div className='c6'>
        <Input type="email" readonly="true" ref={emailRef} className="email" id="email" label="email" />
      </div>
      <div className='c6'>
        <Input type="password" className="password" ref={passwordRef} id="password" label="password" />
      </div>
      <div className='c6'>
        <Input type="text" className="mobile" ref={mobileRef} id="mobile" label="mobile" />
      </div>
      <div className='c6'>
        <Input type="text" className="photourl" ref={photourlRef} id="photourl" label="Photo URL" />
        {userPhoto !=='' ? <img src={userPhoto} alt="publicphoto" width="40" /> : ''}
      </div>
      
     </div>
     <div className='dpflex c2'>
       <Input type="submit" id="login" className="login" value="Update Profile"  />
      </div>
    </form>
    </div>
  )
}
