import React, { useEffect, useContext, useState } from 'react'
import useFirebase from '../../../useFirebase';
import LoginContext from '../../../context/LoginContext';

export default function Orders() {
  const firbase = useFirebase();
  const loginCtx = useContext(LoginContext);
  const [orderData, setOrderData] = useState([]);

  useEffect(()=>{
   orderRun();
     
  },[]);

  const orderRun = async() =>{
      const ordData = await firbase.getOrdersByUserId(loginCtx.logindata.uuid);
      setOrderData(ordData);
  }

  const loopOrders = (orders) =>{
        const data = orders.map(ord=> <div className='orderwrap'><div className='title'>Name: {ord.title}</div><div className='stock'>Qty: {ord.qty}</div><div className='price'>Price: {ord.price}</div><div className='cate'>Category: {ord.category}</div><div className='imag'><img src={ord.image} alt=""/></div></div>)
        return data;
  }

  const loopShipping = (ship) =>{

  const gh = Object.entries(ship).sort().map(([key, values]) => 
  {
  const label = key ==='delname'? 'Name' : key === 'dellname' ? 'Last Name' : key === 'delemail'? 'Email' : key === 'deladdress' ? 'Address' : key === 'delphone'? 'Phone Number': key === 'deltown'? 'Town':'Company Name';

 return <div className='delship'>{label}: {values}</div>

}
)

    return <div className='shipwrap'>{gh}</div>;
    
  }

  const loopBilling = (billing) =>{

    const gh = Object.entries(billing).sort().map(([key, values]) => 
    {
    const label = key ==='name'? 'Name' : key === 'lname' ? 'Last Name' : key === 'email'? 'Email' : key === 'address' ? 'Address' : key === 'phone'? 'Phone Number': key === 'town'? 'Town':'Company Name';
  
   return <div className='bill'>{label}: {values}</div>
  
  }
  );
  
      return <div className='billwrap'>{gh}</div>;
      
    }

  const dateConvet = (dateTimestep) =>{
    const date = new Date(dateTimestep * 1000);
    return date.toISOString().slice(0, 19).replace('T', ' ');
  }


  return (
    <div className='container'>
       <h2 class="heading c6">Orders</h2>
       <table className='ordtabl'>
        <tr>
          <th>
            order number
          </th>
          <th>
            orders
          </th>
          <th>
            Shipping Info
          </th>
          <th>
            Billing Info
          </th>
          <th>
            Date
          </th>
        </tr>
         
         {
          orderData.map((order, index)=> <tr className='dataorders'><td>{index+1}</td><td>{loopOrders(order.orders)}</td><td>{loopShipping(order.shippingAddress)}</td><td>{loopBilling(order.billingAddress)}</td><td>{dateConvet(order.date.seconds)}</td></tr>)
         }

       </table>

    </div>
   
  )
}
