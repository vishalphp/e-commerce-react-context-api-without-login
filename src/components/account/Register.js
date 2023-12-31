import React,{ useRef, useState } from 'react';
import Input from '../input/Input';
import useFirebase from '../../useFirebase';
import { useNavigate, useParams } from 'react-router-dom'


export default function Register() {
  const navigate = useNavigate();
  const { userreg } = useParams();
    const refUsername = useRef();
    const refEmail = useRef();
    const refPassword = useRef();
    const [msg, seMsg] = useState('');
    const [error, setError] = useState({
      email: false,
      password: false,
      alreadyuser: ''
    });

    const firebaseAction = useFirebase();



const registerSubmitHandler = async(e) =>{
  e.preventDefault();
  //console.log(refUsername.current.inputChangeValue);

  if(refEmail.current.inputChangeValue === '' || refEmail.current.inputChangeValue === undefined){ 
    setError(prev=>{
      return {...prev, email: true}
    });
    refEmail.current.focusOutside();
    return false;
  }
   if(refEmail.current.inputChangeValue !== '' || refEmail.current.inputChangeValue !== undefined){
    setError(prev=>{
      return {...prev, email: false}
    });
  }

   if(refPassword.current.inputChangeValue === '' || refPassword.current.inputChangeValue === undefined){ 
    setError(prev=>{
      return {...prev, password: true}
    });
    refPassword.current.focusOutside();
    return false;
  }
   if(refPassword.current.inputChangeValue !== '' || refPassword.current.inputChangeValue !== undefined){
    setError(prev=>{
      return {...prev, password: false}
    });
  }

 // const res = await firebaseAction.checkRegisterUsers(refEmail.current.inputChangeValue, refUsername.current.inputChangeValue);

  const dataReg = {
    email: refEmail.current.inputChangeValue,
    password: refPassword.current.inputChangeValue
  }

 /* if(res){
    setError(prev=>{
      return {...prev, alreadyuser: 'Username or Email already exists'}
    });
  }else{
    setError(prev=>{
      return {...prev, alreadyuser: ''}
    });
   
    //navigate(`/login/${regis}`); 
  }*/
 const regis =  await firebaseAction.registerUser(dataReg);
    refEmail.current.cleanCurrentInputState();
    refPassword.current.cleanCurrentInputState();
 
    if(regis === 2){
      seMsg('User has been registered');
    }else if(regis === 'auth/email-already-in-use'){
      seMsg('user already exists.');
    }else{
      seMsg('Something went wrong.');
    }
}

/*for(const [key, value] of Object.entries(error)) {
          console.log(`${key}: ${value}`);
        }*/ 
   
return (
    <>
    <h2 className='headingacount'>Register</h2>
    {
      msg ? <div className='success'>{msg}</div> : ''
    }
     {
        Object.entries(error).map((err, i, arr)=>
           err[1] === true && err[0] !== 'alreadyuser'  ? <div className='err'>{` ${err[0]} is required`}</div> : err[0] === 'alreadyuser' && err[1] !== ''? <div className='err'>{err[1]}</div> :'' 
        )
     }
     <form onSubmit={registerSubmitHandler}>
        <Input type="email" id="email" className="email" value="" label="email" ref={refEmail}  />
        <Input type="password" id="regpassword" className="password" value="" label="password" ref={refPassword} />
        <Input type="submit" id="register" className="register" value="Register"  />
     </form>
    </>
  )
}
