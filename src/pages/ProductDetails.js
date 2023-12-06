import React, {useContext, useState} from 'react'
import { useParams } from 'react-router-dom';
import ProductContext from '../context/ProductContext';
import CartContext from '../context/CartContext';
import './ProductDetails.scss';
import imageRatingFill from '../asset/images/fillstR.PNG';
import imageRatingBlank from '../asset/images/comhiclipartdhqox.jpg';
import { FaMinus, FaPlus, FaCartShopping } from "react-icons/fa6";
import Breadcrumbs from '../sections/common/Breadcrumbs';

export default function ProductDetails() {
    const {id} = useParams();
    const [productDefaultCount, setProductDefaultCount] = useState(1);

    const productContextData = useContext(ProductContext);
    const cartContextData = useContext(CartContext);

    const productsIdDetails = productContextData.productsList.products.filter(prod => prod.id === id );
    const [imageUpdate, setImageUpdate] = useState(productsIdDetails[0]?.image);
    
    let starHtml =[];
    for (let i=0; i < 5; i++){
      starHtml.push(i < productsIdDetails[0]?.rating ? <img src={imageRatingFill} /> : <img src={imageRatingBlank} />)   
    }

    const onImageClickChangeHandler=(images)=>{
      setImageUpdate(images);
    }

    const plusDefaultCountHandler =()=>{
      const incCount = productDefaultCount < 1000 ? Number(productDefaultCount) + 1 : Number(productDefaultCount);
      setProductDefaultCount(incCount);
    }
    const minusDefaultCountHandler=()=>{
      const downCount = productDefaultCount > 1 ? Number(productDefaultCount) - 1 : Number(productDefaultCount);
      setProductDefaultCount(downCount);
    }

  return (
    <>
    <div className='container'>
      <Breadcrumbs banner={false} leftalign={true} />
      <div className='wraperproduct'>
        <div className='leftimage'>
          <div className='leftscroll'>
            {productsIdDetails[0]?.dataimages?.map(images => <div className='imageslist'><img src={images} alt={productsIdDetails[0]?.title} onClick={()=>onImageClickChangeHandler(images)} /></div>)}
          </div>
          <div className='fullimage'>
            <img src={imageUpdate} alt={productsIdDetails[0]?.title} />
          </div>
          
        </div>
        <div className='rightdetails'>
          <div className='productwerp'>
           <h1 className='prodtitle'>{productsIdDetails[0]?.title}</h1>
           <div className='rating'>
             <div className='rate'> {productsIdDetails[0]?.rating ? productsIdDetails[0]?.rating : 0 }</div>
             <div className='ratingblock'>
              {starHtml}
             </div>
           </div>
           <div className='prprice'>${productsIdDetails[0]?.price}</div>
           <h3 className='proddescr'>Product Details</h3>
           <p>{productsIdDetails[0]?.description}</p>

           <div class="table-product-stepper">
                      <div class="stepper "><input class="form-input stepper-input" type="number" value={productDefaultCount} min="1" max="1000" /><span class="stepper-arrow up" onClick={plusDefaultCountHandler}><FaPlus /></span><span class="stepper-arrow down"  onClick={minusDefaultCountHandler}><FaMinus /></span></div>
            </div>

            <div class="addtobuttonbox">
                  <div class="row row-50 justify-content-center">
                    <span class="button button-primary button-zakaria customaddtocart" onClick={() => cartContextData.addToCart(productsIdDetails[0], productDefaultCount)}><FaCartShopping /> Proceed</span>
                  </div>
             </div>

         </div>
        </div>
        
    </div></div>
  
    </>
  )
}
