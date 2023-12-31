import React,{useEffect, useState, useContext} from 'react';
import useFirebase from '../../useFirebase';
import Login from '../../components/account/Login';
import LoginContext from '../../context/LoginContext';

export default function CheckoutForm({submitClickRefHandler}) {

  const fireBaseVar = useFirebase();

  const [name, setName] = useState("");
  const [lname, setLname] = useState("");
  const [cname, setCname] = useState("");
  const [address, setAddress] = useState("");
  const [town, setTown] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [delname, setDelname]  = useState("");
  const [dellname, setDellname] = useState("");
  const [delcname, setDelcname] = useState("");
  const [deladdress, setDeladdress]= useState("");
  const [deltown, setDeltown ]= useState("");
  const [delemail, setDelemail] = useState("");
  const [delphone, setDelphone] = useState("");
  const [error,setError] = useState([]);

  const loginCtx = useContext(LoginContext);

  useEffect(()=>{
    const scrollElement = document.getElementById("checkoutform");
    scrollElement.scrollIntoView(true);
  },[error]);

  const nameHandler = (e)=>{
    setName(e.target.value);
  }

  const lnameHandler = (e)=>{
    setLname(e.target.value);
  }

  const cnameHandler = (e)=>{
    setCname(e.target.value);
  }

  const addressHandler = (e)=>{
    setAddress(e.target.value);
  }
  
  const deltownHandler = (e)=>{
    setDeltown(e.target.value);
  }

  const townHandler = (e)=>{
    setTown(e.target.value);
  }
  const emailHandler = (e)=>{
    setEmail(e.target.value);
  }

  const phoneHandler = (e)=>{
    setPhone(e.target.value);
  }

  const delnameHandler = (e)=>{
    setDelname(e.target.value);
  }
  
  const dellnameHandler = (e)=>{
    setDellname(e.target.value);
  }
  
  const delcnameHandler = (e)=>{
    setDelcname(e.target.value);
  }
  
  const deladdressHandler = (e)=>{
    setDeladdress(e.target.value);
  }
  

  const delemailHandler = (e)=>{
    setDelemail(e.target.value);
  }
  
  const delphoneHandler = (e)=>{
    setDelphone(e.target.value);
  }

  const checkBlankFilds = (objectFilds, shippingAddress) =>{ 
    
    const arr = [];
    for( const [key, value] of Object.entries(objectFilds)){
         //console.log(`${key}-${value}`);
         if(value === ''){
           arr.push(key);
         }
     }
     for( const [key, value] of Object.entries(shippingAddress)){
      //console.log(`${key}-${value}`);
      if(value === ''){
        arr.push(key);
      }
     }
     return arr;
  }

  const formCheckoutSubmitHandler = async (e) =>{
    e.preventDefault(); 

    const billingAddress = {name, lname, cname, address, town, email, phone};
    const shippingAddress = {delname, dellname, delcname, deladdress,  deltown, delemail, delphone};
    const res = checkBlankFilds(billingAddress, shippingAddress);
   // 
   if(res.length > 0){
    setError(res);
   }else{
    setError([]);
    fireBaseVar.addDocument(billingAddress, shippingAddress);
   }
   //console.log(billingAddress);
   
   
  }


  return (
    <>
   

     <section class="section section-sm section-first bg-default text-md-left">
        <div class="container">

      {loginCtx.logindata.token ? <h2>Joinned With Account</h2> : ''}   
       <Login />

          { error.length > 0 ? <div className='error'>Some fields are required.</div> : '' }
        <form id="checkoutform" name="checkout" onSubmit={formCheckoutSubmitHandler}>
          <div class="row row-50 justify-content-center">
            <div class="col-md-10 col-lg-6">
              <h3 class="font-weight-medium">Billing Address</h3>
                <div class="row row-30">
                  <div class="col-sm-6">
                    <div class="form-wrap">
                      <input value={name} class={`form-input form-control-has-validation ${error.includes('name') ? 'error':''}`} id="checkout-first-name-1" type="text" name="name" onChange={nameHandler} /><span class="form-validation"></span>
                      <label class="form-label rd-input-label" for="checkout-first-name-1">First Name</label>
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="form-wrap">
                      <input class={`form-input form-control-has-validation ${error.includes('lname') ? 'error':''}`} id="checkout-last-name-1" type="text" name="lname" onChange={lnameHandler} /><span class="form-validation"></span>
                      <label class="form-label rd-input-label" for="checkout-last-name-1">Last Name</label>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="form-wrap">
                      <input class={`form-input form-control-has-validation ${error.includes('cname') ? 'error':''}`} id="checkout-company-1" type="text" name="cname" onChange={cnameHandler} /><span class="form-validation"></span>
                      <label class="form-label rd-input-label" for="checkout-company-1">Company</label>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="form-wrap">
                      <input class={`form-input form-control-has-validation ${error.includes('address') ? 'error':''}`} id="checkout-address-1" type="text" name="address" onChange={addressHandler} /><span class="form-validation"></span>
                      <label class="form-label rd-input-label" for="checkout-address-1">Address</label>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="form-wrap">
                      <input class={`form-input form-control-has-validation ${error.includes('town') ? 'error':''}`} id="checkout-city-1" type="text" name="town" onChange={townHandler}  /><span class="form-validation"></span>
                      <label class="form-label rd-input-label" for="checkout-city-1">City/Town</label>
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="form-wrap">
                      <input class={`form-input form-control-has-validation ${error.includes('email') ? 'error':''}`} id="checkout-email-1" type="email" name="email" onChange={emailHandler}  /><span class="form-validation"></span>
                      <label class="form-label rd-input-label" for="checkout-email-1">E-Mail</label>
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="form-wrap">
                      <input class={`form-input form-control-has-validation ${error.includes('phone') ? 'error':''}`} id="checkout-phone-1" type="text" name="phone" onChange={phoneHandler}  /><span class="form-validation"></span>
                      <label class="form-label rd-input-label" for="checkout-phone-1">Phone</label>
                    </div>
                  </div>
                </div>
                <br/> <br/>
                <label class="checkbox-inline text-transform-capitalize">
                  <input name="input-checkbox-1" value="checkbox-1" type="checkbox" class="checkbox-custom" /><span class="checkbox-custom-dummy"></span>My Billing Address and Shipping Address are the same
                </label>
            </div>
            <div class="col-md-10 col-lg-6">
              <h3 class="font-weight-medium">Delivery Address</h3>
                <div class="row row-30">
                  <div class="col-sm-6">
                    <div class="form-wrap">
                      <input class={`form-input form-control-has-validation ${error.includes('delname') ? 'error':''}`} id="checkout-first-name-2" type="text" name="delname" onChange={delnameHandler}  /><span class="form-validation"></span>
                      <label class="form-label rd-input-label" for="checkout-first-name-2">First Name</label>
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="form-wrap">
                      <input class={`form-input form-control-has-validation ${error.includes('dellname') ? 'error':''}`} id="checkout-last-name-2" type="text" name="dellname" onChange={dellnameHandler}  /><span class="form-validation"></span>
                      <label class="form-label rd-input-label" for="checkout-last-name-2">Last Name</label>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="form-wrap">
                      <input class={`form-input form-control-has-validation ${error.includes('delcname') ? 'error':''}`} id="checkout-company-2" type="text" name="delcname" onChange={delcnameHandler}  /><span class="form-validation"></span>
                      <label class="form-label rd-input-label" for="checkout-company-2">Company</label>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="form-wrap">
                      <input class={`form-input form-control-has-validation ${error.includes('deladdress') ? 'error':''}`} id="checkout-address-2" type="text" name="deladdress" onChange={deladdressHandler}  /><span class="form-validation"></span>
                      <label class="form-label rd-input-label" for="checkout-address-2">Address</label>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="form-wrap">
                      <input class={`form-input form-control-has-validation ${error.includes('deltown') ? 'error':''}`} id="checkout-city-2" type="text" name="deltown" onChange={deltownHandler}  /><span class="form-validation"></span>
                      <label class="form-label rd-input-label" for="checkout-city-2">City/Town</label>
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="form-wrap">
                      <input class={`form-input form-control-has-validation ${error.includes('delemail') ? 'error':''}`} id="checkout-email-2" type="email" name="delemail" onChange={delemailHandler}  /><span class="form-validation"></span>
                      <label class="form-label rd-input-label" for="checkout-email-2">E-Mail</label>
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="form-wrap">
                      <input class={`form-input form-control-has-validation ${error.includes('delphone') ? 'error':''}`} id="checkout-phone-2" type="text" name="delphone" onChange={delphoneHandler}  /><span class="form-validation"></span>
                      <label class="form-label rd-input-label" for="checkout-phone-2">Phone</label>
                    </div>
                  </div>
                </div>
            </div>
          </div>
          <button style={{display:'none'}} ref={submitClickRefHandler} type='submit'>Submit</button>
          </form>
        </div>
      </section>
    
    </>
  )
}
