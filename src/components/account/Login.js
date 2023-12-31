import React,{useReducer, useRef, useState, useContext, useEffect} from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Input from '../input/Input';
import useFirebase from '../../useFirebase';
import LoginContext from '../../context/LoginContext';


const errFunctionDispatch = (state, action) =>{

  if(action.type === 'usernameErrNagtive'){
    
    return {
      username: action.result, 
      password: state.password
    }

  }else if(action.type === 'usernameErrPositive'){
    
    return {
      username: action.result, 
      password: state.password
    }

  }else if(action.type === 'passwordErrNagtive'){
    
    return {
      username: state.username, 
      password: action.result
    }
    
  }else if(action.type === 'passwordErrPositive'){
    
    return {
      username: state.username, 
      password: action.result
    }
    
  }

  return {
    username: state.username, 
    password: state.password
  }

}


export default function Login() {
 
  const firBase = useFirebase();

  const usernameRef = useRef();
  const passwordRef = useRef();
  const [err, setErr] = useState({login: false});
  const initalValueErr = {username: false, password: false};
  const [errInitalState, errDispatch] = useReducer(errFunctionDispatch, initalValueErr);
  const location = useLocation();

  const navigate = useNavigate();

  const loginCtx = useContext(LoginContext);


  const loginUsers = async(e) =>{
    e.preventDefault();

    if(usernameRef.current.inputChangeValue === '' || usernameRef.current.inputChangeValue === undefined){
       usernameRef.current.focusOutside();
       /*setErr((prev)=>{
        return {...prev, username: true}
       });*/
       errDispatch({type: 'usernameErrNagtive', result: true});
       return false;
    }

    if(usernameRef.current.inputChangeValue !== '' || usernameRef.current.inputChangeValue !== undefined){
      /*setErr((prev)=>{
       return {...prev, username: false}
      });*/
      errDispatch({type: 'usernameErrPositive', result: false});
   }

    if(passwordRef.current.inputChangeValue === '' || passwordRef.current.inputChangeValue === undefined){
      passwordRef.current.focusOutside();
        /*setErr((prev)=>{
        return {...prev, password: true}
       });*/
       errDispatch({type: 'passwordErrNagtive', result: true});
      return false;
   }

   if(passwordRef.current.inputChangeValue !== '' || passwordRef.current.inputChangeValue !== undefined){
      /*setErr((prev)=>{
      return {...prev, password: false}
     });*/
     errDispatch({type: 'passwordErrPositive', result: false});
 }

   const dataLogin = await firBase.loginUser(usernameRef.current.inputChangeValue, passwordRef.current.inputChangeValue);
 

   if(dataLogin ===1){

    setErr({login:false});
   }else{
    loginCtx.setLoginData({
     token:null,
     email: null,
     uuid: null,
     expiresIn: 0
    });
    setErr({login:true});
   }
   

  }

  /*useEffect(()=>{
    loginCtx.setLoginData({
      token:null,
      email: null,
      uuid: null,
      expiresIn: 0
     });
  },[location]);*/

  useEffect(()=>{
   if(loginCtx.logindata.token !== null && !location.pathname.includes('checkout') ){
    navigate("/account/profile");
  }
   //ref();
  },[loginCtx.logindata.token]);
  

  const ref = async() =>{
    await firBase.LoginWithRefreshToken();
  }


  return (
    <>

    { 
    loginCtx.logindata.token !== null && location.pathname.includes('checkout') ? 
    <div className='loginprofilename'>
      {`You Have Logged with ${loginCtx.logindata.email} email address.`}
    </div> : 

    <form onSubmit={loginUsers}>
     <h2 className='headingacount'>Login</h2>
     {
       Object.entries(errInitalState).map((err, i, arr)=> {
          return err[1] === true ? <div className='err'>{`${err[0]} is required field`}</div> : ''
       } )
     }
     {
      err.login ? <div className='err'>Username Or Password not matched.</div> : ''
     }
     <Input type="email" id="username" className="username" value="" ref={usernameRef} label="username"  />
     <Input type="password" id="password" className="password" value="" ref={passwordRef} label="password"  />
     <Input type="submit" id="login" className="login" value="Login"  />
     <div className='defultlogin'>To Use below username and password to login:<br/>
     adminex@gmail.com/adminex</div>
     </form>
     

    }
    </>
  )
}
