import React, {useContext, useEffect, useState} from 'react'
import RangeSlider from '../../components/rangeslider/RangeSlider';
import './sidebar.scss';
import ProductContext from '../../context/ProductContext';

export default function Sidebar(props) {
  
  const productContextData = useContext(ProductContext);
  const [categoryCheckbox, setCategoryCheckbox] = useState([]);

  const filterPrice = productContextData.productsList.products.map(prod=>{
    return {id: prod.id, value: prod.price}
  });

  const sliderMinMaxValuesHandler = (val) =>{
    props.rangeSliderPosition(val);
  }

  const categoryHandler = (e) =>{
    //check true false
    //const value = .target.type === 'checkbox' ? e.target.checked : e.target.value;
    if((categoryCheckbox.some(cat => cat === e.target.value)) && (e.target.checked === false)){
      setCategoryCheckbox(categoryCheckbox.filter((cat) => cat !== e.target.value));
    }else{
      setCategoryCheckbox(prev =>{
        return [...prev, e.target.value]
      })
    }

    }

    useEffect(()=>{
      props.catFilter(categoryCheckbox);
    },[categoryCheckbox]);
  

  return (
     <>
      
            <div class="col-lg-4 col-xl-3">
              <div class="aside justify-content-md-between">
                <div class="aside-item col-12">
                  <h6 class="aside-title">Filter by Price</h6>
                 
                   <RangeSlider filterPrice={filterPrice} sliderMinMaxValues={sliderMinMaxValuesHandler} />
             
                </div>
                <div class="aside-item col-12">
                  <h6 class="aside-title">Categories</h6>
                  <ul class="list-shop-filter">
                  {
                  productContextData.productsList.category.map((cat, index) => <li key={index}>
                      <label class="checkbox-inline">
                        <input name="input-group-radio" value={cat} type="checkbox" class="checkbox-custom" onChange={categoryHandler} /><span class="checkbox-custom-dummy"></span>{cat}
                      </label>
                    </li>
                   )}
                  </ul>
                
                </div>
               
              </div>
            </div>
 
       
     </>
  )
}
